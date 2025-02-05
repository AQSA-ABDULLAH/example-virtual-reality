import { Canvas, useFrame } from '@react-three/fiber';
import React, { useState, useEffect, useRef } from 'react';

// Rotating Torus Knot Component based on Mouse Movement
function RotatingTorusKnot({ mousePosition }) {
  const torusKnotRef = useRef();

  // Rotate the Torus Knot based on mouse position
  useFrame(() => {
    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.x = mousePosition.y * 0.05;
      torusKnotRef.current.rotation.y = mousePosition.x * 0.05;
    }
  });

  return (
    <mesh ref={torusKnotRef}>
      <torusKnotGeometry args={[1, 0.4, 100, 16]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
}

function TourKnot() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update mouse position on mouse move
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 8 - 1; // Normalize between -1 and 1
      const y = -(event.clientY / window.innerHeight) * 8 + 1; // Normalize between -1 and 1
      setMousePosition({ x, y });
    };

    // Attach event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      {/* Add lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      {/* 3D Torus Knot with mouse movement */}
      <RotatingTorusKnot mousePosition={mousePosition} />
    </Canvas>
  );
}

export default TourKnot;

