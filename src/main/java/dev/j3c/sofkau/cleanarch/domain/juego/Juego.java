package dev.j3c.sofkau.cleanarch.domain.juego;

import dev.j3c.sofkau.cleanarch.domain.generic.AggregateRoot;
import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;
import dev.j3c.sofkau.cleanarch.domain.generic.EventChange;
import dev.j3c.sofkau.cleanarch.domain.juego.events.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Juego extends AggregateRoot implements EventChange {

    private Map<String, Jugador> jugadores;
    private Integer kilometros;
    private Integer numeroDeCarriles;
    private Integer posicionFinalActual;
    private Boolean jugando;
    private Podio podio;

    public Juego(String id, Integer kilometros, Integer numeroDeCarriles) {
        super(id);
        appendChange(new JuegoCreado(id,kilometros, numeroDeCarriles)).apply();
        System.out.println(this.getKilometros());
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

        listener((PrimerLugarAsignado event) -> {
            if (this.jugando) {
                Jugador jugadorGanador = this.jugadores.get(event.getJugadorId());
                this.podio = this.podio.asignarPrimerLugar(jugadorGanador);
            } else {
                throw new IllegalArgumentException("No puede asignar al podio no esta en marcha el juego");
            }
        });

        /*listener((SegundoLugarAsignado event) -> {
            if (this.jugando) {
                Jugador jugadorGanador = this.jugadores.get(event.getJugadorId());
                this.podio = this.podio.asignarSegundoLugar(jugadorGanador);
            } else {
                throw new IllegalArgumentException("No puede asignar al podio no esta en marcha el juego");
            }
        });*/

        /*listener((TercerLugarAsignado event) -> {
            if (this.jugando) {
                Jugador jugadorGanador = this.jugadores.get(event.getJugadorId());
                this.podio = this.podio.asignarTercerLugar(jugadorGanador);
            } else {
                throw new IllegalArgumentException("No puede asignar al podio no esta en marcha el juego");
            }
        });*/

        listener((JuegoIniciado event) -> {
            this.jugando = true;
        });

        listener((JuegoFinalizado event) -> {
            this.jugando = false;
        });
    }

    public static Juego from(String juegoId, List<DomainEvent> events){
        var juego = new Juego(juegoId);
        events.forEach(juego::applyEvent);
        System.out.println("evento juego " + juego.kilometros);
        return juego;
    }

    public void anadirJugador(String cedula, String nombre){
        System.out.println("anadir jugador metodo");
        appendChange(new JugadorAnadido(cedula, nombre)).apply();
        System.out.println(this.getKilometros() + " " + this.jugando );
    }

    public void setPosicionFinalActual(Integer posicionFinalActual) {
        this.posicionFinalActual = posicionFinalActual;
    }

    public void iniciarJuego() {
        System.out.println("iniciar juego metodo");
        appendChange(new JuegoIniciado()).apply();
    }

    public void finalizarJuego(){
        System.out.println("finalizar juego metodo");
        appendChange(new JuegoFinalizado()).apply();
    }

    public void asignarPodio(String jugadorId,Integer posicion){
        if (posicion == 1)
            appendChange(new PrimerLugarAsignado(jugadorId)).apply();
        /*if (posicion == 2)
            appendChange(new SegundoLugarAsignado(jugadorId)).apply();
        if (posicion == 3)
            appendChange(new TercerLugarAsignado(jugadorId)).apply();*/
    }

    public Integer getPosicionFinalActual() {
        return posicionFinalActual;
    }

    public Integer getKilometros() {
        return kilometros;
    }

    public Map<String, Jugador> getJugadores() {
        return jugadores;
    }
}
