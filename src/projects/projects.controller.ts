import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProjectsService } from './projects.service';
import { Project } from './schemas/project.schema';
import cloudinary from '../cloudinary/cloudinary.config';
import * as streamifier from 'streamifier';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('imgFile'))
  async create(@UploadedFile() file: Express.Multer.File, @Body() project: any) {
    let imageUrl = '';

    if (file && file.buffer) {
      const uploaded = await new Promise<any>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: 'projects' },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        streamifier.createReadStream(file.buffer).pipe(uploadStream);
      });

      imageUrl = uploaded.secure_url;
    }

    const newProject = {
      ...project,
      imgpath: imageUrl,
      category: typeof project.category === 'string'
        ? project.category.split(',').map(c => c.trim())
        : Array.isArray(project.category)
        ? project.category
        : [],
    };

    return this.projectsService.create(newProject);
  }
  @Get('test')
getTest() {
  return [{ projectTitle: 'Sample Project', about: 'Just a test', category: ['test'], imgpath: '', live: '', Github: '' }];
}

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.projectsService.delete(id);
  }
  @Put(':id')
@UseInterceptors(FileInterceptor('imgFile'))
async update(
  @Param('id') id: string,
  @UploadedFile() file: Express.Multer.File,
  @Body() project: any
) {
  let imageUrl: string | undefined = undefined;

  if (file && file.buffer) {
    const uploaded = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'projects' },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });

    imageUrl = uploaded.secure_url;
  }

  const updatedProject = {
    ...project,
    ...(imageUrl ? { imgpath: imageUrl } : {}), // لو في صورة جديدة حدث المسار
    category: typeof project.category === 'string'
      ? project.category.split(',').map(c => c.trim())
      : Array.isArray(project.category)
      ? project.category
      : [],
  };

  return this.projectsService.update(id, updatedProject);
}

}
