package co.com.sofka.cargame.domain.juego.events;

import co.com.sofka.cargame.domain.generic.DomainEvent;
import co.com.sofka.cargame.domain.generic.Incremental;

public class JuegoIniciado extends DomainEvent implements Incremental {
    public JuegoIniciado() {
        super("juego.JuegoIniciado");
    }
}
