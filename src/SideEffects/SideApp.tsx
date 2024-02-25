import { useEffect, useRef } from 'react';

const SideApp = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  //   useEffect
  /**
   * Like useState, useRef hook we can call it for
   */

  //   Pure Component - using useEffect
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
    console.log('useEffect1');
  }, []);

  useEffect(() => {
    document.title = 'SideEffect ';
    console.log('useEffect2');
  });

  //   Side Effect - Chaning the state of the DOM(Not a pure component)
  //   if (inputRef.current) inputRef.current.focus();

  return (
    <div>
      <input type='text' ref={inputRef} className='form-control' />
    </div>
  );
};

export default SideApp;
