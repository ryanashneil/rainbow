import Koa from "koa";
import parser from "koa-bodyparser";
import router from "./routes";

const server = new Koa();
const acceptJSON = parser({ enableTypes: ["json"] });

server.use(acceptJSON);
server.use(router.routes());
server.use(router.allowedMethods());
server.listen(3001);
