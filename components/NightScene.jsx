'use client';
import 'aframe';
import { useEffect } from 'react';

export default function NightScene() {
  useEffect(() => {
    // Optional: Custom JavaScript logic if needed
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <a-scene background="color: #0b1a3d">
        {/* Moon */}
        <a-sphere position="0 4 -10" radius="1.5" color="#f0e68c" 
          light="type: point; intensity: 1; distance: 10; color: #ffffff"></a-sphere>

        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <a-sphere key={i} position={`${Math.random() * 20 - 10} ${Math.random() * 10 + 2} ${Math.random() * -20}`} 
                    radius="0.1" color="#ffffff"></a-sphere>
        ))}

        {/* Ground */}
        <a-plane rotation="-90 0 0" width="20" height="20" color="#1b263b"></a-plane>

        {/* Some glowing objects */}
        <a-box position="-3 1.5 -5" depth="1" height="1" width="1" color="#ff4500"
               animation="property: rotation; to: 0 360 0; loop: true; dur: 4000"></a-box>
        <a-cylinder position="3 1 -6" radius="0.7" height="2" color="#00ffcc" 
                    animation="property: position; to: 3 2 -6; dir: alternate; loop: true; dur: 2000"></a-cylinder>

        {/* Camera */}
        <a-entity position="0 1.6 4">
          <a-camera>
            <a-cursor></a-cursor>
          </a-camera>
        </a-entity>
      </a-scene>
    </div>
  );
}
