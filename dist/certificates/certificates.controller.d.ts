import { CertificatesService } from './certificates.service';
import { Certificate } from './schemas/certficate.schema';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
export declare class CertificatesController {
    private readonly certificatesService;
    private readonly cloudinaryService;
    constructor(certificatesService: CertificatesService, cloudinaryService: CloudinaryService);
    create(file: Express.Multer.File, body: CreateCertificateDto): Promise<Certificate>;
    findAll(): Promise<Certificate[]>;
    findOne(id: string): Promise<Certificate>;
    update(id: string, body: UpdateCertificateDto, file?: Express.Multer.File): Promise<Certificate>;
    getStats(): Promise<{
        total: number;
        latest: Certificate;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
