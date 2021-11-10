package dev.j3c.sofkau.cleanarch.domain.juego;

import java.util.Objects;

public class Podio {

    private Jugador primerLugar;
    private Jugador segundoLugar;
    private Jugador tercerLugar;

    private Podio(Jugador primerLugar, Jugador segundoLugar, Jugador tercerLugar){
        this.primerLugar = primerLugar;
        this.segundoLugar = segundoLugar;
        this.tercerLugar = tercerLugar;
    }

    public Podio(){
        primerLugar = null;
        segundoLugar = null;
        tercerLugar = null;
    }

    public Podio asignarPrimerLugar(Jugador jugador){
        return new Podio(jugador, segundoLugar, tercerLugar);
    }

    public Podio asignarSegundoLugar(Jugador jugador){
        return new Podio(primerLugar, jugador, tercerLugar);
    }

    public Podio asignarTercerLugar(Jugador jugador){
        return new Podio(primerLugar, segundoLugar, jugador);
    }

    public Jugador getPrimerLugar() {
        return primerLugar;
    }

    public Jugador getSegundoLugar() {
        return segundoLugar;
    }

    public Jugador getTercerLugar() {
        return tercerLugar;
    }

    public Boolean estaLleno(){
        return Objects.nonNull(primerLugar) && Objects.nonNull(segundoLugar) && Objects.nonNull(tercerLugar);
    }
}
