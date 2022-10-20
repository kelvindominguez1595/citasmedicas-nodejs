import { Router } from "express";
import paymentsController from "../controllers/paymentsController.js";

const paymentsRouter = Router();

paymentsRouter.get('/', paymentsController.paymentsGet);
paymentsRouter.post('/', paymentsController.paymentsPost);
paymentsRouter.put('/:id', paymentsController.paymentsPut);
paymentsRouter.delete('/:id', paymentsController.paymentsDelete);

export default paymentsRouter;