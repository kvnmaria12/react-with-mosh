import { useEffect } from 'react';

const EffectCleanUp = () => {
  const connect = () => console.log('Connecting');
  const disConnect = () => console.log('Disconnecting');

  useEffect(() => {
    // document.title = 'Effect Clean Up ';

    connect();

    return () => disConnect();
  });

  return <div></div>;
};

export default EffectCleanUp;
