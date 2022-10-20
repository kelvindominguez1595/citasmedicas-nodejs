import express from "express";
import categoriesRouter from "../routers/categoriesRouter";
import gendersRouter from "../routers/gendersRouter";
import paymentsRouter from "../routers/paymentsRouter";
import reservationsRouter from "../routers/reservationsRouter";
import rolesRouter from "../routers/rolesRouter";
import statusRouter from "../routers/statusRouter";
import userRouter from "../routers/userRouter";
import MongoDbConnection from "./db";

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            categories: '/api/categories',
            genders: '/api/genders',
            payments: '/api/payments',
            reservations: '/api/reservations',
            roles: '/api/roles',
            status: '/api/status',
            users: '/api/users'
        }

        this.connectionMongoDB();
        this.middleware();
        this.routers();
    }

    async connectionMongoDB() {
        await MongoDbConnection();
    }

    middleware() {
        this.app.use(express.json());
    }

    routers() {
        this.app.use(this.paths.categories, categoriesRouter);
        this.app.use(this.paths.genders, gendersRouter);
        this.app.use(this.paths.payments, paymentsRouter);
        this.app.use(this.paths.reservations, reservationsRouter);
        this.app.use(this.paths.roles, rolesRouter);
        this.app.use(this.paths.status, statusRouter);
        this.app.use(this.paths.users, userRouter);
    }

    listen() {
        this.app.listen(this.port, () => console.log(`Server is running port: ${this.port}`));
    }
}

export default Server;