package co.com.sofka.cargame.domain.carril.events;

import co.com.sofka.cargame.domain.carro.values.CarroId;
import co.com.sofka.cargame.domain.juego.values.JuegoId;
import co.com.sofka.cargame.domain.generic.DomainEvent;
import co.com.sofka.cargame.domain.generic.Incremental;

public class CarroFinalizoSuRecorrido extends DomainEvent implements Incremental {
    private final CarroId carroId;
    private final JuegoId juegoId;


    public CarroFinalizoSuRecorrido(CarroId carroId, JuegoId juegoId) {
        super("carril.CarroFinalizoSuRecorrido");
        this.carroId = carroId;
        this.juegoId = juegoId;
    }

    public JuegoId getJuegoId() {
        return juegoId;
    }

    public CarroId getCarroId() {
        return carroId;
    }
}
