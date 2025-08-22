import { type PersonRow } from "~/types/person";

export default defineEventHandler(async (event) => {
    const db = event.context.cloudflare.env.DB
    const result = await db.prepare("select * from person").run<PersonRow>();
    return Response.json(result.results)
})
