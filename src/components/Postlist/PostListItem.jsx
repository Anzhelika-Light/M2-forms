import css from './postlist.module.css';

const PostListItem = ({ title, body }) => {
  return (
    <>
      <li className={css.item}>
        <img className={css.img} src="" alt="" />
        <h4 className={css.title}>{title}</h4>
        <p className={css.body}>{body}</p>
      </li>
    </>
  );
};

export default PostListItem;
