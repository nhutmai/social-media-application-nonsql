const express = require('express');

const routes = require('./routes/index.router');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const swaggerDocument = YAML.load(path.join(__dirname, './docs/swagger.yaml'));

// innit database
require('./config/database/mongo.connect');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', routes);

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${PORT}`);
});