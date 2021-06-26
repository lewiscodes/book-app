import { createContext } from 'react';
import { IBook } from '../types/book';

export interface IBookContext {
    readonly books: IBook[] | undefined;
}

export const BookContext = createContext<IBookContext>({
    books: undefined
});
