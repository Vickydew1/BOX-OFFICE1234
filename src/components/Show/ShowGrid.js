/* eslint-disable camelcase */
import React from 'react';
import ShowCard from './ShowCard';

// eslint-disable-next-line camelcase
import Image_not_found from '../../image/not-found.png';

const ShowGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : Image_not_found}
          summary={show.summary}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
