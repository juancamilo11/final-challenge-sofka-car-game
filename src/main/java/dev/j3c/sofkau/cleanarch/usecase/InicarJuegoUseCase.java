package dev.j3c.sofkau.cleanarch.usecase;


import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;
import dev.j3c.sofkau.cleanarch.domain.generic.EventStoreRepository;
import dev.j3c.sofkau.cleanarch.domain.juego.Juego;
import dev.j3c.sofkau.cleanarch.domain.juego.commands.IniciarJuegoCommand;

import javax.enterprise.context.Dependent;
import java.util.List;
import java.util.function.Function;

@Dependent
public class InicarJuegoUseCase  implements Function<IniciarJuegoCommand, List<DomainEvent>> {

    private final EventStoreRepository repository;

    public InicarJuegoUseCase(EventStoreRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<DomainEvent> apply(IniciarJuegoCommand iniciarJuegoCommand) {
        System.out.println("apply");
        Juego juego = Juego.from(iniciarJuegoCommand.getJuegoId(), repository.getEventsBy("juego", iniciarJuegoCommand.getJuegoId()));
        juego.iniciarJuego();
        return juego.getUncommittedChanges();
    }
}
