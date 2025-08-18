import { z } from 'zod'

const bodySchema = z.object({
    username: z.string(),
    password: z.string().min(6)
})

export default defineEventHandler(async (event) => {
    try {
        const { username, password } = await readValidatedBody(event, bodySchema.parse)

        const db = event.context.cloudflare.env.DB
        const { results } = await db.prepare(`SELECT * FROM users WHERE username = ? and password = ?`)
            .bind(username, password)
            .run()

        if (results.length === 0) {
            return Response.json({ code: 0, error: 'Invalid username or password' }, { status: 401 })
        }

        await setUserSession(event, {
            user: {
                name: username
            }
        })

        return Response.json({ code: 1, error: 'success' })
    } catch (error) {
        let errMsg;
        if (error instanceof Error) {
            errMsg = error.message
        } else {
            errMsg = String(error)
        }
        return Response.json({ code: 0, error: errMsg }, { status: 500 })
    }
})
