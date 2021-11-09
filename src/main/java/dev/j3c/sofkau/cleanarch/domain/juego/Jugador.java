package dev.j3c.sofkau.cleanarch.domain.juego;

public class Jugador{

    private final String nombre;
    private final String cedula;

    public Jugador(String nombre, String cedula) {
        this.nombre = nombre;
        this.cedula = cedula;
    }

    public String Nombre() {
        return nombre;
    }

}
