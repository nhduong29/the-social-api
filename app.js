const express = require('express');
const path = require('path');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./The-Social-Integration.v1.yaml');

var port = process.env.PORT || 8080;
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/docs', express.static(path.join(__dirname, 'public')))

app.listen(port,()=>{
    console.log("server is running on "+ port)
})