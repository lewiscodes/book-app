import { generateBooks } from '../../testHelpers/mockData';
import BookCard from './';
import { ERoutes } from '../../router';
import { render } from '@testing-library/react';
import { BrowserRouter as Router} from 'react-router-dom';

describe('BookCard', () => {
    const book = generateBooks(1)[0];
    it('should render a book card', () => {
        const { getByText, getAllByTestId } = render(<Router><BookCard book={book} /></Router>)
        expect(getByText(book.title)).toBeTruthy();
        expect(getByText(`(${book.author})`)).toBeTruthy();
        expect(getByText('Click for more info...')).toBeTruthy();
        expect(getAllByTestId('link')[0]).toHaveAttribute('href', `${ERoutes.BOOK}/${book.id}`)
    });
});
