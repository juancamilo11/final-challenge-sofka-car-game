package dev.j3c.sofkau.cleanarch.domain.carril.command;

import dev.j3c.sofkau.cleanarch.domain.generic.Command;

public class DezplazarCarro extends Command {

    private Integer posicionActual;
    private Integer meta;

    public DezplazarCarro() {
    }

    public DezplazarCarro(Integer posicionActual, Integer meta) {
        this.posicionActual = posicionActual;
        this.meta = meta;
    }

    public Integer getPosicionActual() {
        return posicionActual;
    }

    public Integer getMeta() {
        return meta;
    }

    public void setPosicionActual(Integer posicionActual) {
        this.posicionActual = posicionActual;
    }

    public void setMeta(Integer meta) {
        this.meta = meta;
    }
}
