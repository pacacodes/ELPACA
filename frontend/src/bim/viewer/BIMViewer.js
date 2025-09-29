import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, Environment } from '@react-three/drei';
// import { IFCLoader } from 'web-ifc-three'; // For future IFC loading

/**
 * BIMViewer
 * 3D scene for BIM models. Modular, IP-clear, and decoupled from app UI.
 */
export default function BIMViewer() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: 400, background: '#222' }}>
      <Canvas camera={{ position: [10, 10, 10], fov: 45 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 20, 10]} intensity={1.2} castShadow />
        <Grid args={[100, 100]} cellColor="#444" sectionColor="#888" fadeDistance={40} />
        <Environment preset="city" />
        {/* IFC model(s) will be loaded here in future */}
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
