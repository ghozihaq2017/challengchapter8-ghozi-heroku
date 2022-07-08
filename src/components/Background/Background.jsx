import * as React from 'react';
import styles from './Background.module.css';

function Background(props) {
  return (
    <>
      <div className={`${styles.background} ${props.className}`}></div>
    </>
  );
}

export default Background;
