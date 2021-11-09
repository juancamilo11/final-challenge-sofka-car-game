package co.com.sofka.cargame.domain.carril.values;

import co.com.sofka.cargame.domain.generic.Identity;

public class CarrilId extends Identity {
    public CarrilId(String carrilId) {
        super(carrilId);
    }

    public CarrilId() {
    }

    public static CarrilId of(String carrilId) {
        return new CarrilId(carrilId);
    }
}
