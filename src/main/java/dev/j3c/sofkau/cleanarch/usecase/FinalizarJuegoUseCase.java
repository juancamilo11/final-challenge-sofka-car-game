package dev.j3c.sofkau.cleanarch.usecase;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;
import dev.j3c.sofkau.cleanarch.domain.generic.EventStoreRepository;
import dev.j3c.sofkau.cleanarch.domain.juego.Juego;
import dev.j3c.sofkau.cleanarch.domain.juego.commands.FinalizarJuegoCommand;


import javax.enterprise.context.Dependent;
import java.util.List;
import java.util.function.Function;

@Dependent
public class FinalizarJuegoUseCase implements Function<FinalizarJuegoCommand, List<DomainEvent>> {

    private final EventStoreRepository repository;

    public FinalizarJuegoUseCase(EventStoreRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<DomainEvent> apply(FinalizarJuegoCommand finalizarJuegoCommand) {
        System.out.println("apply");
        Juego juego = Juego.from(finalizarJuegoCommand.getJuegoId(), repository.getEventsBy("juego", finalizarJuegoCommand.getJuegoId()));
        juego.finalizarJuego();
        return juego.getUncommittedChanges();
    }
}
