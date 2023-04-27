// import Books from './Books/Books';
// import Colorpicker from './Colorpicker/Colorpicker';
// import Posts from './Posts/Posts';
// import PostList from './Postlist/Postlist';
// import MainMenu from './MainMenu/MainMenu';
import ProductList from './ProductList/ProductList';

// import ColorpickerOptions from '../colorpicker.json';
// import Posts from '../data/postlist.json';
// import mainMenuItems from '../data/mainMenuItems.json';

const productList = [
  {
    id: '1',
    name: 'Lenovo X120S',
    link: '#',
  },
  {
    id: '2',
    name: 'iPhone X',
    link: '#',
  },
];

export const App = () => {
  return (
    <div>
      {/* <Books /> */}
      {/* <Posts /> */}
      {/* <Colorpicker options={ColorpickerOptions} /> */}
      {/* <PostList title="Post List" items={Posts} /> */}
      {/* <MainMenu items={mainMenuItems} /> */}
      <ProductList title="Product list title" items={productList} />
    </div>
  );
};
