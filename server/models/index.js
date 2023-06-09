const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const baseName = path.basename(__filename);

constconfig = require('../config').db(process.env.NODE_ENV || 'development');

mongoose.connect(`mongodb://${config.hostName}:${config.port}/${config.dbName}`);

const db = {};

fs.readdirSync(__dirname)
    .filter(file => file !== baseName & /.js/.test(file))
    .forEach(file => {
        const model = require(file)
        db[model.modelName] = model
    })

module.exports = db;