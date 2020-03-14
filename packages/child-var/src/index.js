import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Example() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>React/react-dom through `app:`</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

ReactDOM.render(<Example />, document.getElementById('var-root'));
