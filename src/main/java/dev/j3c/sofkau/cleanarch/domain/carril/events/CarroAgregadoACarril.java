package dev.j3c.sofkau.cleanarch.domain.carril.events;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;

public class CarroAgregadoACarril extends DomainEvent {

    private final String carroId;

    public CarroAgregadoACarril(String carroId) {
        super("sofkau.carril.carroagregadoacarril");
        this.carroId = carroId;
    }

    public String getCarroId() {
        return carroId;
    }
}
