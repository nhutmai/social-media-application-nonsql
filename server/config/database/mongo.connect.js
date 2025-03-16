const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const {DB_URL} = process.env;

class Database {
    constructor() {
        if (!Database.instance) {
            this.connect();
        }
        return Database.instance
    }

    async connect() {
        try {
            await mongoose.connect(DB_URL);
            console.log('Database Connected');
        } catch (error) {
            console.log(error.message);
        }

    }
}

const dbConnection = new Database();
Object.freeze(dbConnection);
module.exports = dbConnection;