import { Router } from "express";
import statusController from "../controllers/statusController.js";

const statusRouter = Router();

statusRouter.get('/', statusController.statusGet);
statusRouter.post('/', statusController.statusPost);
statusRouter.put('/:id', statusController.statusPut);
statusRouter.delete('/:id', statusController.statusDelete);

export default statusRouter;