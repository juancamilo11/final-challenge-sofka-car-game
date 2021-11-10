package dev.j3c.sofkau.cleanarch.infrastructure.handle;

import dev.j3c.sofkau.cleanarch.domain.juego.commands.FinalizarJuegoCommand;
import dev.j3c.sofkau.cleanarch.domain.juego.commands.IniciarJuegoCommand;
import dev.j3c.sofkau.cleanarch.infrastructure.generic.UseCaseHandle;
import dev.j3c.sofkau.cleanarch.usecase.FinalizarJuegoUseCase;
import dev.j3c.sofkau.cleanarch.usecase.InicarJuegoUseCase;
import io.quarkus.vertx.ConsumeEvent;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class FinalizarJuegoUseCaseHandle extends UseCaseHandle {

    private final FinalizarJuegoUseCase finalizarJuegoUseCase;

    public FinalizarJuegoUseCaseHandle(FinalizarJuegoUseCase finalizarJuegoUseCase) {
        this.finalizarJuegoUseCase = finalizarJuegoUseCase;
    }

    @ConsumeEvent(value = "sofkau.juego.finalizarjuego")
    void consume(FinalizarJuegoCommand command){
        System.out.println(command.getJuegoId());
        var events = finalizarJuegoUseCase.apply(command);
        saveJuego(command.getJuegoId(), events);
    }
}
