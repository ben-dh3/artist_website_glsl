/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useCallback, useEffect, useState } from "react";
import { Vector2, Color } from "three";
import { useAspect } from "@react-three/drei";

import vertexShader from "../assets/shaders/vertexShader.glsl";
import fragmentShader from "../assets/shaders/fragmentShader.glsl";

const Fragment = () => {
  const mesh = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });

  const updateMousePosition = useCallback((e) => {
    mousePosition.current = { x: e.pageX, y: e.pageY };
  }, []);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_mouse: { value: new Vector2(0, 0) },
      u_colorA: { value: new Color("#24FF00") },
      u_colorB: { value: new Color("#D0011B") },
      u_colorC: { value: new Color("#0029FF") },
    }), []
  );

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition, false);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition, false);
    };
  }, [updateMousePosition]);

  useFrame((state) => {
    const { clock } = state;

    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    mesh.current.material.uniforms.u_mouse.value = new Vector2(
      mousePosition.current.x,
      mousePosition.current.y
    );
  });

  const size = useAspect(1800, 1000)

  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={size}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const ShaderBackground = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <Canvas camera={{ position: [0.0, 0.0, 1.0] }}>
      <Fragment />
    </Canvas>
  );
};

export default ShaderBackground;
