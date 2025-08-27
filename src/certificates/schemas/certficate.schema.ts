import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CertificateDocument = Certificate & Document;

@Schema({ timestamps: true })
export class Certificate {
    @Prop({ required: true })
    title: string;

    @Prop()
    description?: string;

    @Prop({ required: true })
    company: string;

    @Prop()
    date?: string;

    @Prop()
    imageUrl?: string;
}

export const CertificateSchema = SchemaFactory.createForClass(Certificate);
