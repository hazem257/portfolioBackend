// src/cloudinary/cloudinary.service.ts
import { Injectable } from '@nestjs/common';
import { v2 as cloudinary, UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: 'dybyowe82',
      api_key: '987257745629334',
      api_secret: 'MU3tycW6da1hiGNoK2PXAkFSdT4',
    });
  }

  async uploadFile(file: Express.Multer.File): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ resource_type: 'auto' }, (error, result) => {
          if (error) return reject(error);
          if (!result) return reject(new Error('No result returned from Cloudinary'));
          resolve(result);
        })
        .end(file.buffer);
    });
  }
}
