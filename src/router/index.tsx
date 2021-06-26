import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Book from '../pages/book';
import { BookContext } from '../contexts/BooksContext';
import { useState } from 'react';
import { IBook } from '../types/book';
import { useEffect } from 'react';

export enum ERoutes {
    HOME = '/',
    BOOK = '/book'
}

const AppRouter = () => {
    const [books, setBooks] = useState<IBook[]>();

    useEffect(() => {
        const getBooks = async () => {
            const res = await (await fetch('https://hokodo-frontend-interview.netlify.app/data.json')).json();
            setBooks(res.books);
        };

        getBooks();
    }, []);

    return (
        <Router>
            <h1 className='bp3-heading'>My Books App</h1>
            <Switch>
                <BookContext.Provider value={{ books }}>
                    <Route path={`${ERoutes.BOOK}/:id`} component={Book} />
                    <Route exact path={ERoutes.HOME} component={Home} />
                </BookContext.Provider>
            </Switch>
        </Router>
    );
}

export default AppRouter;
