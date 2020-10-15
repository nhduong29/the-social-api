const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./The-Social-Integration.v1.yaml');

var port = process.env.PORT || 8080;
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port,()=>{
    console.log("server is running on "+ port)
})