const mongoose = require ("mongoose")

const database = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`)
    });
}

module.exports = database;