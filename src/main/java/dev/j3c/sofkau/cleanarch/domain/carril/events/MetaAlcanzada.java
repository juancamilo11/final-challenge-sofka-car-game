package dev.j3c.sofkau.cleanarch.domain.carril.events;

import co.com.sofka.domain.generic.Incremental;
import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;

public class MetaAlcanzada extends DomainEvent implements Incremental {

    private String jugadorId;
    private String juegoId;

    public MetaAlcanzada(String jugadorId, String juegoId) {
        super("sofkau.carril.MetaAlcanzada");
        this.jugadorId = jugadorId;
        this.juegoId = juegoId;
    }

    public String getJugadorId() {
        return jugadorId;
    }

    public String getJuegoId() {
        return juegoId;
    }
}
