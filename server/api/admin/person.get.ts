import { drizzle } from "drizzle-orm/d1";
import { person } from '~~/server/schema/schema'

export default defineEventHandler(async (event) => {
    const db = drizzle(event.context.cloudflare.env.DB)
    const allPerson = await db.select().from(person).all();
    return Response.json(allPerson)
})
