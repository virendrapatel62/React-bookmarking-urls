import faker from '@faker-js/faker';
import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About Component</h1>
      {new Array(4).fill().map(() => (
        <p>{faker.lorem.paragraphs(2)}</p>
      ))}
    </div>
  );
}
