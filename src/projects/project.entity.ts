export class Project {
  id: number;
  projectTitle: string;
  category: string[];
  about: string;
  imgpath: string; // سيكون رابط الصورة بعد رفعها على Cloudinary
  live: string;
  Github: string;
  videoLink?: string;

  constructor(
    id: number,
    projectTitle: string,
    category: string[],
    about: string,
    imgpath: string,
    live: string,
    Github: string,
    videoLink?: string
  ) {
    this.id = id;
    this.projectTitle = projectTitle;
    this.category = category;
    this.about = about;
    this.imgpath = imgpath;
    this.live = live;
    this.Github = Github;
    this.videoLink = videoLink;
  }
}
