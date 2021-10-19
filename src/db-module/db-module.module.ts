import { DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

export class DbModule {
  public static forRoot(): DynamicModule {
    return MongooseModule.forRoot(
      'mongodb+srv://123:123@cluster0.xpbqf.mongodb.net/test',
    );
  }

  public static forFeature(name: string, schema: any): DynamicModule {
    return MongooseModule.forFeature([{ name, schema }]);
  }
}
