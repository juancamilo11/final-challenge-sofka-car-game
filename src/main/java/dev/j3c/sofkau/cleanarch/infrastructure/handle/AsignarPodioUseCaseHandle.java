package dev.j3c.sofkau.cleanarch.infrastructure.handle;

import dev.j3c.sofkau.cleanarch.domain.carril.events.MetaAlcanzada;
import dev.j3c.sofkau.cleanarch.infrastructure.generic.UseCaseHandle;
import dev.j3c.sofkau.cleanarch.usecase.AsignarPodioUseCase;
import io.quarkus.vertx.ConsumeEvent;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class AsignarPodioUseCaseHandle extends UseCaseHandle {

    private final AsignarPodioUseCase asignarPodioUseCase;

    public AsignarPodioUseCaseHandle(AsignarPodioUseCase asignarPodioUseCase) {
        this.asignarPodioUseCase = asignarPodioUseCase;
    }

    @ConsumeEvent(value="sofkau.carril.metaalcanzada")
    void consume(MetaAlcanzada event){
        var events = asignarPodioUseCase.apply(event);
        saveJuego(event.getJuegoId(), events);
    }
}
