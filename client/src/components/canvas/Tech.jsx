import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, meshBounds, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Usables/Loader";

const Tech = () => {
  const earth = useGLTF("./tech/scene.gltf");

  return (
    <mesh>
      <primitive
        object={earth.scene}
        scale={1.1}
        position-y={0}
        rotation-y={0}
      />
      <hemisphereLight intensity={1.7} groundColor="white" />
      <directionalLight color="white" position={[5, 10, 0]} intensity={1.5} />
      {/* <directionalLight color="green" position={[5, -10, 0]} intensity={4.5} /> */}
      {/* <directionalLight color="green" position={[0, 0, -9]} intensity={2.5} /> */}
      {/* <directionalLight color="green" position={[0, 0, 9]} intensity={0.5} /> */}
      <directionalLight color="purple" position={[0, 10, 0]} intensity={11.5} />
      <directionalLight color="purple" position={[0, 4, 5]} intensity={11.5} />
      <directionalLight color="black" position={[0, -2, 0]} intensity={5.5} />
      <directionalLight color="black" position={[0, -2, 0]} intensity={0.5} />
    </mesh>
  );
};

const TechCanvas = () => {
  return (
    <Canvas
      style={{ width: "60vw", height: "100vh",paddingTop:"100px" }} // Set the width to 100% of the viewport width
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 35,
        near: 0.1,
        far: 700,
        position: [0, 250, 0],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Tech />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default TechCanvas;
