import express, { request } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";

import UsersControllers from "./controllers/UsersController";
import CreateSessionController from "./controllers/CreateSessionController";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

import ensureAuthenticate from "./middlewares/ensureAuthenticate";

const routes = express.Router();

const upload = multer(uploadConfig);

const usersControllers = new UsersControllers();
const createSessionController = new CreateSessionController();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get("/users", usersControllers.index);
routes.post("/users", usersControllers.create);
routes.patch(
  "/users",
  ensureAuthenticate,
  upload.single("avatar"),
  usersControllers.updateAvatar
);

routes.post("/session", createSessionController.create);

routes.get("/classes", ensureAuthenticate, classesControllers.index);
routes.post("/classes", ensureAuthenticate, classesControllers.create);

routes.get("/connections", ensureAuthenticate, connectionsController.index);
routes.post("/connections", ensureAuthenticate, connectionsController.create);

export default routes;
