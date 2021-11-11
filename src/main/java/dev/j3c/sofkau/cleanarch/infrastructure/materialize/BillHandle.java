package dev.j3c.sofkau.cleanarch.infrastructure.materialize;

import dev.j3c.sofkau.cleanarch.domain.carril.events.CarrilCreado;
import dev.j3c.sofkau.cleanarch.domain.carril.events.CarroAgregadoACarril;
import dev.j3c.sofkau.cleanarch.domain.carro.event.CarroCreado;
import dev.j3c.sofkau.cleanarch.domain.carro.event.ConductorAsignado;
import dev.j3c.sofkau.cleanarch.domain.juego.events.JuegoCreado;
import com.mongodb.BasicDBObject;
import com.mongodb.client.MongoClient;
import com.mongodb.client.model.Filters;
import dev.j3c.sofkau.cleanarch.domain.juego.events.JuegoFinalizado;
import dev.j3c.sofkau.cleanarch.domain.juego.events.JuegoIniciado;
import dev.j3c.sofkau.cleanarch.domain.juego.events.JugadorAnadido;
import io.quarkus.vertx.ConsumeEvent;
import org.bson.Document;

import javax.enterprise.context.ApplicationScoped;
import java.util.HashMap;
import java.util.Map;

@ApplicationScoped
public class BillHandle {
    private final MongoClient mongoClient;

    public BillHandle(MongoClient mongoClient) {
        this.mongoClient = mongoClient;
    }


    @ConsumeEvent(value = "sofkau.juego.juegocreado")
    void consumeJuegoCreado(JuegoCreado event) {
        System.out.println("materialize bill");
        Map<String, Object> document = new HashMap<>();
        document.put("_id", event.getAggregateId());
        document.put("kilometros", event.getKilometros());
        document.put("numeroDeCarriles", event.getNumeroDeCarriles());
        document.put("jugando", event.getState());
        document.put("posicionfinal", event.getPosicionFinalActual());
        mongoClient.getDatabase("queries").getCollection("juego")
                .insertOne(new Document(document));
    }

    @ConsumeEvent(value = "sofkau.juego.jugadoranadido")
    void consumeJugadorAnadido(JugadorAnadido event) {
        System.out.println("materialize product");
        BasicDBObject document = new BasicDBObject();
        var key = "jugadores."+event.getCedula();
        document.put(key+".cedula", event.getCedula());
        document.put(key+".nombre", event.getNombre());

        BasicDBObject updateObject = new BasicDBObject();
        updateObject.put("$set", document);
        mongoClient.getDatabase("queries").getCollection("juego")
                .updateOne( Filters.eq("_id", event.getAggregateId()), updateObject);
    }

    @ConsumeEvent(value = "sofkau.juego.juegoiniciado")
    void consumeJuegoIniciado(JuegoIniciado event) {
        System.out.println("materialize product");
        BasicDBObject document = new BasicDBObject();
        document.put("jugando", event.getState());
        BasicDBObject updateObject = new BasicDBObject();
        updateObject.put("$set", document);
        mongoClient.getDatabase("queries").getCollection("juego")
                .updateOne( Filters.eq("_id", event.getAggregateId()), updateObject);
    }


    @ConsumeEvent(value = "sofkau.juego.juegofinalizado")
    void consumeJuegoFinalizado(JuegoFinalizado event) {
        System.out.println("materialize product");
        BasicDBObject document = new BasicDBObject();
        document.put("jugando", event.getState());
        BasicDBObject updateObject = new BasicDBObject();
        updateObject.put("$set", document);
        mongoClient.getDatabase("queries").getCollection("juego")
                .updateOne( Filters.eq("_id", event.getAggregateId()), updateObject);
    }

    @ConsumeEvent(value = "sofkau.carril.carrilcreado")
    void consumeCarrilCreado(CarrilCreado event) {
        System.out.println("materialize carril");
        Map<String, Object> document = new HashMap<>();
        document.put("_id", event.getAggregateId());
        document.put("meta", event.getMeta());
        document.put("juegoId", event.getJuegoId());
        mongoClient.getDatabase("queries").getCollection("carril")
                .insertOne(new Document(document));
    }

    @ConsumeEvent(value = "sofkau.carril.carroagregadoacarril")
    void consumeCarroAgregadoACarril(CarroAgregadoACarril event) {
        System.out.println("materialize carro agregado a carril: " + event.getCarroId());
        BasicDBObject document = new BasicDBObject();
        document.put("carroId", event.getCarroId());
        BasicDBObject updateObject = new BasicDBObject();
        updateObject.put("$set", document);
        mongoClient.getDatabase("queries").getCollection("carril")
                .updateOne( Filters.eq("_id", event.getAggregateId()), updateObject);
    }

    @ConsumeEvent(value = "sofkau.carro.carrocreado")
    void consumeCarroCreado(CarroCreado event){
        System.out.println("materialize carril");
        Map<String, Object> document = new HashMap<>();
        document.put("_id", event.getAggregateId());
        document.put("juegoId", event.getJuegoId());
        mongoClient.getDatabase("queries").getCollection("carro")
                .insertOne(new Document(document));
    }

    @ConsumeEvent(value = "sofkau.carro.conductorasignado")
    void consumeConductorAsignado(ConductorAsignado event) {
        System.out.println("materialize conductor asignado: " + event.getNombre() + " " + event.getCedula());
        BasicDBObject document = new BasicDBObject();
        document.put("conductor.cedula", event.getCedula());
        System.out.println("cedula asiganada");
        document.put("conductor.nombre", event.getNombre());
        BasicDBObject updateObject = new BasicDBObject();
        updateObject.put("$set", document);
        mongoClient.getDatabase("queries").getCollection("carro")
                .updateOne( Filters.eq("_id", event.getAggregateId()), updateObject);
    }


    //TODO: EVENTO MoverCarro
    //TODO: Separar por agregados

}