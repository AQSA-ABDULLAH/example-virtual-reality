import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Leva, useControls } from 'leva';

// Rotating Torus Knot Component based on Leva controls
function RotatingTorusKnot() {
  const torusKnotRef = useRef();
  const { rotationSpeed, color } = useControls({
    rotationSpeed: { value: 0.01, min: 0, max: 0.1, step: 0.001 },
    color: { value: '#ff6347' },
  });

  // Rotate the Torus Knot based on the rotation speed from Leva
  useFrame(() => {
    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.x += rotationSpeed;
      torusKnotRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh ref={torusKnotRef}>
      <torusKnotGeometry args={[1.8, 0.1, 90, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function TourKnot() {
  return (
    <>
      <Leva /> {/* Add Leva UI to control parameters */}
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        {/* Add lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} intensity={1} />

        {/* 3D Torus Knot */}
        <RotatingTorusKnot />
      </Canvas>
    </>
  );
}

export default TourKnot;
