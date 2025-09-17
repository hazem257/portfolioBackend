import { Document } from 'mongoose';
export type CertificateDocument = Certificate & Document;
export declare class Certificate {
    title: string;
    description?: string;
    hour: string;
    company: string;
    date?: string;
    imageUrl?: string;
}
export declare const CertificateSchema: import("mongoose").Schema<Certificate, import("mongoose").Model<Certificate, any, any, any, Document<unknown, any, Certificate, any, {}> & Certificate & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Certificate, Document<unknown, {}, import("mongoose").FlatRecord<Certificate>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Certificate> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
