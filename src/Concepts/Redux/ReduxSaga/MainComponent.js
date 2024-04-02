// MyComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from './actions';

const MainComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  // useEffect(() => {
  //   dispatch(fetchDataRequest());
  // }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <button onClick={()=> dispatch(fetchDataRequest())}>button</button>
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MainComponent;

