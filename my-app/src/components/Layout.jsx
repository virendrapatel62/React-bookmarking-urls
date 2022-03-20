import React from 'react';
import { Fragment } from 'react';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <div className="container">{children}</div>
    </Fragment>
  );
}
