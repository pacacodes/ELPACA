import React, { useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import drawWall from '../../actions/Bottom Action Container/toolbox/Inorganic Objects/Wall/DrawWall';
import { ViewerProvider, ViewerContext } from '../../Navigation/views/ViewerContext';

/**
 * BIMViewer
 * 3D scene for BIM models. Modular, IP-clear, and decoupled from app UI.
 */
export default function BIMViewer({ file }) {
  const { wallDimensions } = useContext(ViewerContext);

  React.useEffect(() => {
    if (file) {
      console.log('Rendering file:', file);
      // Placeholder: Add logic to parse and render the .pln file
    }
  }, [file]);

  const handleCanvasClick = (event) => {
    if (wallDimensions) {
      const { height, width } = wallDimensions;
      const [x, y, z] = [event.point.x, 0, event.point.z]; // Example position
      console.log(`Stamping wall at (${x}, ${y}, ${z}) with dimensions:`, { height, width });
      drawWall(height, width, { x, y, z });
    }
  };

  return (
    <ViewerProvider>
      <div style={{ width: '100%', height: '100%', minHeight: 400, background: '#fbfaf5' }}>
        <Canvas
          camera={{ position: [10, 10, 10], fov: 45 }}
          shadows
          style={{ background: '#fbfaf5' }}
          onClick={handleCanvasClick}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 20, 10]} intensity={1.2} castShadow />
          <Grid args={[100, 100]} cellColor="#e0e0e0" sectionColor="#cccccc" fadeDistance={40} />
          <OrbitControls makeDefault />
          {/* Simple Cube */}
          <mesh position={[0, 1, 0]} castShadow receiveShadow>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#ADD8E6" />
          </mesh>
        </Canvas>
      </div>
    </ViewerProvider>
  );
}
