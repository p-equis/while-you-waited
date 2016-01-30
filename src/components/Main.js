require('normalize.css');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <p>While you waited...</p>

        <p>One (1) universe continued to exist.</p>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
