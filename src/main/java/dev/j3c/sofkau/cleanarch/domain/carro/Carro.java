package dev.j3c.sofkau.cleanarch.domain.carro;

import dev.j3c.sofkau.cleanarch.domain.carro.event.CarroCreado;
import dev.j3c.sofkau.cleanarch.domain.carro.event.ConductorAsignado;
import dev.j3c.sofkau.cleanarch.domain.carro.event.KilometrajeCambiado;
import dev.j3c.sofkau.cleanarch.domain.generic.AggregateRoot;
import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;
import dev.j3c.sofkau.cleanarch.domain.generic.EventChange;
import dev.j3c.sofkau.cleanarch.domain.juego.Jugador;

import java.util.List;
import java.util.Objects;
import java.util.Random;

public class Carro extends AggregateRoot implements EventChange {

    private Jugador jugador;
    private Integer distancia;
    private String juegoId;

    public Carro(String id, String juegoId) {
        super(id);
        appendChange(new CarroCreado(id, juegoId)).apply();
    }

    private Carro(String carroId){
        super(carroId);
        subscribe(this);

        listener((CarroCreado event) -> {
            this.distancia = 0;
            this.juegoId = event.getJuegoId();
        });

        listener((ConductorAsignado event) -> {
            this.jugador = new Jugador(event.getNombre(),event.getCedula());
        });

        listener((KilometrajeCambiado event) -> {
            var avance = Objects.requireNonNull(event.getAvance(), "La distancia no puede ser null");
            if (avance <= 0) {
                throw new IllegalArgumentException("No puede ser negativo o cero el valor de la distancia");
            }
            this.distancia = this.getDistancia() + avance;
        });
    }

    public static Carro from(String carroId, List<DomainEvent> events){
        var carro = new Carro(carroId);
        events.forEach(carro::applyEvent);
        return carro;
    }

    public void asignarConductor(String nombre, String cedula){
        appendChange(new ConductorAsignado(nombre, cedula)).apply();
    }

    public void avanzarEnCarril(String carrilId){
        var dado = this.lanzarDado() * 100;
        appendChange(new KilometrajeCambiado(dado, carrilId, juegoId)).apply();
    }

    public Integer lanzarDado(){
        var rn = new Random();
        return 1 + rn.nextInt(6);
    }

    public Jugador getJugador() {
        return jugador;
    }

    public Integer getDistancia() {
        return distancia;
    }

    public String getJuegoId() {
        return juegoId;
    }
}
