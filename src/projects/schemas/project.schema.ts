import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {
  @Prop({ required: true })
  projectTitle: string;

  @Prop({ type: [String], default: [] })
  category: string[];

  @Prop({ required: true })
  about: string;

  @Prop()
  imgpath: string;

  @Prop()
  live: string;

  @Prop()
  Github: string;

  @Prop()
  videoLink: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
