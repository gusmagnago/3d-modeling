import { useMemo, useRef } from 'react';

import * as THREE from 'three';

interface ParticlesProps {
  count: number;
  color: string;
}

const Particles = ({ count, color }: ParticlesProps) => {
  const pointsRef = useRef<THREE.Points | null>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      let x = (Math.random() - 0.5) * 2;
      let y = (Math.random() - 0.5) * 2;
      let z = (Math.random() - 0.5) * 4;

      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [count]);

  return (
    <points ref={pointsRef}>
      <bufferGeometry attach='geometry'>
        <bufferAttribute
          attach='attributes-position'
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
          normalized={false}
        />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.05} />
    </points>
  );
};

export default Particles;
