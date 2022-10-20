import { Router } from "express";
import rolesController from "../controllers/rolesController.js";

const rolesRouter = Router();

rolesRouter.get('/', rolesController.rolesGet);
rolesRouter.post('/', rolesController.rolesPost);
rolesRouter.put('/:id', rolesController.rolesPut);
rolesRouter.delete('/:id', rolesController.rolesDelete);

export default rolesRouter;