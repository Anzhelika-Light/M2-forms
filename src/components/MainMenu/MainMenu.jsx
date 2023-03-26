import PropTypes from 'prop-types';

import MainMenuItem from './MainMenuItem';

import css from './main-menu.module.css';

const MainMenu = ({ items }) => {
  const elements = items.map(({ id, ...props }) => (
    <MainMenuItem key={id} {...props} />
  ));

  return <ul className={css.menu}>{elements}</ul>;
};

export default MainMenu;

MainMenu.defaultProps = {
  items: [],
};

MainMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ),
};
