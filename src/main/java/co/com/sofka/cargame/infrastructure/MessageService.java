package dev.j3c.sofkau.cleanarch.infrastructure;

import dev.j3c.sofkau.cleanarch.domain.generic.Command;
import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;
import dev.j3c.sofkau.cleanarch.infrastructure.generic.EventSerializer;
import com.rabbitmq.client.*;
import dev.j3c.sofkau.cleanarch.infrastructure.generic.CommandSerializer;
import io.quarkiverse.rabbitmqclient.RabbitMQClient;
import io.quarkus.runtime.StartupEvent;
import io.vertx.mutiny.core.eventbus.EventBus;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;
import java.io.IOException;
import java.io.UncheckedIOException;
import java.nio.charset.StandardCharsets;

@ApplicationScoped
public class MessageService {
    private static final String EXCHANGE = "executor";
    private static final String EXECUTOR_QUEUE = "executor.queue";
    private static final String EVENT_QUEUE = "event.queue";

    private final EventBus bus;
    private final RabbitMQClient rabbitMQClient;

    private Channel channel;

    public MessageService(EventBus bus, RabbitMQClient rabbitMQClient) {
        this.bus = bus;
        this.rabbitMQClient = rabbitMQClient;
    }

    public void onApplicationStart(@Observes StartupEvent event) throws IOException {
        Connection connection = rabbitMQClient.connect();
        channel = connection.createChannel();
        channel.exchangeDeclare(EXCHANGE, BuiltinExchangeType.TOPIC, true);
        //for command
        channel.queueDeclare(EXECUTOR_QUEUE, true, false, false, null);
        channel.queueBind(EXECUTOR_QUEUE, EXCHANGE, "executor-command");
        //for event
        channel.queueDeclare(EVENT_QUEUE, true, false, false, null);
        channel.queueBind(EVENT_QUEUE, EXCHANGE, "trigger-event");

        channel.basicConsume(EXECUTOR_QUEUE, true, setupReceivingForCommand());
        channel.basicConsume(EVENT_QUEUE, true, setupReceivingForEvent());
    }

    private Consumer setupReceivingForEvent() {
        return new DefaultConsumer(channel) {
            @Override
            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {
                var message = new String(body, StandardCharsets.UTF_8);
                try {
                    var event = EventSerializer.instance()
                            .deserialize(message, Class.forName(properties.getContentType()));
                    bus.publish(event.getType(), event);
                } catch (ClassNotFoundException e) {
                    e.printStackTrace();
                }
            }
        };
    }

    private DefaultConsumer setupReceivingForCommand() {
        return new DefaultConsumer(channel) {
            @Override
            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {
               var message = new String(body, StandardCharsets.UTF_8);
               try {
                   System.out.println("handle command");
                    var command = CommandSerializer.instance()
                            .deserialize(message, Class.forName(properties.getContentType()));
                    bus.publish(command.getType(), command);
                } catch (ClassNotFoundException e) {
                    e.printStackTrace();
                }

            }
        };
    }

    public void send(Command command) {
        try {
            System.out.println("send command");
            var message = CommandSerializer.instance().serialize(command);
            var props = new AMQP.BasicProperties.Builder().contentType(command.getClass().getTypeName()).build();
            channel.basicPublish(EXCHANGE, "executor-command", props, message.getBytes(StandardCharsets.UTF_8));
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }

    public void send(DomainEvent event) {
        try {
            var message = EventSerializer.instance().serialize(event);
            var props = new AMQP.BasicProperties.Builder().contentType(event.getClass().getTypeName()).build();
            channel.basicPublish(EXCHANGE, "trigger-event", props, message.getBytes(StandardCharsets.UTF_8));
        } catch (IOException e) {
            throw new UncheckedIOException(e);
        }
    }
}