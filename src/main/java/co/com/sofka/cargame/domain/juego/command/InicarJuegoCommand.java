package co.com.sofka.cargame.domain.juego.command;

import co.com.sofka.cargame.domain.juego.values.JuegoId;

import co.com.sofka.domain.generic.Command;

public class InicarJuegoCommand extends Command {
    private JuegoId juegoId;

    public InicarJuegoCommand() {
    }

    public InicarJuegoCommand(JuegoId juegoId) {
        this.juegoId = juegoId;
    }

    public JuegoId getJuegoId() {
        return juegoId;
    }

    public void setJuegoId(JuegoId juegoId) {
        this.juegoId = juegoId;
    }

    @Override
    public String toString() {
        return "InicarJuegoCommand{" +
                "juegoId=" + juegoId +
                '}';
    }
}
