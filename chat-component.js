import React from 'react';
import ReactDOM from 'react-dom';

var ChatApp = React.createClass({
    render: function(){
      return(
        <div>
        <p>This will be the chat application </p>
        </div>
      )
    }
});

ReactDOM.render(<ChatApp />, document.getElementById("chat"))
