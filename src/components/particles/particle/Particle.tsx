import { Point } from '@react-three/drei';

interface ParticleProps {
  color: string;
  position: number[] | [x: number, y: number, z: number];
}

const Particle = ({ color, position, ...props }: ParticleProps) => {
  return (
    <Point
      {...props}
      color={color}
      position={position as [x: number, y: number, z: number]}
    />
  );
};

export default Particle;
