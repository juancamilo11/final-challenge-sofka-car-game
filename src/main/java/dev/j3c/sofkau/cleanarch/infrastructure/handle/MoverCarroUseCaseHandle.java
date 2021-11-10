package dev.j3c.sofkau.cleanarch.infrastructure.handle;

import dev.j3c.sofkau.cleanarch.domain.carro.command.MoverCarroCommand;
import dev.j3c.sofkau.cleanarch.infrastructure.generic.UseCaseHandle;
import dev.j3c.sofkau.cleanarch.usecase.MoverCarroUseCase;
import io.quarkus.vertx.ConsumeEvent;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class MoverCarroUseCaseHandle extends UseCaseHandle {

    private final MoverCarroUseCase moverCarroUseCase;

    public MoverCarroUseCaseHandle(MoverCarroUseCase moverCarroUseCase) {
        this.moverCarroUseCase = moverCarroUseCase;
    }

    @ConsumeEvent("sofkau.carro.movercarro")
    void consume(MoverCarroCommand command){
        var events = moverCarroUseCase.apply(command);
        saveCarro(command.getCarroId(), events);
    }

}
