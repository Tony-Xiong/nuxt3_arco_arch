import menu from '@/server/config/menu.json'
export default defineEventHandler(async (event)=>{

    const body = await readBody(event)
    const { username, password } = body
    console.log(username, password)
    if (username === 'admin' && password === 'admin') {
        return {
            "code": 200,
            "message": "success"
        }
    }
    else {
        event.node.res.statusCode = 403
        return {
            "code": -1,
            "message": "用户名或密码错误"
        }
    }
})