export interface IBook {
    readonly id: string;
    readonly cover: string;
    readonly isbn: string;
    readonly title: string;
    readonly subtitle: string;
    readonly author: string;
    readonly published: string;
    readonly publisher: string;
    readonly pages: number;
    readonly description: string;
    readonly website: string;
}