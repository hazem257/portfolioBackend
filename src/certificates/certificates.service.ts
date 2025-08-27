import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Certificate, CertificateDocument } from './schemas/certficate.schema';

@Injectable()
export class CertificatesService {
  constructor(
    @InjectModel(Certificate.name) private certificateModel: Model<CertificateDocument>,
  ) {}

  async create(data: Partial<Certificate>): Promise<Certificate> {
    const created = new this.certificateModel(data);
    return created.save();
  }

  async findAll(): Promise<Certificate[]> {
    return this.certificateModel.find().exec();
  }

  async findOne(id: string): Promise<Certificate> {
    const cert = await this.certificateModel.findById(id).exec();
    if (!cert) throw new NotFoundException('Certificate not found');
    return cert;
  }

  async update(id: string, data: Partial<Certificate>): Promise<Certificate> {
    const updated = await this.certificateModel.findByIdAndUpdate(id, data, { new: true });
    if (!updated) throw new NotFoundException('Certificate not found');
    return updated;
  }

  async remove(id: string): Promise<{ message: string }> {
    const deleted = await this.certificateModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Certificate not found');
    return { message: 'Certificate deleted successfully' };
  }
}
