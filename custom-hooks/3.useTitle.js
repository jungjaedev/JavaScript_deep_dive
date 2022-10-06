import { useState, useEffect } from 'react';
import './styles.css';

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmltitle = document.querySelector('title');
    htmltitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function App() {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 5000);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
