import Request from 'request'

class AuthServer {
    constructor() {}

    async login() {
        const result = Request({
            url: 'https://sms.dun.163.com/v2/sendsms',
            paramType: 'json',
            mobile: '18810329065'
        })
    }
}
// f1af6a62873841d4a75bcf6161bf3caa
export default new AuthServer()
