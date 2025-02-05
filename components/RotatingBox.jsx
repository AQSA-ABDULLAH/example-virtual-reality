import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function RotatingBox({ position, args, color }) {
  const meshRef = useRef();

  // Rotate the box on every frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default RotatingBox;
