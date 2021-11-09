package co.com.sofka.cargame.infra;

import co.com.sofka.business.generic.UseCaseHandler;
import co.com.sofka.business.support.RequestCommand;
import co.com.sofka.cargame.application.usecase.CreateGameUseCase;
import co.com.sofka.cargame.application.usecase.StartGameUseCase;
import co.com.sofka.cargame.domain.juego.command.CrearJuegoCommand;
import co.com.sofka.cargame.domain.juego.command.InicarJuegoCommand;
import co.com.sofka.domain.generic.Identity;
import co.com.sofka.infraestructure.asyn.SubscriberEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


@RestController
@Path("/api")
public class GameController {

    @Autowired
    private SubscriberEvent subscriberEvent;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/createGame")
    public Response createGame(@RequestBody CrearJuegoCommand command){
        System.out.println(command);
        var useCase = new CreateGameUseCase();
        UseCaseHandler.getInstance().setIdentifyExecutor(new Identity().generateUUID().toString()).
                asyncExecutor(new CreateGameUseCase(), new RequestCommand<>(command)).subscribe(subscriberEvent);
        return Response.ok().build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/startGame")
    public Response startGame(@RequestBody InicarJuegoCommand command){
        var useCase = new StartGameUseCase();
        UseCaseHandler.getInstance().setIdentifyExecutor(command.getJuegoId().value()).
                asyncExecutor(useCase, new RequestCommand<>(command)).subscribe(subscriberEvent);
        return Response.ok().build();
    }

}
