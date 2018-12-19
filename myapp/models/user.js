mongoose = require('mongoose');
Schema = mongoose.schema;

const userSchema = new Schema ({
    email: {type: String, unique: true, lowercase: true, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
})

const ModelClass = mongoose.model('users', userSchema);

ModelClass.find({}, (err,users) => {
    if (err) {
        console.log(err);

    }else if (users.length === 0) {
        const user1 = new ModelClass({
            email: 'not@realemail.com',
            password: '1234',
            firstName: 'lastnamefirst',
            lastName: 'firstnamelast'
        })
        const user2 = new ModelClasee({
            email: 'anotherfakeem@il.com',
            password: '1234',
            firstname: 'butwait',
            lastname: 'theresmore'
        })
        user1.save();
        user2.save();
        console.log('Seeded DB with 2 new users.');
    }
})

module.exports = ModelClass
