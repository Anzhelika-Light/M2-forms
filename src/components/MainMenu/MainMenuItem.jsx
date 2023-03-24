import PropTypes from 'prop-types';

import css from './main-menu.module.css';

const MainMenuItem = ({ text, link }) => {
  return (
    <li className={css.item}>
      <a className={css.link} href={link}>
        {text}
      </a>
    </li>
  );
};

export default MainMenuItem;

MainMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
