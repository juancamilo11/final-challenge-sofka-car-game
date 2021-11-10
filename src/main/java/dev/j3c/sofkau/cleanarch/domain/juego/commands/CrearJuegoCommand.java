package dev.j3c.sofkau.cleanarch.domain.juego.commands;

import dev.j3c.sofkau.cleanarch.domain.generic.Command;

import java.util.Map;

public class CrearJuegoCommand extends Command {

    private String juegoId;
    private Integer kilometros;
    private Integer numeroDeCarriles;

    public CrearJuegoCommand(String juegoId, Integer kilometros, Integer numeroDeCarriles) {
        this.juegoId = juegoId;
        this.kilometros = kilometros;
        this.numeroDeCarriles = numeroDeCarriles;
    }

    public CrearJuegoCommand() {
    }

    public Integer getNumeroDeCarriles() {
        return numeroDeCarriles;
    }

    public void setNumeroDeCarriles(Integer numeroDeCarriles) {
        this.numeroDeCarriles = numeroDeCarriles;
    }

    public String getJuegoId() {
        return juegoId;
    }

    public void setJuegoId(String juegoId) {
        this.juegoId = juegoId;
    }

    public Integer getKilometros() {
        return kilometros;
    }

    public void setKilometros(Integer kilometros) {
        this.kilometros = kilometros;
    }

}
