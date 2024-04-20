import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Usables/Loader";
const Lotus = ({ isMobile }) => {
  const lotus = useGLTF("./lotus/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="pink" />
      <directionalLight color="white" position={[5, 10, 0]} intensity={1.5} />
      <directionalLight color="red" position={[5, -10, 0]} intensity={4.5} />
      <directionalLight color="red" position={[0, 0, -9]} intensity={2.5} />
      <directionalLight color="red" position={[0, 0, 9]} intensity={2.5} />
      <directionalLight color="purple" position={[0, 10, 0]} intensity={11.5} />
      <directionalLight color="purple" position={[0, 4, 5]} intensity={11.5} />
      <directionalLight color="orange" position={[0, -2, 0]} intensity={3.5} />
      <directionalLight color="pink" position={[0, -2, 0]} intensity={3.5} />

      <spotLight
        position={[-30, 10, 10]}
        angle={0.5}
        penumbra={0.5}
        intensity={1.9}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      {/* <pointLight position={[10, 10, 10]} intensity={0.5} color='orange' /> */}
      <primitive
        object={lotus.scene}
        scale={isMobile ? 0.9 : 3}
        position={isMobile ? [0, -2.5, -2] : [0, -2.75, -1.5]}
        rotation={isMobile ? [-0.05, -0.1, 0] : [-0.05, -0.2, 0]}
      />
    </mesh>
  );
};

const LotusCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      style={{ width: "40vw", height: "40vh", padding: "10px" }} // Set the width to 100% of the viewport width
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Lotus isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default LotusCanvas;
