package dev.j3c.sofkau.cleanarch.domain.carril;

import dev.j3c.sofkau.cleanarch.domain.carril.events.CarrilCreado;
import dev.j3c.sofkau.cleanarch.domain.carril.events.CarroAgregadoACarril;
import dev.j3c.sofkau.cleanarch.domain.carril.events.CarroDezplazado;
import dev.j3c.sofkau.cleanarch.domain.carril.events.MetaAlcanzada;
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

        listener((CarroAgregadoACarril event) -> {
            this.carroId = event.getCarroId();
            this.posicionActual = 0;
        });

        listener((CarroDezplazado event) -> {
            var actual = event.getPosicionActual();
            this.posicionActual = this.getPosicionActual() + actual;
        });

        listener((MetaAlcanzada event) -> {
            this.desplazamientoFinal = true;
            this.posicionActual = this.meta;
        });
    }

    public static Carril from(String entityId, List<DomainEvent> eventList) {
        var carril = new Carril(entityId);
        eventList.forEach(carril::applyEvent);
        return carril;
    }

    public void aggregarCarro(String carroId) {
        appendChange(new CarroAgregadoACarril(carroId)).apply();
    }

    public void alcazarLaMeta() {
        appendChange(new MetaAlcanzada(carroId, juegoId)).apply();
    }

    public void moverCarro(Integer aumento) {
        appendChange(new CarroDezplazado(aumento, meta)).apply();
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
