import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function RotatingSphere({ position, radius, color }) {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.01;
      sphereRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={sphereRef} position={position}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default RotatingSphere;
