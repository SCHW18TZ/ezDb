const mongoose = require('mongoose')
function ezDb(url){
    const db = mongoose.connection;
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    
    })
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {
        console.log(`connected to mongoDB : ${url}`);

    });
}

module.exports = ezDb;