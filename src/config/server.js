import express from "express";
import cors from "cors";

import {
    categoriesRouter,
    gendersRouter,
    paymentsRouter,
    reservationsRouter,
    statusRouter,
    userRouter,
    authRouter
} from "../routers/index.js";

import MongoDbConnection from "./db.js";

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth/login',
            categories: '/api/categories',
            genders: '/api/genders',
            payments: '/api/payments',
            reservations: '/api/reservations',
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
        this.app.use(cors());
        this.app.use(express.json());
    }

    routers() {
        this.app.use(this.paths.auth, authRouter);
        this.app.use(this.paths.categories, categoriesRouter);
        this.app.use(this.paths.genders, gendersRouter);
        this.app.use(this.paths.payments, paymentsRouter);
        this.app.use(this.paths.reservations, reservationsRouter);
        this.app.use(this.paths.status, statusRouter);
        this.app.use(this.paths.users, userRouter);
    }

    listen() {
        this.app.listen(this.port, () => console.log(`Server is running port: ${this.port}`));
    }
}

export default Server;