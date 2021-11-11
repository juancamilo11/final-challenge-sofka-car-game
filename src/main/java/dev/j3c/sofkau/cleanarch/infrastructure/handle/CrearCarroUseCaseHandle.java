package dev.j3c.sofkau.cleanarch.infrastructure.handle;

import dev.j3c.sofkau.cleanarch.domain.juego.events.JugadorAnadido;
import dev.j3c.sofkau.cleanarch.infrastructure.generic.UseCaseHandle;
import dev.j3c.sofkau.cleanarch.usecase.CrearCarroUseCase;
import io.quarkus.vertx.ConsumeEvent;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class CrearCarroUseCaseHandle extends UseCaseHandle {

    private final CrearCarroUseCase crearCarroUseCase;

    public CrearCarroUseCaseHandle(CrearCarroUseCase crearCarroUseCase) {
        this.crearCarroUseCase = crearCarroUseCase;
    }

    @ConsumeEvent(value="sofkau.juego.jugadoranadido")
    void consume(JugadorAnadido event){
        System.out.println("consume jugador anadido");
        var events = crearCarroUseCase.apply(event);
        System.out.println("Caso de uso crear carro exitoso");
        saveCarro(event.getCarroId(), events);
    }
}
