import { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { title, author } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="bookName">Book name</label>
          <input
            name="title"
            value={title}
            onChange={this.handleChange}
            className={styles.field}
            type="text"
            id="bookName"
            placeholder="Enter book name"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="author">Author</label>
          <input
            name="author"
            value={author}
            onChange={this.handleChange}
            className={styles.field}
            type="text"
            id="author"
            placeholder="Enter an author"
          />
        </div>
        <button className={styles.btn} type="button">
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
