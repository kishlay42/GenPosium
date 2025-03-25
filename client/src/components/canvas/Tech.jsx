/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Usables/Loader";

const Tech = () => {
  const tech = useGLTF("./tech/scene-draco.gltf");

  return (
    <mesh>
      {/* Ambient light to give overall brightness */}
      <ambientLight intensity={1.5} color={"#ffccff"} />

      {/* Soft pink and purple directional lights */}
      <directionalLight position={[5, 10, 5]} intensity={3} color={"#ff99ff"} />
      <directionalLight
        position={[-5, 8, -5]}
        intensity={2.5}
        color={"#cc99ff"}
      />

      {/* Point lights to highlight the green earth with cloud effects */}
      <pointLight position={[0, -5, 0]} intensity={1.5} color={"#66ff99"} />
      <pointLight position={[5, 5, 5]} intensity={2} color={"#ffffcc"} />

      {/* Spotlight for enhanced contrast */}
      <spotLight
        position={[-10, 15, 10]}
        angle={0.3}
        intensity={3}
        color={"#ffffff"}
        castShadow
      />

      {/* Downward shadow effect */}
      <directionalLight
        position={[0, -10, 0]}
        intensity={1}
        color={"#333333"}
      />

      <primitive object={tech.scene} scale={1.6} position={[2.1, -56.2, 1.8]} />
    </mesh>
  );
};

const TechCanvas = () => {
  return (
    <Canvas
      style={{ width: "30vw", height: "70vh",cursor:"grab"}} // Set the height to 70vh
      frameloop="always" // Ensure continuous rotation
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 35,
        position: [0, 250, 0],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1} // Adjust speed for smoother rotation
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
