import React from 'react';

export class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handlerClickColorId = this.handlerClickColorId.bind(this);
  }

  checkingAnArrayColors() {
    const { getState } = this.props;
    if (getState().board.colors.every(el => el === undefined)) {
      alert('You won !!! Refresh page');
    }
  }

  handlerClickColorId(event) {
    const {
      activeTile,
      compareTile,
      emptyTile,
      replaceColorOnUndefined,
      getState,
      color,
    } = this.props;

    let objTile = {
      first: function () {
        return getState().tile.firstActive;
      },
      second: function () {
        return getState().tile.secondActive;
      },
    };

    if (getState().tile.firstActive == null) {
      activeTile([color, event.target]);
      objTile.first()[1].style.background = objTile.first()[0];
    } else {
      compareTile([color, event.target]);
      if (objTile.first() == null && objTile.second() == null) {
        replaceColorOnUndefined(color);
        emptyTile();
      } else {
        if (objTile.first()[1] !== objTile.second()[1]) {
          const block = document.querySelector('.block');
          block.style.display = 'block';
          getState().tile.secondActive[1].style.background = objTile.second()[0];
          setTimeout(() => {
            getState().tile.firstActive[1].style.background = 'white';
            getState().tile.secondActive[1].style.background = 'white';
            emptyTile();
            block.style.display = 'none';
          }, 1000);
        } else {
          return;
        }
      }
    }
    return this.checkingAnArrayColors();
  }

  render() {
    return (
      <button className='square' onClick={this.handlerClickColorId}></button>
    );
  }
}
