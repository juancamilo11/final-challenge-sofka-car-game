package dev.j3c.sofkau.cleanarch.infrastructure.handle;

import dev.j3c.sofkau.cleanarch.domain.carril.command.CrearCarrilCommand;
import dev.j3c.sofkau.cleanarch.domain.carro.event.CarroCreado;
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

    @ConsumeEvent(value="sofkau.carro.carrocreado")
    void consume(CarroCreado event){
        System.out.println("handle event" + event.getJuegoId());
        var events = crearCarrilUseCase.apply(event);
        System.out.println(events.size());
        saveCarril(event.getId(), events);
    }

}
