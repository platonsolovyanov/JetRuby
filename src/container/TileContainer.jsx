import React from 'react';

import { Tile } from '../component/Tile';
import { bindActionCreators } from 'redux';

import { activeTile, compareTile, emptyTile } from '../store/tile/action';
import { replaceColorOnUndefined } from '../store/board/action';
export class TileContainer extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.activeTile = bindActionCreators(activeTile, dispatch);
    this.compareTile = bindActionCreators(compareTile, dispatch);
    this.emptyTile = bindActionCreators(emptyTile, dispatch);
    this.replaceColorOnUndefined = bindActionCreators(
      replaceColorOnUndefined,
      dispatch
    );
  }

  render() {
    return (
      <Tile
        activeTile={this.activeTile}
        compareTile={this.compareTile}
        emptyTile={this.emptyTile}
        replaceColorOnUndefined={this.replaceColorOnUndefined}
        {...this.props}
      />
    );
  }
}
