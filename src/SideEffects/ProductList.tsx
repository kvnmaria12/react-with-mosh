import { useEffect, useState } from 'react';

interface Props {
  category: string;
}

const ProductList = ({ category }: Props) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log(`Fetching Product in ${category}`);
    setProducts(['Clothing', 'HouseHold']);
  }, [category]);

  return (
    <div>
      {products.map((list, index) => (
        <h2 key={index}>{list}</h2>
      ))}
    </div>
  );
};

export default ProductList;
