package dev.j3c.sofkau.cleanarch.domain.juego.commands;

import dev.j3c.sofkau.cleanarch.domain.generic.Command;

public class AnadirJugadorCommand extends Command {

    private String juegoId;
    private String cedula;
    private String nombre;
    private String carroId;

    public AnadirJugadorCommand(String juegoId, String cedula, String nombre, String carroId) {
        this.juegoId = juegoId;
        this.cedula = cedula;
        this.nombre = nombre;
        this.carroId = carroId;
    }

    public AnadirJugadorCommand() {
    }

    public String getCarroId() {
        return carroId;
    }

    public void setCarroId(String carroId) {
        this.carroId = carroId;
    }

    public String getJuegoId() {
        return juegoId;
    }

    public void setJuegoId(String juegoId) {
        this.juegoId = juegoId;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
