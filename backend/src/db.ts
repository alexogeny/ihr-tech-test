/**
 * Imports
 */
import fs from 'fs'
import path from 'path'
import { Sequelize } from 'sequelize'

/**
 * Constants
 * (add any to db const to stop tslint complaining)
 */
const baseName = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../db-config.json')[env];
const db: any = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

/**
 * Read models files
 * Do this by dynamically iterating over the models folder
 */
fs.readdirSync(path.join(__dirname, '/models'))
    .filter(file => file.indexOf('.') !== 0 && file !== baseName && file.slice(-3) === '.js')
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, '/models', file));
        db[model.name] = model
    });

/**
 * Detect associations (i.e. nameXuser) and create the associations in the db
 */
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
