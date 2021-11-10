package dev.j3c.sofkau.cleanarch.domain.juego.commands;

import dev.j3c.sofkau.cleanarch.domain.generic.Command;

import java.time.LocalDateTime;


public class IniciarJuegoCommand extends Command {

    private String juegoId;

    public IniciarJuegoCommand(String juegoId) {
        this.juegoId = juegoId;
    }

    public IniciarJuegoCommand() {
    }

    public String getJuegoId() {
        return juegoId;
    }

    public void setJuegoId(String juegoId) {
        this.juegoId = juegoId;
    }

}
