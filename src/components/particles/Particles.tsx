import { PointMaterial, Points } from '@react-three/drei';
import { useRef } from 'react';

import * as THREE from 'three';
import Particle from './particle/Particle';

interface ParticlesProps {
  count: number;
  color: string;
}

const Particles = ({ count, color }: ParticlesProps) => {
  const pointsRef = useRef<THREE.Points | null>(null);

  const positions = Array.from({ length: count }, (i) => [
    THREE.MathUtils.randFloatSpread(2),
    THREE.MathUtils.randFloatSpread(2),
    THREE.MathUtils.randFloatSpread(4),
  ]);

  return (
    <Points limit={positions.length} ref={pointsRef}>
      <PointMaterial
        vertexColors
        size={10}
        sizeAttenuation={false}
        depthWrite={false}
        transparent
        opacity={1}
      />
      {positions.map((position, i) => {
        return <Particle key={i} color={color} position={position} />;
      })}
    </Points>
  );
};

export default Particles;
