import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../mise/config';

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    // eslint-disable-next-line no-template-curly-in-string
    apiGet('/shows/${id}?embed[]=seasons&embed[]=cast')
      .then(results => {
        if (isMounted) {
          setShow(results);
          setisLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message);
          setisLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);

  // eslint-disable-next-line no-console
  console.log('show', show);

  if (isLoading) {
    return <div>Date iss being loaded</div>;
  }

  if (error) {
    return <div>Error Occured:(error;)</div>;
  }
  return <div>ffxx</div>;
};

export default Show;
