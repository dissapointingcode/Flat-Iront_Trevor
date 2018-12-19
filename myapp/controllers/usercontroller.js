const user = require('.../models/user');
exports.readAll = (req, res, next) => {
    user.find((err, res, next) =>{
        if(err) {
        res.status(500).json  ({
            success:false,
            error: err
        })
        }  else {
            res.status(500).json(users)
        }
    })
}