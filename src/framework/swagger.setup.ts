import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { configService } from './config/config.service';

export const swaggerSetup = (app) => {
  const API_DOC_TITLE = configService.get('API_DOC_TITLE');
  const API_DOC_VERSION = configService.get('API_DOC_VERSION');
  const API_DOC_BASEURL = configService.get('API_DOC_BASEURL');

  const options = new DocumentBuilder()
    .setTitle(API_DOC_TITLE)
    .setDescription(API_DOC_VERSION)
    .setVersion(API_DOC_VERSION)
    .addBearerAuth()
    .setBasePath(API_DOC_BASEURL)
    .setSchemes('http','https')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}

