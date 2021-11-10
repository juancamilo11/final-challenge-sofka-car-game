package dev.j3c.sofkau.cleanarch.usecase;

import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;
import dev.j3c.sofkau.cleanarch.domain.juego.Juego;
import dev.j3c.sofkau.cleanarch.domain.juego.commands.CrearJuegoCommand;

import javax.enterprise.context.Dependent;
import java.util.List;
import java.util.function.Function;

@Dependent
public class CrearJuegoUseCase implements Function<CrearJuegoCommand, List<DomainEvent>> {
    @Override
    public List<DomainEvent> apply(CrearJuegoCommand command) {
        Juego juego = new Juego(command.getJuegoId(), command.getKilometros(),command.getNumeroDeCarriles());
        return juego.getUncommittedChanges();
    }
}
