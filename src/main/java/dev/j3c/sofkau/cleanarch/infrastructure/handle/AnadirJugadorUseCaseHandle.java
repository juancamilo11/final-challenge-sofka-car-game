package dev.j3c.sofkau.cleanarch.infrastructure.handle;

import dev.j3c.sofkau.cleanarch.domain.juego.commands.AnadirJugadorCommand;
import dev.j3c.sofkau.cleanarch.infrastructure.generic.UseCaseHandle;
import dev.j3c.sofkau.cleanarch.usecase.AnadirJugadorUseCase;
import io.quarkus.vertx.ConsumeEvent;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class AnadirJugadorUseCaseHandle extends UseCaseHandle {

    private final AnadirJugadorUseCase anadirJugadorUseCase;

    public AnadirJugadorUseCaseHandle(AnadirJugadorUseCase anadirJugadorUseCase) {
        this.anadirJugadorUseCase = anadirJugadorUseCase;
    }

    @ConsumeEvent(value="sofkau.juego.anadirjugador")
    void consume(AnadirJugadorCommand command){
        var events = anadirJugadorUseCase.apply(command);
        saveJuego(command.getJuegoId(), events);
    }
}
