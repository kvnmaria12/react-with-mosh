import { useState } from 'react';

type Drink = {
  title: string;
  price: number;
};

const Drink = () => {
  const [drink, setDrink] = useState<Drink>({
    title: 'Hennessy',
    price: 500,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 45 });
  };

  return (
    <div>
      <button onClick={handleClick}>Change Price</button>
      <h1>Drink Name : {drink.title}</h1>
      <h2>Drink Price: {drink.price}</h2>
    </div>
  );
};

export default Drink;
