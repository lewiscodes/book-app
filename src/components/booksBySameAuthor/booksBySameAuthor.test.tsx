import { BrowserRouter as Router} from 'react-router-dom';
import { render } from "@testing-library/react";
import BooksBySameAuthor from '.';
import { generateBooks } from "../../testHelpers/mockData";

describe('booksBySameAuthor', () => {
    const books = generateBooks(1);

    it("should render 'There are no other books by the same author...' when no matches are found", () => {
        const { getByText } = render(<BooksBySameAuthor books={books} author='Lewis' bookId='090909' />)
        expect(getByText('There are no other books by the same author...')).toBeTruthy();
    });

    it("should render 'There are no other books by the same author...' when the only match found is the same book", () => {
        const { getByText } = render(<BooksBySameAuthor books={books} author={books[0].author} bookId={books[0].id} />)
        expect(getByText('There are no other books by the same author...')).toBeTruthy();
    });

    it('should render books from the same author', () => {
        const anotherBook = generateBooks(2)[1];
        books.push({
            ...anotherBook,
            author: books[0].author
        });
        const { getByText } = render(<Router><BooksBySameAuthor books={books} author={books[0].author} bookId={books[0].id} /></Router>)
        expect(getByText('Other books by the same author:')).toBeTruthy();
        expect(getByText(anotherBook.title)).toBeTruthy();
    });
})