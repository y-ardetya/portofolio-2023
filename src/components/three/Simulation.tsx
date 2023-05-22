import { Physics, RigidBody } from "@react-three/rapier";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";

const Wall = ({ ...props }) => {
  const { viewport } = useThree();
  return (
    <>
      <RigidBody type="fixed" restitution={0.5} friction={0}>
        <mesh scale={[viewport.width / 3, viewport.width / 3, 1]} {...props}>
          <boxGeometry args={[1, 1, 0.2]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      </RigidBody>
    </>
  );
};

const Simulation = () => {
  const $ball = useRef<any>();

  const cubeJump = () => {
    $ball.current.applyImpulse({ x: 0, y: 1, z: 0 });
  };

  return (
    <Physics gravity={[0, -1.6, 0]}>
      //*ball
      <RigidBody colliders="ball" ref={$ball} restitution={0.5}>
        <mesh position={[0, 1, 0]} rotation={[0, 0, 0]} onClick={cubeJump}>
          <sphereGeometry args={[0.3]} />
          <meshBasicMaterial color="hotpink" />
        </mesh>
      </RigidBody>
      //! WALLS //* Floor
      <Wall position={[0, -2.4, 1]} rotation={[-Math.PI / 2, 0, 0]} />
      //* Roof
      <Wall position={[0, 2.4, 1]} rotation={[-Math.PI / 2, 0, 0]} />
      //* Left Wall
      <Wall position={[-2.3, 0, 1]} rotation={[0, Math.PI / 2, 0]} />
      //* Right Wall
      <Wall position={[2.3, 0, 1]} rotation={[0, -Math.PI / 2, 0]} />
      //* Back Wall
      <Wall position={[0, 0, -1.4]} rotation={[0, 0, 0]} />
      //* Front Wall
      <Wall position={[0, 0, 3.4]} rotation={[0, 0, 0]} />
    </Physics>
  );
};

export default Simulation;
