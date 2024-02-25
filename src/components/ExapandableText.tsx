import { useState } from 'react';

interface Props {
  children: string;
  maxChars?: number;
}

const ExapandableText = ({ children, maxChars = 100 }: Props) => {
  const [readMore, setReadMore] = useState(false);

  const handleClick = () => {
    setReadMore((prev) => !prev);
  };

  return (
    <div>
      <p style={{ fontSize: '18px' }}>
        {readMore ? children : children.substring(0, maxChars ? maxChars : 100)}
        ...
        <button style={{ cursor: 'pointer' }} onClick={handleClick}>
          {readMore ? 'Read Less' : 'Read More'}
        </button>
      </p>
    </div>
  );
};

export default ExapandableText;
