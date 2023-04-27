import PropTypes from 'prop-types';

import {
  ProductListItemStyles,
  ProductListLinkStyles,
} from './product-list.styled';

const ProductListItem = ({ name, link }) => {
  return (
    <ProductListItemStyles className="product-list-item">
      <ProductListLinkStyles href={link}>{name}</ProductListLinkStyles>
    </ProductListItemStyles>
  );
};

export default ProductListItem;

ProductListItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
