package dev.j3c.sofkau.cleanarch.domain.carro.command;

import dev.j3c.sofkau.cleanarch.domain.generic.Command;

public class MoverCarroCommand extends Command {

    private String carroId;
    private String carrilId;

    public MoverCarroCommand(String carroId, String carrilId) {
        this.carroId = carroId;
        this.carrilId = carrilId;
    }

    public MoverCarroCommand() {
    }

    public String getCarroId() {
        return carroId;
    }

    public String getCarrilId() {
        return carrilId;
    }
}
