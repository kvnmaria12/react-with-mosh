import { useState } from 'react';
import ProductList from './ProductList';

const ProductListApp = () => {
  const [category, setCategory] = useState('');
  return (
    <div>
      <select
        className='form-select'
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=''></option>
        <option value='Clothing'>Clothing</option>
        <option value='HouseHold'>HouseHold</option>
      </select>
      <ProductList category={category} />
    </div>
  );
};

export default ProductListApp;
