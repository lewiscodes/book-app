import { render } from '@testing-library/react';
import { BrowserRouter as Router} from 'react-router-dom';
import { IBook } from '../types/book';
import { BookContext } from '../contexts/BooksContext';

export const booksContextRenderer = (books: IBook[] | undefined, component: JSX.Element) => {
    return render(
        <Router>
            <BookContext.Provider value={{ books }}>
                {component}
            </BookContext.Provider>
        </Router>
    )
};

export const randomString = (length: number) => {
    let randomString = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let x = 0; x < length; x++) {
        randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return randomString;
}