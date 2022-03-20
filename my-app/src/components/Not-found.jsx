import React from 'react';

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
  },
};
const classes = {
  h1: 'display-3',
};

export default function NotFound() {
  return (
    <div style={styles.wrapper}>
      <div>
        <hr />
        <h1 className={classes.h1}>Not-Found</h1>
        <hr />
      </div>
    </div>
  );
}
