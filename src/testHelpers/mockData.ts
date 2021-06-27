import { randomString } from '.';
import { IBook } from '../types/book';

export const generateBooks = (numberOfBooks: number): IBook[] => {
    const books: IBook[] = [];
    for (let x = 0; x < numberOfBooks; x++) {
        books.push({
            id: x.toString(),
            cover: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
            isbn: randomString(5),
            title: randomString(10),
            subtitle: randomString(7),
            author: randomString(13),
            published: randomString(4),
            publisher: randomString(3),
            pages: 1,
            description: randomString(25),
            website: randomString(9)
        });
    }

    return books;
}