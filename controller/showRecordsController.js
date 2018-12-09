var MongoClient = require('mongodb').MongoClient;
const config = require('../config')

module.exports = (req, res) => {
    MongoClient.connect(config.mongoUrl, function (err, db) {
        if (err) throw err;
        db.collection("userprofile").find({}).toArray(function (err, result) {
            
            if (err) throw err;
            db.close();
            return res.json(result)
        });

    })


}