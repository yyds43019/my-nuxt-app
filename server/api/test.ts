export default defineEventHandler(async (event)=>{
    const KV = event.context.cloudflare.env.TEST_KV

    const result = KV.get("test");
    return new Response(result)
})