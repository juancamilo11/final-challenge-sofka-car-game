package dev.j3c.sofkau.cleanarch.domain.carril.events;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;

public class CarrilCreado extends DomainEvent {

    private Integer meta;
    private String juegoId;

    public CarrilCreado(Integer meta, String juegoId) {
        super("sofkau.carril.carrilcreado");
        this.meta = meta;
        this.juegoId= juegoId;
    }

    public Integer getMeta() {
        return meta;
    }

    public String getJuegoId() {
        return juegoId;
    }
}
