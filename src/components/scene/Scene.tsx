import { ReactNode } from 'react';

interface SceneProps {
  children: ReactNode;
  gridHelper: boolean;
  axesHelper: boolean;
}

const Scene = ({ children, gridHelper, axesHelper }: SceneProps) => {
  return (
    <>
      <ambientLight />
      {axesHelper ? (
        <axesHelper position={[0, 0, 0]} rotation={[0, 0, 0]} />
      ) : null}
      {gridHelper ? <gridHelper position={[0, -1, 0]} scale={1} /> : null}
      <pointLight intensity={1.0} position={[5, 3, 5]} />
      {children}
    </>
  );
};

export default Scene;
