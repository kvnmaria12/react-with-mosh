import { useState } from 'react';

const MutatingExmpls = () => {
  const [names, setNames] = useState(['kvn', 'daniel', 'viji']);

  const handleClickArrays = () => {
    // Add
    setNames([...names, 'jesus', 'david']);

    // Remove
    setNames(names.filter((name) => name != 'david'));
  };

  // with objects
  const [info, setInfo] = useState({ name: 'kevin', age: 23, sex: 'M' });

  const handleClickObjects = () => {
    setInfo({ ...info, age: 24 });
  };

  // with nested object(prefer not to use)
  const [nestedInfo, setNestedInfo] = useState({
    name: 'Kvn',
    age: 23,
    address: {
      street: 'therespuram',
      zipCode: 560074,
    },
  });

  const handleClickNestedObject = () => {
    setNestedInfo({
      ...nestedInfo,
      address: { ...nestedInfo.address, zipCode: 560073 },
    });
  };

  return (
    <div>
      {names.map((name) => (
        <li>{name}</li>
      ))}
      <button onClick={handleClickArrays}>Remove David</button>
    </div>
  );
};

export default MutatingExmpls;
