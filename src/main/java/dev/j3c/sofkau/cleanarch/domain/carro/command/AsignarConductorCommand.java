package dev.j3c.sofkau.cleanarch.domain.carro.command;

import dev.j3c.sofkau.cleanarch.domain.generic.Command;

public class AsignarConductorCommand extends Command {

    private String nombre;
    private String cedula;
    private String carroId;

    public AsignarConductorCommand(String nombre, String cedula, String carroId) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.carroId = carroId;
    }

    public AsignarConductorCommand() {
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getCarroId() {
        return carroId;
    }

    public void setCarroId(String carroId) {
        this.carroId = carroId;
    }
}
