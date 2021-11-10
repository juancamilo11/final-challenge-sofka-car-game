package dev.j3c.sofkau.cleanarch.domain.juego.events;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;

public class PrimerLugarAsignado extends DomainEvent {

    private String jugadorId;
    public PrimerLugarAsignado(String jugadorId) {
        super("sofkau.juego.primerlugarasignado");
        this.jugadorId = jugadorId;
    }

    public String getJugadorId() {
        return jugadorId;
    }
}
