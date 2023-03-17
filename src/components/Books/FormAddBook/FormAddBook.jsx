import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import styles from './form-add-book.module.css';

class FormAddBook extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    title: '',
    author: '',
  };

  titleId = nanoid();
  authorId = nanoid();

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      title: '',
      author: '',
    });
  }

  render() {
    const { handleChange, handleSubmit, titleId, authorId } = this;
    const { title, author } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor={titleId}>Book name</label>
          <input
            name="title"
            value={title}
            onChange={handleChange}
            className={styles.field}
            type="text"
            id={titleId}
            placeholder="Enter book name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={authorId}>Author</label>
          <input
            name="author"
            value={author}
            onChange={handleChange}
            className={styles.field}
            type="text"
            id={authorId}
            placeholder="Enter an author"
            required
          />
        </div>
        <button className={styles.btn} type="submit">
          Add book
        </button>
      </form>
    );
  }
}

export default FormAddBook;

// FormAddBook.defaultProps = {
//   onSubmit: () => {},
// };

// FormAddBook.propTypes = {
//   onSubmit: PropTypes.func,
// };
