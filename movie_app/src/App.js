import React from 'react';

function Food(props) {
  return <h3>Let's Eat ! ! ! {props.name}</h3>;
}

const foodILike = [
  { id: 1, name: 'melon' },
  { id: 2, name: 'tomato' },
  { id: 3, name: 'banana' },
];

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      {foodILike.map(item => (
        <Food key={item.id} name={item.name} />
      ))}
    </div>
  );
}

export default App;
