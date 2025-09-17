"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
class Project {
    id;
    projectTitle;
    category;
    about;
    imgpath;
    live;
    Github;
    videoLink;
    constructor(id, projectTitle, category, about, imgpath, live, Github, videoLink) {
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
exports.Project = Project;
//# sourceMappingURL=project.entity.js.map