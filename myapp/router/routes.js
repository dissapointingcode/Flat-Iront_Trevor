const usercontr = require('.../controllers/usercontroller');

module.exports = (app) => {
    app.get('/api/test', (req,res) => {
        res.send({msg: 'what are you doing in my swamp!'})
    })

    app.get('/api/users', UserController.realAll)
}