"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  ScrollControls,
  Scroll,
  Center,
} from "@react-three/drei";
import Experience from "./Experience";
import Container from "../react/Container";
import Simulation from "./Simulation";

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3}>
        {/* <Experience /> */}
        <Scroll>
          <Simulation />
        </Scroll>
        <Scroll>
          <Center></Center>
        </Scroll>
        <Scroll html>
          <Container />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default Scene;
