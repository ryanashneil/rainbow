import Router from "koa-router";
import { Context } from "koa";

const router = new Router().prefix("/api");

router.get("/students", async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = { body: "hello there" };
});

export default router;
