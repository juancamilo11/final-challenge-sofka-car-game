package co.com.sofka.cargame.domain.juego.values;

import co.com.sofka.cargame.domain.generic.ValueObject;

import java.util.Objects;

public class Nombre implements ValueObject<String> {
    private final String value;

    public Nombre(String value) {
        this.value = Objects.requireNonNull(value, "El nombre es requiredo");
    }

    @Override
    public String value() {
        return value;
    }
}
