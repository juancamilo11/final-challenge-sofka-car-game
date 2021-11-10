package dev.j3c.sofkau.cleanarch.domain.carril.command;

import dev.j3c.sofkau.cleanarch.domain.generic.Command;

public class CrearCarrilCommand extends Command {

    private String id;
    private String juegoId;

    public CrearCarrilCommand() {
    }

    public CrearCarrilCommand(String id, String juegoId) {
        this.id = id;
        this.juegoId = juegoId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getJuegoId() {
        return juegoId;
    }

    public void setJuegoId(String juegoId) {
        this.juegoId = juegoId;
    }

}
