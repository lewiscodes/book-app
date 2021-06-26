import { Link } from 'react-router-dom';
import { Card, Elevation, Icon } from "@blueprintjs/core";
import { IBook } from "../../types/book";
import styles from './styles.module.scss';
import { ERoutes } from '../../router';

interface IBookCardProps {
    readonly book: IBook;
}

const BookCard = ({ book }: IBookCardProps): JSX.Element => {
    return (
        <Card elevation={Elevation.TWO} className={styles.bookCard}>
            <img src={book.cover} alt={`${book.title} cover art`} />
            <div className={styles.bookInfo}>
                <h3>{book.title}</h3>
                <p>({book.author})</p>
                <Link to={`${ERoutes.BOOK}/${book.id}`} target='_blank' className={styles.moreInfo}>
                    <p className={styles.moreInfo}>
                        <Icon  className={styles.moreInfoIcon} icon='info-sign' />
                        Click for more info...
                    </p>
                </Link>
            </div>
        </Card>
    );
}

export default BookCard;