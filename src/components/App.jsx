import FormAddBook from './FormAddBook/FormAddBook';
import BookList from './BookList/BookList';

const books = [
  {
    id: '1',
    title: 'Worm',
    author: 'Джон Маккрей',
  },
];

export const App = () => {
  return (
    <div>
      <FormAddBook onSubmit={() => {}} />
      <BookList items={books} />
    </div>
  );
};
