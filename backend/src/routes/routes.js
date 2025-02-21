import { Router } from "express";

import multerPostUser from "../middlewares/multer/postUser.js";
import errorRoutes from "../middlewares/errorRoutes.js";

import UsuarioController from "../controllers/UsuarioController.js";

const routes = new Router();

routes.get("/user/:id", UsuarioController.show);
routes.post("/user", multerPostUser.single("image"), UsuarioController.store);

routes.use(errorRoutes);

export default routes;
