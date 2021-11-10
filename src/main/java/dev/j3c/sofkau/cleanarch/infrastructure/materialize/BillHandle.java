package dev.j3c.sofkau.cleanarch.infrastructure.materialize;

import dev.j3c.sofkau.cleanarch.domain.juego.events.JuegoCreado;
import com.mongodb.BasicDBObject;
import com.mongodb.client.MongoClient;
import com.mongodb.client.model.Filters;
import dev.j3c.sofkau.cleanarch.domain.juego.events.JuegoFinalizado;
import dev.j3c.sofkau.cleanarch.domain.juego.events.JuegoIniciado;
import dev.j3c.sofkau.cleanarch.domain.juego.events.JugadorAnadido;
import io.quarkus.vertx.ConsumeEvent;
import org.bson.Document;

import javax.enterprise.context.ApplicationScoped;
import java.util.HashMap;
import java.util.Map;

@ApplicationScoped
public class BillHandle {
    private final MongoClient mongoClient;

    public BillHandle(MongoClient mongoClient) {
        this.mongoClient = mongoClient;
    }


    @ConsumeEvent(value = "sofkau.juego.juegocreado", blocking = true)
    void consumeJuegoCreado(JuegoCreado event) {
        System.out.println("materialize bill");
        Map<String, Object> document = new HashMap<>();
        document.put("_id", event.getAggregateId());
        document.put("kilometros", event.getKilometros());
        document.put("numeroDeCarriles", event.getNumeroDeCarriles());
        document.put("jugando", event.getState());
        mongoClient.getDatabase("queries").getCollection("juego")
                .insertOne(new Document(document));
    }

    @ConsumeEvent(value = "sofkau.juego.jugadoranadido", blocking = true)
    void consumeJugadorAnadido(JugadorAnadido event) {
        System.out.println("materialize product");
        BasicDBObject document = new BasicDBObject();
        var key = "jugadores."+event.getCedula();
        document.put(key+".cedula", event.getCedula());
        document.put(key+".nombre", event.getNombre());

        BasicDBObject updateObject = new BasicDBObject();
        updateObject.put("$set", document);
        mongoClient.getDatabase("queries").getCollection("juego")
                .updateOne( Filters.eq("_id", event.getAggregateId()), updateObject);
    }

    @ConsumeEvent(value = "sofkau.juego.juegoiniciado")
    void consumeJuegoIniciado(JuegoIniciado event) {
        System.out.println("materialize product");
        BasicDBObject document = new BasicDBObject();
        document.put("jugando", event.getState());
        BasicDBObject updateObject = new BasicDBObject();
        updateObject.put("$set", document);
        mongoClient.getDatabase("queries").getCollection("juego")
                .updateOne( Filters.eq("_id", event.getAggregateId()), updateObject);
    }


    @ConsumeEvent(value = "sofkau.juego.juegofinalizado")
    void consumeJuegoFinalizado(JuegoFinalizado event) {
        System.out.println("materialize product");
        BasicDBObject document = new BasicDBObject();
        document.put("jugando", event.getState());
        BasicDBObject updateObject = new BasicDBObject();
        updateObject.put("$set", document);
        mongoClient.getDatabase("queries").getCollection("juego")
                .updateOne( Filters.eq("_id", event.getAggregateId()), updateObject);
    }

}