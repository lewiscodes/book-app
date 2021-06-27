import { MemoryRouter, Route } from 'react-router-dom';
import { ERoutes } from '../../router';
import { booksContextRenderer } from '../../testHelpers';
import { generateBooks } from '../../testHelpers/mockData';
import Book from './';

describe('Book', () => {
    const books = generateBooks(1);

    it("should render 'loading...' when no books have been provided", () => {
        const { getByText } = booksContextRenderer(undefined, <Book />)
        expect(getByText('Loading...')).toBeTruthy();
    });

    it("should render 'Unable to find selected book...' when an invalid id has been passed", () => {
        const { getByText } = booksContextRenderer(books, <Book />);
        expect(getByText('Unable to find selected book...')).toBeTruthy();
    });

    it('should render the Book page', () => {
        const book = books[0];
        const component = <MemoryRouter initialEntries={['/book/0']}>
            <Route path={`${ERoutes.BOOK}/:id`}>
                <Book />
            </Route>
        </MemoryRouter>;
        const { getByText } = booksContextRenderer(books, component);
        expect(getByText('Back to list...')).toHaveAttribute('href', ERoutes.HOME)
        expect(getByText(book.title)).toBeTruthy();
        expect(getByText(`by ${book.author}`)).toBeTruthy();
        expect(getByText(`isbn: ${book.isbn}`)).toBeTruthy();
    })
});
