package dev.j3c.sofkau.cleanarch.infrastructure.generic;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;
import dev.j3c.sofkau.cleanarch.domain.generic.StoredEvent;
import dev.j3c.sofkau.cleanarch.domain.generic.EventStoreRepository;
import dev.j3c.sofkau.cleanarch.infrastructure.MessageService;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.Date;
import java.util.List;

@ApplicationScoped
public abstract class UseCaseHandle {

    @Inject
    private EventStoreRepository repository;

    @Inject
    private MessageService messageService;

    public void saveJuego(String juegoID, List<DomainEvent> events) {
        System.out.println("saveJuego");
        events.stream().map(event -> {
            String eventBody = EventSerializer.instance().serialize(event);
            return new StoredEvent(event.getClass().getTypeName(), new Date(), eventBody);
        }).forEach(storedEvent -> repository.saveEvent("juego", juegoID, storedEvent));
        events.forEach(messageService::send);
    }

    public void saveCarril(String id, List<DomainEvent> events) {
        System.out.println("saveCarril");
        events.stream().map(event -> {
            String eventBody = EventSerializer.instance().serialize(event);
            return new StoredEvent(event.getClass().getTypeName(), new Date(), eventBody);
        }).forEach(storedEvent -> repository.saveEvent("carril", id, storedEvent));
        events.forEach(messageService::send);
    }

    public void saveCarro(String id, List<DomainEvent> events) {
        System.out.println("saveCarro");
        events.stream().map(event -> {
            String eventBody = EventSerializer.instance().serialize(event);
            return new StoredEvent(event.getClass().getTypeName(), new Date(), eventBody);
        }).forEach(storedEvent -> repository.saveEvent("carro", id, storedEvent));
        events.forEach(messageService::send);
    }

}
