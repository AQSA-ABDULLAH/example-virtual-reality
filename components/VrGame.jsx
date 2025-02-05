import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function VRGame() {
  const cubeRef = useRef();

  return (
    <div className="h-screen w-screen">
    
      <Canvas style={{ width: '100vw', height: '100vh' }}>
   
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <mesh ref={cubeRef} position={[0, 1, -3]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="blue" />
          </mesh>
          
          <OrbitControls />
       
      </Canvas>
    </div>
  );
}
