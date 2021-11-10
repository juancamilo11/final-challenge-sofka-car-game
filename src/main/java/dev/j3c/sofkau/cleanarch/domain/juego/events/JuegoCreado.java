package dev.j3c.sofkau.cleanarch.domain.juego.events;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;

public class JuegoCreado extends DomainEvent {

    private String juegoId;
    private Integer kilometros;
    private Integer numeroDeCarriles;
    private Integer posicionFinalActual;
    private Boolean state;

    public JuegoCreado(String id, Integer kilometros, Integer numeroDeCarriles) {
        super("sofkau.juego.juegocreado");
        this.juegoId = id;
        this.kilometros = kilometros;
        this.numeroDeCarriles = numeroDeCarriles;
        this.posicionFinalActual = 0;
        this.state = false;
    }

    public Integer getPosicionFinalActual() {
        return posicionFinalActual;
    }

    public String getJuegoId() {
        return juegoId;
    }

    public Boolean getState() {
        return state;
    }

    public Integer getKilometros() {
        return kilometros;
    }

    public Integer getNumeroDeCarriles() {
        return numeroDeCarriles;
    }
}
