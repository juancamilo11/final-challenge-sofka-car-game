package dev.j3c.sofkau.cleanarch.infrastructure.generic;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;

import java.lang.reflect.Type;

public final class EventSerializer extends AbstractSerializer {

    private static EventSerializer eventSerializer;

    private EventSerializer() {
        super();
    }

    public static synchronized EventSerializer instance() {
        if (EventSerializer.eventSerializer == null) {
            EventSerializer.eventSerializer = new EventSerializer();
        }
        return EventSerializer.eventSerializer;
    }

    public <T extends DomainEvent> T deserialize(String aSerialization, final Class<?> aType) {
        return gson.fromJson(aSerialization, (Type) aType);
    }

    public String serialize(DomainEvent object) {
        return gson.toJson(object);
    }

}