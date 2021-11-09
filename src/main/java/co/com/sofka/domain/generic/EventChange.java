package co.com.sofka.domain.generic;

import java.util.HashSet;
import java.util.Set;
import java.util.function.Consumer;


public interface EventChange {

    /**
     * The Behaviors.
     */
     Set<Consumer<? super DomainEvent>> behaviors = new HashSet<>();

    /**
     * Apply.
     *
     * @param changeEvent the change event
     */
    default void listener(Consumer<? extends DomainEvent> changeEvent) {
        behaviors.add((Consumer<? super DomainEvent>) changeEvent);
    }
}