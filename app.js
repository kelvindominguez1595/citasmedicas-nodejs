import * as dotenv from 'dotenv';
import Server from "./src/config/server.js";

dotenv.config();
const server = new Server;

server.listen();