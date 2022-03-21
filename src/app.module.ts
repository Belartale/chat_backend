import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';

// 'mongodb://localhost:27017'
@Module({
  imports: [
    UsersModule,
    MessagesModule,
    MongooseModule.forRoot(
      'mongodb+srv://belartale-chat-admin:belartale-chat-admin@cluster0.pxgec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
