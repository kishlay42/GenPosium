/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Usables/Loader";

// Preload the Draco-compressed model for faster loading
useGLTF.preload("./lotus/scene-draco.gltf");

const Lotus = () => {
  // Load Draco-compressed model
  const lotus = useGLTF("./lotus/scene-draco.gltf", true);

  // Ensure materials & shadows work correctly
  lotus.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.needsUpdate = true;
    }
  });

  return (
    <mesh>
      {/* Original Lighting Setup */}
      <hemisphereLight intensity={1.5} groundColor="pink" />
      <directionalLight color="white" position={[5, 10, 0]} intensity={1.5} />
      <directionalLight color="red" position={[5, -10, 0]} intensity={4.5} />
      <directionalLight color="red" position={[0, 0, -9]} intensity={2.5} />
      <directionalLight color="red" position={[0, 0, 9]} intensity={2.5} />
      <directionalLight color="purple" position={[0, 10, 0]} intensity={11.5} />
      <directionalLight color="purple" position={[0, 4, 5]} intensity={11.5} />
      <directionalLight color="orange" position={[0, -2, 0]} intensity={3.5} />
      <directionalLight color="pink" position={[0, -2, 0]} intensity={3.5} />

      {/* Spot Light */}
      <spotLight
        position={[-30, 10, 10]}
        angle={0.5}
        penumbra={0.5}
        intensity={1.9}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Load Lotus Model */}
      <primitive
        object={lotus.scene}
        scale={1.8} // Reduced from 3.1 to 2.5
        position={[0.1, -1.8, -1.0]} // Slightly adjusted position
        rotation={[-0.05, 1.2, 0]}
      />
    </mesh>
  );
};

const LotusCanvas = () => {
  return (
    <Canvas
      style={{ width: "47vw", height: "60vh" ,cursor: "grab" }} // Set the height to 60vh
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 10, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.5} 
          minPolarAngle={Math.PI / 2.5} 
          target={[0, -1.5, -1.0]} 
        />
        <Lotus />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default LotusCanvas;
