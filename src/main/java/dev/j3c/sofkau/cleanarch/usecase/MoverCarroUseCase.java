package dev.j3c.sofkau.cleanarch.usecase;

import dev.j3c.sofkau.cleanarch.domain.carro.Carro;
import dev.j3c.sofkau.cleanarch.domain.carro.command.MoverCarroCommand;
import dev.j3c.sofkau.cleanarch.domain.generic.DomainEvent;
import dev.j3c.sofkau.cleanarch.domain.generic.EventStoreRepository;

import javax.enterprise.context.Dependent;
import java.util.List;
import java.util.function.Function;

@Dependent
public class MoverCarroUseCase implements Function<MoverCarroCommand, List<DomainEvent>> {

    private final EventStoreRepository repository;

    public MoverCarroUseCase(EventStoreRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<DomainEvent> apply(MoverCarroCommand moverCarroCommand) {
        Carro carro = Carro.from(moverCarroCommand.getCarroId(), repository.getEventsBy("carro", moverCarroCommand.getCarroId()));
        carro.avanzarEnCarril(moverCarroCommand.getCarrilId());
        return carro.getUncommittedChanges();
    }
}
