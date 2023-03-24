// import Books from './Books/Books';
// import Colorpicker from './Colorpicker/Colorpicker';
// import Posts from './Posts/Posts';
// import ColorpickerOptions from '../colorpicker.json';
import Posts from '../data/postlist.json';

import PostList from './Postlist/Postlist';

export const App = () => {
  return (
    <div>
      {/* <Books /> */}
      {/* <Posts /> */}
      {/* <Colorpicker options={ColorpickerOptions} /> */}
      <PostList title="Post List" items={Posts} />
    </div>
  );
};
