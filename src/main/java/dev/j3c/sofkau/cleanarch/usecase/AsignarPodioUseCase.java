package dev.j3c.sofkau.cleanarch.usecase;

import dev.j3c.sofkau.cleanarch.domain.carril.events.MetaAlcanzada;
import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;
import dev.j3c.sofkau.cleanarch.domain.generic.EventStoreRepository;
import dev.j3c.sofkau.cleanarch.domain.juego.Juego;

import javax.enterprise.context.Dependent;
import java.util.List;
import java.util.function.Function;

@Dependent
public class AsignarPodioUseCase implements Function<MetaAlcanzada, List<DomainEvent>> {

    private final EventStoreRepository repository;

    public AsignarPodioUseCase(EventStoreRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<DomainEvent> apply(MetaAlcanzada event) {
        Juego juego = Juego.from(event.getJuegoId(), repository.getEventsBy("juego", event.getJuegoId()));
        juego.setPosicionFinalActual(juego.getPosicionFinalActual() + 1);
        juego.asignarPodio(event.getJugadorId(), juego.getPosicionFinalActual());
        return juego.getUncommittedChanges();
    }
}
