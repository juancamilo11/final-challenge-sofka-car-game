package dev.j3c.sofkau.cleanarch.domain.carril.command;

import dev.j3c.sofkau.cleanarch.domain.generic.Command;

public class AgregarCarroACarril extends Command {

    private String carroId;

    public AgregarCarroACarril(String carroId) {
        this.carroId = carroId;
    }

    public String getCarroId() {
        return carroId;
    }

    public void setCarroId(String carroId) {
        this.carroId = carroId;
    }
}
