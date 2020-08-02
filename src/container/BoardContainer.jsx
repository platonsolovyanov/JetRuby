import React from 'react';
import Board from '../component/Board';
import { connect } from 'react-redux';

export class BoardContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Board {...this.props} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    colors: state.board.colors,
  };
};

export default connect(mapStateToProps)(BoardContainer);
