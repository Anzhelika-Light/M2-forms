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
