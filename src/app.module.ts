import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

function createObjectWithEmptyRelatedMails(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => createObjectWithEmptyRelatedMails(item));
  } else if (typeof obj === 'object' && obj !== null) {
    const newObj = {};
    for (const key in obj) {
      if (key === 'relatedMails') {
        newObj[key] = [];
      } else {
        newObj[key] = createObjectWithEmptyRelatedMails(obj[key]);
      }
    }
    return newObj;
  } else {
    return obj;
  }
}
