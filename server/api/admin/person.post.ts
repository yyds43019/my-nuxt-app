import { type PersonRow } from "~/types/person";

export default defineEventHandler(async (event) => {
    const body = await readBody<PersonRow>(event);

    const db = event.context.cloudflare.env.DB
    const result = await db.prepare("insert into person (name,age) values(?,?)").bind(body.name, body.age).run();
    return Response.json(result.success)
})
