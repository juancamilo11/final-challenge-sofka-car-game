package dev.j3c.sofkau.cleanarch.domain.juego.commands;

import dev.j3c.sofkau.cleanarch.domain.generic.Command;


public class FinalizarJuegoCommand extends Command {

    private String juegoId;

    public FinalizarJuegoCommand(String juegoId) {
        this.juegoId = juegoId;
    }

    public FinalizarJuegoCommand() {
    }

    public String getJuegoId() {
        return juegoId;
    }

    public void setJuegoId(String juegoId) {
        this.juegoId = juegoId;
    }

}
