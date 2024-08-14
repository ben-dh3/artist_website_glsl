/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";

import vertexShader from "../assets/shaders/vertexShader.glsl";
import fragmentShader from "../assets/shaders/fragmentShader.glsl";

const Fragment = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={100.0}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
    </mesh>
  );
};

const ShaderBackground = () => {
  return (
    <Canvas camera={{ position: [0.0, 0.0, 100.0] }}>
      <Fragment />
    </Canvas>
  );
};


export default ShaderBackground;
