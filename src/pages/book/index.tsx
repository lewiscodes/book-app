import { Card, Elevation } from "@blueprintjs/core";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import BooksBySameAuthor from "../../components/booksBySameAuthor";
import { BookContext } from "../../contexts/BooksContext";
import { ERoutes } from "../../router";
import styles from './styles.module.scss';

const Book = ():JSX.Element => {
    const params: { id: string } = useParams();
    const { books } = useContext(BookContext);
    const book = books?.find(book => book.id === params.id);

    if (!books) {
        return <p>Loading...</p>
    }

    if (!book) {
        return <p>Unable to find selected book...</p>
    }

    return (
        <Card elevation={Elevation.TWO} className={styles.bookContainer}>
            <img src={book.cover} alt={`${book.title} cover art`} />
            <div className={styles.bookInfoContainer}>
                <Link to={ERoutes.HOME}>Back to list...</Link>
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
                <p className={styles.isbn}>isbn: {book.isbn}</p>
                <BooksBySameAuthor books={books} bookId={book.id} author={book.author} />
            </div>
        </Card>
    );
};

export default Book;
