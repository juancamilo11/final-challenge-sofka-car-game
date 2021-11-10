package dev.j3c.sofkau.cleanarch.usecase;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;
import dev.j3c.sofkau.cleanarch.domain.generic.EventStoreRepository;
import dev.j3c.sofkau.cleanarch.domain.juego.Juego;
import dev.j3c.sofkau.cleanarch.domain.juego.commands.AnadirJugadorCommand;

import javax.enterprise.context.Dependent;
import java.util.List;
import java.util.function.Function;

@Dependent
public class AnadirJugadorUseCase implements Function<AnadirJugadorCommand, List<DomainEvent>> {

    private final EventStoreRepository repository;

    public AnadirJugadorUseCase(EventStoreRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<DomainEvent> apply(AnadirJugadorCommand command) {
        Juego juego = Juego.from(command.getJuegoId(), repository.getEventsBy("juego", command.getJuegoId()));
        juego.anadirJugador(command.getCedula(), command.getNombre());
        return juego.getUncommittedChanges();
    }
}
