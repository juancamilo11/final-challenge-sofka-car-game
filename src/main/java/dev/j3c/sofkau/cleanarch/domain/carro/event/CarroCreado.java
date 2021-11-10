package dev.j3c.sofkau.cleanarch.domain.carro.event;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;

public class CarroCreado extends DomainEvent {

    private String carroId;
    private String juegoId;

    public CarroCreado(String carroId, String juegoId) {
        super("sofkau.carro.carrocreado");
        this.carroId = carroId;
        this.juegoId = juegoId;
    }

    public String getCarroId() {
        return carroId;
    }

    public String getJuegoId() {
        return juegoId;
    }
}
