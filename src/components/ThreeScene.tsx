"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Sparkles, TorusKnot } from "@react-three/drei";
import * as THREE from "three";

function SolidDataCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <TorusKnot ref={meshRef} args={[1.8, 0.5, 256, 64]} scale={1.2}>
        <meshPhysicalMaterial
          color="#0ea5e9"
          emissive="#0284c7"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0}
          envMapIntensity={2}
        />
      </TorusKnot>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
      <ambientLight intensity={1.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.2}
        penumbra={1}
        intensity={3}
        color="#ffffff"
      />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#059669" />
      <Environment preset="city" />
      <SolidDataCore />
      <Sparkles
        count={300}
        scale={15}
        size={4}
        speed={0.2}
        opacity={0.6}
        color="#059669"
      />
      <Sparkles
        count={200}
        scale={15}
        size={3}
        speed={0.4}
        opacity={0.6}
        color="#0ea5e9"
      />
    </Canvas>
  );
}
