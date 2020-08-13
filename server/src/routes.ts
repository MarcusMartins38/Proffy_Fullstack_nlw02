import express from "express";
import UsersControllers from "./controllers/UsersController";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();
const usersControllers = new UsersControllers();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get("/users", usersControllers.index);
routes.post("/users", usersControllers.create);

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

export default routes;
