import React, { FC } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';

const Home: FC = (): JSX.Element => {
  const auth = useTypedSelector((state) => state.user);
  return (
    <>
      {auth.isAuthenticated ? (
        <h1>Welcome Home {auth.firstName} !</h1>
      ) : (
        <h1>You have no permission to visit this site, pal</h1>
      )}
    </>
  );
};

export default Home;
