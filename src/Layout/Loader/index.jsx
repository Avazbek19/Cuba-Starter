import React, { Fragment, useState, useEffect } from 'react';

const Loader = (props) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      <div className={`loader-wrapper ${show ? '' : 'loaderhide'}`}>
        <div className='loader-index'>
          <span></span>
        </div>
        <svg>
          <defs></defs>
          <filter id='goo'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='11' result='blur'></feGaussianBlur>
            <feColorMatrix in='blur' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9' result='goo'></feColorMatrix>
          </filter>
        </svg>
      </div>
    </Fragment>
  );
};

export default Loader;
