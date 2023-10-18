import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common/pipes";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function startServer() {
    const port = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    const config = new DocumentBuilder()
        .setTitle('Test api')
        .setDescription('Test API documentation')
        .setVersion('1.0')
        .addTag('estate')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(port, () => console.log(`Server started on port ${port}`))
}

startServer()