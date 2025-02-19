const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Flashcard Learning App API",
            version: "1.0.0",
            description: "API documentation for Flashcard Learning App",
        },
        servers: [
            {
                url: "https://alfred-backend-beta.vercel.app/",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ["./routes/*.js", "./models/*.js"], // Path to the API routes
};

const specs = swaggerJsdoc(options);

module.exports = specs;
