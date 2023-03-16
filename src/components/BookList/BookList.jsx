import PropTypes from 'prop-types';
import styles from './book-list.module.css';

const BookList = ({ items }) => {
  const elements = items.map(({ id, title, author }) => (
    <li key={id} className={styles.item}>
      {title}. Author: {author}
      <span className={styles.remove}>X</span>
    </li>
  ));

  return <ol className={styles.list}>{elements}</ol>;
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
