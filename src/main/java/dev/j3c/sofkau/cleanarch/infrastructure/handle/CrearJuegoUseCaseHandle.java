package dev.j3c.sofkau.cleanarch.infrastructure.handle;

import dev.j3c.sofkau.cleanarch.usecase.CrearJuegoUseCase;
import dev.j3c.sofkau.cleanarch.domain.juego.commands.CrearJuegoCommand;
import dev.j3c.sofkau.cleanarch.infrastructure.generic.UseCaseHandle;
import io.quarkus.vertx.ConsumeEvent;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class CrearJuegoUseCaseHandle extends UseCaseHandle {

    private final CrearJuegoUseCase crarJuegoUseCase;

    public CrearJuegoUseCaseHandle(CrearJuegoUseCase crarJuegoUseCase) {
        this.crarJuegoUseCase = crarJuegoUseCase;
    }

    @ConsumeEvent(value="sofkau.juego.crearjuego")
    void consume(CrearJuegoCommand command){
        var events = crarJuegoUseCase.apply(command);
        saveJuego(command.getJuegoId(), events);
    }
}
