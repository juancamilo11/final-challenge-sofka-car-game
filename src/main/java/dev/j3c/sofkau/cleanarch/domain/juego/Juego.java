package dev.j3c.sofkau.cleanarch.domain.juego;

import dev.j3c.sofkau.cleanarch.domain.generic.AggregateRoot;
import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;
import dev.j3c.sofkau.cleanarch.domain.generic.EventChange;
import dev.j3c.sofkau.cleanarch.domain.juego.events.JuegoCreado;
import dev.j3c.sofkau.cleanarch.domain.juego.events.JugadorAnadido;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Juego extends AggregateRoot implements EventChange {

    private Map<String, Jugador> jugadores;
    private Integer kilometros;
    private Integer numeroDeCarriles;
    private Boolean jugando;
    private Podio podio;

    public Juego(String id, Integer kilometros, Integer numeroDeCarriles) {
        super(id);
        appendChange(new JuegoCreado(id,kilometros, numeroDeCarriles)).apply();
    }

    private Juego(String id) {
        super(id);
        subscribe(this);

        listener((JuegoCreado event) -> {
            this.kilometros = event.getKilometros();
            this.numeroDeCarriles = event.getNumeroDeCarriles();
            this.jugando = false;
            this.jugadores = new HashMap<>();
            this.podio = new Podio();
        });

        listener((JugadorAnadido event) -> {
            jugadores.put(event.getCedula(), new Jugador(event.getNombre(), event.getCedula()));
        });
    }

    public static Juego from(String juegoId, List<DomainEvent> events){
        var juego = new Juego(juegoId);
        events.forEach(juego::applyEvent);
        return juego;
    }

    public void anadirJugador(String cedula, String nombre){
        System.out.println("anadir jugador metodo");
        appendChange(new JugadorAnadido(cedula, nombre)).apply();
    }
}
