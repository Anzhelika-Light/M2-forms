import PropTypes from 'prop-types';
import styles from './book-list.module.css';

const BookList = ({ items, removeBook }) => {
  const elements = items.map(({ id, title, author }) => (
    <li key={id} className={styles.item}>
      {title}. Author: {author}
      <span onClick={() => removeBook(id)} className={styles.remove}>
        X
      </span>
    </li>
  ));

  return (
    <>
      <h4 className={styles.title}>List of books</h4>
      <ol className={styles.list}>{elements}</ol>
    </>
  );
};

export default BookList;

BookList.defaultProps = {
  items: [],
};

BookList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
};
