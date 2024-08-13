const swaggerAutogen = require('swagger-autogen')();

const doc ={
    info:{
        title: 'Supermarket API',
        description: 'API para gerenciar produtos de um supermecado',
    },
    host: 'localhost:5000',
    schemes: ['http'],
}

const outputFile = './swagger_output.json'
const endpoinFiles = ['./routes/ProductRoutes.js']

swaggerAutogen(outputFile, endpoinFiles, doc)