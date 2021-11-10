package dev.j3c.sofkau.cleanarch.infrastructure.handle;

import dev.j3c.sofkau.cleanarch.domain.juego.commands.IniciarJuegoCommand;
import dev.j3c.sofkau.cleanarch.infrastructure.generic.UseCaseHandle;
import dev.j3c.sofkau.cleanarch.usecase.InicarJuegoUseCase;
import io.quarkus.vertx.ConsumeEvent;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class IniciarJuegoUseCaseHandle extends UseCaseHandle {

    private final InicarJuegoUseCase inicarJuegoUseCase;

    public IniciarJuegoUseCaseHandle(InicarJuegoUseCase inicarJuegoUseCase) {
        this.inicarJuegoUseCase = inicarJuegoUseCase;
    }

    @ConsumeEvent(value = "sofkau.juego.iniciarjuego")
    void consume(IniciarJuegoCommand command){
        System.out.println(command.getJuegoId());
        var events = inicarJuegoUseCase.apply(command);
        saveJuego(command.getJuegoId(), events);
    }
}
