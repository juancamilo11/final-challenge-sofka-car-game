package dev.j3c.sofkau.cleanarch.domain.juego.events;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;

public class JugadorAnadido extends DomainEvent {

    private String carroId;
    private String cedula;
    private String nombre;

    public JugadorAnadido(String cedula, String nombre, String carroId) {
        super("sofkau.juego.jugadoranadido");
        this.cedula = cedula;
        this.nombre = nombre;
        this.carroId = carroId;
    }

    public String getCarroId() {
        return carroId;
    }

    public String getCedula() {
        return cedula;
    }

    public String getNombre() {
        return nombre;
    }
}
