import React from 'react';
import ReactDOM from 'react-dom/client';


const h1 = <h1>Hello world</h1>

function App() {
  return (
    <div>
      {h1}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eius velit saepe, modi minus asperiores laboriosam quisquam sapiente quidem eligendi culpa harum aut fugit adipisci sunt placeat quod. Eveniet, rem.

      </p>
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);

root.render(<App/>);

root.render(h1);

