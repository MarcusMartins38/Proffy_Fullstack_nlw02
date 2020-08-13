import express from "express";
import UsersControllers from "./controllers/UsersController";
import CreateSessionController from "./controllers/CreateSessionController";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();
const usersControllers = new UsersControllers();
const createSessionController = new CreateSessionController();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get("/users", usersControllers.index);
routes.post("/users", usersControllers.create);

routes.post("/session", createSessionController.create);

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;
