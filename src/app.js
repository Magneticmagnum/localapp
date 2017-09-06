
import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar, Button, Checkbox, Dropdown, Input, Hint, Switch } from 'react-atlas';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickHandler(event) {
    console.log("event: ", event);
  }
                                                                                
  render() {
    return (
      <div>
        hi

      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));