package dev.j3c.sofkau.cleanarch.domain.carro.command;

import dev.j3c.sofkau.cleanarch.domain.generic.Command;

public class CrearCarroCommand extends Command {

    private String carroId;
    private String juegoId;

    public CrearCarroCommand(String carroId, String juegoId) {
        this.carroId = carroId;
        this.juegoId = juegoId;
    }

    public CrearCarroCommand() {
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
}
