import PropTypes from 'prop-types';

import ProductListItem from './ProductListItem';

import { Wrapper, Title, ProductListStyles } from './product-list.styled';

const ProductList = ({ title, items }) => {
  const elements = items.map(({ id, ...props }) => (
    <ProductListItem key={id} {...props} />
  ));
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ProductListStyles className="product-list">{elements}</ProductListStyles>
    </Wrapper>
  );
};

export default ProductList;

ProductList.defaultProps = {
  items: [],
};

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ),
};
