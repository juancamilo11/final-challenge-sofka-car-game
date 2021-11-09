package dev.j3c.sofkau.cleanarch.domain.generic;

import java.util.List;


public interface EventStoreRepository {

    List<DomainEvent> getEventsBy(String aggregateName, String aggregateRootId);


    void saveEvent(String aggregateName, String aggregateRootId, StoredEvent storedEvent);

}