import { Router } from "express";
import reservationsController from "../controllers/reservationsController.js";

const reservationsRouter = Router();

reservationsRouter.get('/', reservationsController.reservationsGet);
reservationsRouter.post('/', reservationsController.reservationsPost);
reservationsRouter.put('/:id', reservationsController.reservationsPut);
reservationsRouter.delete('/:id', reservationsController.reservationsDelete);

export default reservationsRouter;