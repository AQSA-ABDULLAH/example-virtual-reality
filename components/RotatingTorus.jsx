import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function RotatingTorus({ position, radius, tube, color }) {
  const torusRef = useRef();

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={torusRef} position={position}>
      <torusGeometry args={[radius, tube, 16, 100]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default RotatingTorus;
