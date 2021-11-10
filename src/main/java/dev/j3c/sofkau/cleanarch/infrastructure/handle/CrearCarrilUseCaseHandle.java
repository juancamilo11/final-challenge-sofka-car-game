package dev.j3c.sofkau.cleanarch.infrastructure.handle;

import dev.j3c.sofkau.cleanarch.domain.carril.command.CrearCarrilCommand;
import dev.j3c.sofkau.cleanarch.domain.juego.commands.CrearJuegoCommand;
import dev.j3c.sofkau.cleanarch.infrastructure.generic.UseCaseHandle;
import dev.j3c.sofkau.cleanarch.usecase.CrearCarrilUseCase;
import io.quarkus.vertx.ConsumeEvent;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class CrearCarrilUseCaseHandle extends UseCaseHandle {

    private final CrearCarrilUseCase crearCarrilUseCase;

    public CrearCarrilUseCaseHandle(CrearCarrilUseCase crearCarrilUseCase) {
        this.crearCarrilUseCase = crearCarrilUseCase;
    }

    @ConsumeEvent(value="sofkau.carril.crearcarril")
    void consume(CrearCarrilCommand command){
        System.out.println("handle command" + command.getJuegoId());
        var events = crearCarrilUseCase.apply(command);
        System.out.println(events.size());
        saveCarril(command.getId(), events);
    }

}
