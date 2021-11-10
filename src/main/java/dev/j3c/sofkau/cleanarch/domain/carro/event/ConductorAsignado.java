package dev.j3c.sofkau.cleanarch.domain.carro.event;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;

public class ConductorAsignado extends DomainEvent {

    private String nombre;
    private String cedula;

    public ConductorAsignado(String nombre, String cedula) {
        super("sofkau.carro.conductorasignado");
        this.nombre = nombre;
        this.cedula = cedula;
    }

    public String getNombre() {
        return nombre;
    }

    public String getCedula() {
        return cedula;
    }
}
