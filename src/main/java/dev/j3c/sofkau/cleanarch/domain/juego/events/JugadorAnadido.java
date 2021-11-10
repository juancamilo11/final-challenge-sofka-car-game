package dev.j3c.sofkau.cleanarch.domain.juego.events;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;

public class JugadorAnadido extends DomainEvent {

    private String cedula;
    private String nombre;

    public JugadorAnadido(String cedula, String nombre) {
        super("sofkau.juego.jugadoranadido");
        this.cedula = cedula;
        this.nombre = nombre;
    }


    public String getCedula() {
        return cedula;
    }

    public String getNombre() {
        return nombre;
    }
}
