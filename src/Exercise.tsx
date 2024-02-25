import { useState } from 'react';

const Exercise = () => {
  // exercise1
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
    },
  });

  const handleClickEx1 = () => {
    setGame({ ...game, player: { ...game.player, name: 'Kvn' } });
  };

  //   exercise2
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom'],
  });

  const handleClickEx2 = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, 'Cheese'] });
  };

  //   Exercise 3

  const [cart, setCart] = useState({
    discount: 1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      {
        id: 2,
        title: 'Product 2',
        quantity: 2,
      },
    ],
  });

  const handleClickEx3 = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id == 2 ? { ...item, quantity: 2 } : item
      ),
    });
  };

  return (
    <div>
      <h1>{game.player.name}</h1>
      <button onClick={handleClickEx1}>Change Player</button>
    </div>
  );
};

export default Exercise;
