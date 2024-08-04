import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: "3.0.2",
        tags: [
            {
                name: "Products",
                description: "API operations related to products"
            },
        ],
        info: {
            title: "REST API Node.js / Express / TypeScript",
            version: "1.0.0",
            description: "API Docs for Products",
        },
    },
    apis: ["./src/router.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerUiOptions : SwaggerUiOptions =
{
    customCss: `
        .topbar-wrapper .link {
            content: url('/images/Cthulu.png');
            height: 80px;
            width: auto;
            object-fit: contain;
        }
        .swagger-ui .topbar {
            background-color: #2b3b45;
            display: flex;
            align-items: center;
        }
        .topbar-wrapper .link {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 80px;
        }
    `,
    customSiteTitle: "Documentación RES API Express - TypeScript",
}

export default swaggerSpec;
export { swaggerUiOptions };