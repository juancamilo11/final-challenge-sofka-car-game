package dev.j3c.sofkau.cleanarch.domain.carro.event;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;

public class KilometrajeCambiado extends DomainEvent {

    private Integer avance;
    private String carrilId;
    private String juegoId;

    public KilometrajeCambiado(Integer avance, String carrilId, String juegoId) {
        super("sofkau.carro.kilometrajecambiado");
        this.avance = avance;
        this.carrilId = carrilId;
        this.juegoId = juegoId;
    }

    public Integer getAvance() {
        return avance;
    }

    public String getCarrilId() {
        return carrilId;
    }

    public String getJuegoId() {
        return juegoId;
    }
}
