package dev.j3c.sofkau.cleanarch.domain.carril;

import dev.j3c.sofkau.cleanarch.domain.carril.events.CarrilCreado;
import dev.j3c.sofkau.cleanarch.domain.generic.AggregateRoot;
import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;
import dev.j3c.sofkau.cleanarch.domain.generic.EventChange;

import java.util.List;

public class Carril extends AggregateRoot implements EventChange {

    private String carroId;
    private String juegoId;
    private Integer posicionActual;
    private Integer meta;
    private Boolean desplazamientoFinal;

    public Carril(String id, String juegoId, Integer meta) {
        super(id);
        appendChange(new CarrilCreado(meta, juegoId)).apply();
    }

    private Carril(String entityId) {
        super(entityId);
        subscribe(this);

        listener((CarrilCreado event) -> {
            this.meta = event.getMeta();
            this.juegoId = event.getJuegoId();
            this.desplazamientoFinal = false;
            this.posicionActual = 0;
        });
    }

    public static Carril from(String entityId, List<DomainEvent> eventList) {
        var carril = new Carril(entityId);
        eventList.forEach(carril::applyEvent);
        return carril;
    }



    public String getCarroId() {
        return carroId;
    }

    public String getJuegoId() {
        return juegoId;
    }

    public Integer getPosicionActual() {
        return posicionActual;
    }

    public Integer getMeta() {
        return meta;
    }

    public Boolean getDesplazamientoFinal() {
        return desplazamientoFinal;
    }
}
