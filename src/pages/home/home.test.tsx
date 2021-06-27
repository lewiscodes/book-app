import { booksContextRenderer } from '../../testHelpers';
import { generateBooks } from '../../testHelpers/mockData';
import Home from './';

describe('Home', () => {
  it("should render 'loading...' when no books have been provided", () => {
    const { getByText } = booksContextRenderer(undefined, <Home />)
    expect(getByText('Loading...')).toBeTruthy();
  });

  it('should render the correct numnber of books', () => {
    const books = generateBooks(4);
    const { getByText } = booksContextRenderer(books, <Home />);
    books.forEach(book => {
      expect(getByText(book.title)).toBeTruthy();
    });
  })
});
