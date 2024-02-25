let count = 0;

const Message = () => {
  count++;
  return (
    <div>
      <h2>Message {count}</h2>
    </div>
  );
};

export default Message;
