class Auth {
    constructor() {
    }

    async login(req, res) {
        req.session.user = {
            name: 'lipenghui'
        }

        res.send({
            status: true,
            data: {
                name: 'lipenghui'
            }
        });
    }

}

export default new Auth();