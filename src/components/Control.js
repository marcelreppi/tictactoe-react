import React from 'react';

class Control extends React.Component {
  render() {
    return (
      <div className="Controls">
        <button className="btn btn-outline-primary" onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}

export default Control;
