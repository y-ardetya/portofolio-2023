import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { FlagMaterial } from "./FlagMaterial";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      flagMaterial: any;
    }
  }
}

interface FlagMaterialProps {
  uTime: number;
}

const ShaderPlane = () => {
  const $ref = useRef<FlagMaterialProps>();
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if ($ref.current !== undefined) {
      $ref.current.uTime += delta;
    } else {
      console.log("uTime uniform error");
    }
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <flagMaterial ref={$ref} key={FlagMaterial.key} />
    </mesh>
  );
};

const Experience = () => {
  return (
    <>
      <ShaderPlane />
    </>
  );
};

export default Experience;
