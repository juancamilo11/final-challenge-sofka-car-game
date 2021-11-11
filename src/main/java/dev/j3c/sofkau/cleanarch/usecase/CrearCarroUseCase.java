package dev.j3c.sofkau.cleanarch.usecase;

import dev.j3c.sofkau.cleanarch.domain.carro.Carro;
import dev.j3c.sofkau.cleanarch.domain.carro.command.CrearCarroCommand;
import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;
import dev.j3c.sofkau.cleanarch.domain.juego.events.JugadorAnadido;

import javax.enterprise.context.Dependent;
import java.util.List;
import java.util.function.Function;

@Dependent
public class CrearCarroUseCase implements Function<JugadorAnadido, List<DomainEvent>> {

    @Override
    public List<DomainEvent> apply(JugadorAnadido jugadorAnadido) {
        Carro carro = new Carro(jugadorAnadido.getCarroId(), jugadorAnadido.getAggregateId());
        System.out.println("Carro creado exitosamente");
        carro.asignarConductor(jugadorAnadido.getNombre(),jugadorAnadido.getCedula());
        System.out.println("asignado conductor");
        return carro.getUncommittedChanges();
    }
}
