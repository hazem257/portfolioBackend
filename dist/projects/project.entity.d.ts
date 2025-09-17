export declare class Project {
    id: number;
    projectTitle: string;
    category: string[];
    about: string;
    imgpath: string;
    live: string;
    Github: string;
    videoLink?: string;
    constructor(id: number, projectTitle: string, category: string[], about: string, imgpath: string, live: string, Github: string, videoLink?: string);
}
