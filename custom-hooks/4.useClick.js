import { useState, useEffect, useRef } from 'react';
import './styles.css';

const useClick = onClick => {
  if (typeof onClick !== 'function') {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, []);
  return element;
};

export default function App() {
  const sayHello = () => {
    console.log('say hello');
  };
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
}

/**
 * useHover
 */

const useHover = onHover => {
  if (typeof onHover !== 'function') {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('mouseenter', onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('mouseenter', onHover);
      }
    };
  }, []);
  return element;
};
