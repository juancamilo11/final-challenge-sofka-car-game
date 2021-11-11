package dev.j3c.sofkau.cleanarch.domain.carril.events;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;

public class CarroDezplazado extends DomainEvent {

    private final Integer posicionActual;
    private final Integer meta;

    public CarroDezplazado(Integer posicionActual, Integer meta) {
        super("sofkau.carril.carrodezplazado");
        this.posicionActual = posicionActual;
        this.meta = meta;
    }

    public Integer getPosicionActual() {
        return posicionActual;
    }

    public Integer getMeta() {
        return meta;
    }
}
