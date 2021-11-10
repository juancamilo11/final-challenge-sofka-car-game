package dev.j3c.sofkau.cleanarch.domain.juego.events;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;

import java.time.LocalDateTime;


public class JuegoFinalizado extends DomainEvent {

    private LocalDateTime fecha;
    private Boolean state;

    public JuegoFinalizado() {
        super("sofkau.juego.juegofinalizado");
        this.fecha = LocalDateTime.now();
        this.state = false;
    }

    public LocalDateTime getFecha() {
        return fecha;
    }

    public Boolean getState() {
        return state;
    }
}
