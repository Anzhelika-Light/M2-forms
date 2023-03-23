// import Books from './Books/Books';
import Colorpicker from './Colorpicker/Colorpicker';
// import Posts from './Posts/Posts';
import ColorpickerOptions from '../colorpicker.json';

export const App = () => {
  return (
    <div>
      {/* <Books /> */}
      {/* <Posts /> */}
      <Colorpicker options={ColorpickerOptions} />
    </div>
  );
};
