export class Song {
    id: number;
    language: string;
    author: string;
    title: string;
    choir: string;
    verses: {num: number; text: string}[];
    otherInfos: string;
    audioLink: string;
}
