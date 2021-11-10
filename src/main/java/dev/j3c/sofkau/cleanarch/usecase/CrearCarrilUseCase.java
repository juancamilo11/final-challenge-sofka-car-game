package dev.j3c.sofkau.cleanarch.usecase;

import dev.j3c.sofkau.cleanarch.domain.carril.Carril;
import dev.j3c.sofkau.cleanarch.domain.carril.command.CrearCarrilCommand;
import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;
import dev.j3c.sofkau.cleanarch.domain.generic.EventStoreRepository;
import dev.j3c.sofkau.cleanarch.domain.juego.Juego;
import dev.j3c.sofkau.cleanarch.domain.juego.events.JuegoCreado;
import dev.j3c.sofkau.cleanarch.usecase.services.JuegoService;

import javax.enterprise.context.Dependent;
import java.util.List;
import java.util.function.Function;

@Dependent
public class CrearCarrilUseCase implements Function<CrearCarrilCommand, List<DomainEvent>> {

    private final EventStoreRepository repository;

    public CrearCarrilUseCase(EventStoreRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<DomainEvent> apply(CrearCarrilCommand crearCarrilCommand) {
        var events = repository.getEventsBy("juego", crearCarrilCommand.getJuegoId());
        var event = (JuegoCreado) events.get(0);
        System.out.println("Kilometros: " + event.getKilometros());

        Carril carril = new Carril(crearCarrilCommand.getId(), crearCarrilCommand.getJuegoId(), event.getKilometros()*1000);
        return carril.getUncommittedChanges();
    }
}
