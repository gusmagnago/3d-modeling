import { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { useControls } from 'leva';

import Scene from '../scene/Scene';
import Box from '../box/Box';

const Content = () => {
  const options = useMemo(() => {
    return {
      axesHelper: true,
      gridHelper: true,
      wireframe: true,
      darkMode: false,
      transparency: true,
      opacity: { value: 100, min: 0, max: 100 },
      particles: { value: 10000, min: 0, max: 10000 },
      color: { value: '#0000ff' },
      particlesColor: {
        label: 'Particles',
        value: '#ff0000',
      },
    };
  }, []);

  const {
    axesHelper,
    gridHelper,
    wireframe,
    color,
    darkMode,
    opacity,
    particles,
    transparency,
    particlesColor,
  } = useControls('Settings', options);

  return (
    <>
      <Canvas
        camera={{
          position: [5, 5, 5],
        }}
        frameloop='demand'
      >
        <Suspense fallback={null}>
          <color
            attach='background'
            args={[darkMode ? '#2b2b38' : '#e2e2e2']}
          />
          <Scene gridHelper={gridHelper} axesHelper={axesHelper}>
            <Box
              scale={1.5}
              wireframe={wireframe}
              color={color}
              particlesCount={particles}
              opacity={opacity}
              transparency={transparency}
              particlesColor={particlesColor}
            />
          </Scene>
          <Preload all />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default Content;
