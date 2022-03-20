import React from 'react';
import faker from '@faker-js/faker';

export default function Profile() {
  return (
    <div>
      <h1>Profile Component..</h1>

      {new Array(4).fill().map(() => (
        <p>{faker.lorem.paragraphs(2)}</p>
      ))}
    </div>
  );
}
