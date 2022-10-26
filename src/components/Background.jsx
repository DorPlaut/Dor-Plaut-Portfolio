import React from 'react';
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';

const angleToRadians = (angelInDeg) => (Math.PI / 180) * angelInDeg;

function Background({ rotationSpeed }) {
  return (
    <div className="canvas-container">
      <Canvas>
        {/* camera */}
        <PerspectiveCamera makeDefault position={[0, 0, -80]} />
        <OrbitControls
          autoRotate={true}
          enablePan={false}
          enableZoom={false}
          autoRotateSpeed={rotationSpeed}
        />

        {/* model */}
        <mesh position={[0, 0, 0]} receiveShadow>
          <torusKnotGeometry args={[23, 10, 80, 10]} />
          <meshStandardMaterial
            wireframe={true}
            transparent={true}
            opacity={0.5}
          />
        </mesh>
        {/* light */}
        <hemisphereLight args={[0xffffff, 0x000000, 0.2]} />
        <spotLight
          args={['#FFFFFF', 3, 20, angleToRadians(90), 0.5]}
          position={[0, 10, 0]}
          castShadow
        />
      </Canvas>
    </div>
  );
}

export default Background;
