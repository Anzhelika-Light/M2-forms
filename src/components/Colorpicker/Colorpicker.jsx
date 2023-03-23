import { Component } from 'react';

import css from './colorpicker.module.css';

class Colorpicker extends Component {
  state = {
    activeBtnIndex: 0,
  };

  setActiveIndex = index => {
    this.setState({ activeBtnIndex: index });
  };

  makeOptionClassName = index => {
    const { activeBtnIndex } = this.state;
    const classNames =
      index === activeBtnIndex ? `${css.btn} ${css.active}` : css.btn;
    return classNames;
  };

  render() {
    const { options } = this.props;
    const { activeBtnIndex } = this.state;
    const { label } = options[activeBtnIndex];

    const elements = options.map(({ label, color }, index) => {
      const classNames = this.makeOptionClassName(index);
      return (
        <button
          type="button"
          key={label}
          className={classNames}
          style={{ backgroundColor: color }}
          onClick={() => this.setActiveIndex(index)}
        ></button>
      );
    });

    return (
      <div className={css.colorpicker}>
        <h2 className={css.title}>Pick a color</h2>
        <p>You chose {label} color</p>
        <div className={css.container}>{elements}</div>
      </div>
    );
  }
}

export default Colorpicker;
