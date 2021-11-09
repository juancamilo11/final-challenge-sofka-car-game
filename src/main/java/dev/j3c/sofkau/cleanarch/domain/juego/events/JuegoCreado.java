package dev.j3c.sofkau.cleanarch.domain.juego.events;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;

public class JuegoCreado extends DomainEvent {

    private String juegoId;
    private Integer kilometros;
    private Integer numeroDeCarriles;

    public JuegoCreado(String id, Integer kilometros, Integer numeroDeCarriles) {
        super("sofkau.juego.juegocreado");
        this.juegoId = id;
        this.kilometros = kilometros;
        this.numeroDeCarriles = numeroDeCarriles;
    }

    public String getJuegoId() {
        return juegoId;
    }

    public Integer getKilometros() {
        return kilometros;
    }

    public Integer getNumeroDeCarriles() {
        return numeroDeCarriles;
    }
}
