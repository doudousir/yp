class Lately {
    constructor() {
    }

    async list(req, res) {
        res.send({
            status: true,
            data: []
        });
    }

}

export default new Lately();