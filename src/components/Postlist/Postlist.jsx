import PropTypes from 'prop-types';

import PostListItem from './PostListItem';

import css from './postlist.module.css';

const PostList = ({ title, items }) => {
  const elements = items.map(({ id, ...props }) => (
    <PostListItem key={id} {...props} />
  ));

  return (
    <>
      <h2 className={css.mainTitle}>{title}</h2>
      <ul className={css.list}>{elements}</ul>
    </>
  );
};

export default PostList;

PostList.defaultProps = {
  items: [],
};

PostList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired
  ),
};
