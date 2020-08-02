import React from 'react';

import { TileContainer } from '../container/TileContainer';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.renderTile = this.renderTile.bind(this);
  }

  renderTile(color) {
    if (color == undefined) {
      return (
        <button className='square' style={{ background: 'gray' }}></button>
      );
    } else {
      return <TileContainer color={color} {...this.props} />;
    }
  }

  render() {
    const { colors } = this.props;
    return (
      <div>
        <div className='board-row'>
          {this.renderTile(colors[0])}
          {this.renderTile(colors[1])}
          {this.renderTile(colors[2])}
          {this.renderTile(colors[3])}
        </div>
        <div className='board-row'>
          {this.renderTile(colors[4])}
          {this.renderTile(colors[5])}
          {this.renderTile(colors[6])}
          {this.renderTile(colors[7])}
        </div>
        <div className='board-row'>
          {this.renderTile(colors[8])}
          {this.renderTile(colors[9])}
          {this.renderTile(colors[10])}
          {this.renderTile(colors[11])}
        </div>
        <div className='board-row'>
          {this.renderTile(colors[12])}
          {this.renderTile(colors[13])}
          {this.renderTile(colors[14])}
          {this.renderTile(colors[15])}
        </div>
      </div>
    );
  }
}
