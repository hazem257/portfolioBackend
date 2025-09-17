import { Model } from 'mongoose';
import { Certificate, CertificateDocument } from './schemas/certficate.schema';
export declare class CertificatesService {
    private certificateModel;
    constructor(certificateModel: Model<CertificateDocument>);
    create(data: Partial<Certificate>): Promise<Certificate>;
    findAll(): Promise<Certificate[]>;
    findOne(id: string): Promise<Certificate>;
    update(id: string, data: Partial<Certificate>): Promise<Certificate>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
