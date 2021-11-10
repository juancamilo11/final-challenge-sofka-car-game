package dev.j3c.sofkau.cleanarch.domain.juego.events;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;

import java.time.LocalDateTime;


public class JuegoIniciado extends DomainEvent {

    private LocalDateTime fecha;
    private Boolean state;

    public JuegoIniciado() {
        super("sofkau.juego.juegoiniciado");
        this.fecha = LocalDateTime.now();
        this.state = true;
    }

    public LocalDateTime getFecha() {
        return fecha;
    }

    public Boolean getState() {
        return state;
    }
}
