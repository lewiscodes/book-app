import { Link } from 'react-router-dom';
import { ERoutes } from '../../router';
import { IBook } from '../../types/book';

interface IBooksBySameAuthorProps {
    readonly books: IBook[]
    readonly bookId: string;
    readonly author: string;
}

const BooksBySameAuthor = ({ books, bookId, author }: IBooksBySameAuthorProps): JSX.Element => {
    const booksBySameAuthor = books.filter(book => book.author.toUpperCase() === author.toUpperCase() && book.id !== bookId);

    if (booksBySameAuthor.length) {
        return (
            <>
                <h4>Other books by the same author:</h4>
                <ul>{booksBySameAuthor.map(book => (
                    <Link key={book.id} to={`${ERoutes.BOOK}/${book.id}`}><li>{book.title}</li></Link>
                ))}</ul>
            </>
        );
    }

    return <p>There are no other books by the same author...</p>
}

export default BooksBySameAuthor;
