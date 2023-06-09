import { useRef } from 'react';
import { Mesh } from 'three';

import Particles from '../particles/Particles';

interface BoxProps {
  scale: number;
  wireframe: boolean;
  color: string;
  particlesCount: number;
  opacity: number;
  transparency: boolean;
  particlesColor: string;
}

const Box = ({
  scale,
  wireframe,
  color,
  particlesCount,
  opacity,
  transparency,
  particlesColor,
  ...props
}: BoxProps) => {
  const meshRef = useRef<Mesh | null>(null);
  const boxSize = 2.05;

  const opacityValue = opacity / 100;

  return (
    <>
      <mesh {...props} ref={meshRef} scale={scale} position={[0, 0.5, 0]}>
        <boxGeometry args={[boxSize, boxSize, boxSize * 2]} />
        <meshStandardMaterial
          color={color}
          transparent={transparency}
          opacity={opacityValue}
          wireframe={wireframe}
          attach='material'
        />
        <Particles count={particlesCount} color={particlesColor} />
      </mesh>
    </>
  );
};

export default Box;
