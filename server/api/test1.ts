export default defineEventHandler((event) => {
    return Response.json({
        headersJson: event.node.req.headers,
    })
})