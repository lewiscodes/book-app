import { useContext } from "react";
import BookCard from "../../components/bookCard";
import { BookContext } from "../../contexts/BooksContext";
import styles from './styles.module.scss';

const Home  = (): JSX.Element => {
    const { books } = useContext(BookContext);

    if (!books) {
        return <p>Loading...</p>;
    }
    
    return <div className={styles.booksContainer}>{books.map(book => <BookCard book={book} key={book.id} />)}</div>;
}

export default Home;