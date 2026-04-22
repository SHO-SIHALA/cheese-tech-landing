import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const Particles = ({ count = 250 }: { count?: number }) => {
  const mesh = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * viewport.width * 3;
      pos[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 3;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return pos;
  }, [count, viewport]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = clock.getElapsedTime() * 0.02;
    mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#7c6aef" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const FloatingOrb = ({ position, color, speed = 1 }: {
  position: [number, number, number]; color: string; speed?: number;
}) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = clock.getElapsedTime() * 0.2 * speed;
    mesh.current.rotation.z = clock.getElapsedTime() * 0.1 * speed;
    const s = hovered ? 1.2 : 1;
    mesh.current.scale.lerp(new THREE.Vector3(s, s, s), 0.1);
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh
        ref={mesh}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1.3, 4]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.3}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
};

const WireframeShape = () => {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock, pointer }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.008;
    mesh.current.position.x = -2.5 + pointer.x * 0.3;
    mesh.current.position.y = 0.5 + pointer.y * 0.3;
    const s = hovered ? 1.2 : 1;
    mesh.current.scale.lerp(new THREE.Vector3(s, s, s), 0.1);
  });

  return (
    <mesh
      ref={mesh}
      position={[-2.5, 0.5, -1]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[0.8, 1]} />
      <meshStandardMaterial
        color="#a78bfa"
        emissive="#a78bfa"
        emissiveIntensity={hovered ? 0.7 : 0.25}
        wireframe
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

const TorusShape = () => {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = clock.getElapsedTime() * 0.15;
    mesh.current.rotation.y = clock.getElapsedTime() * 0.1;
    const s = hovered ? 1.15 : 1;
    mesh.current.scale.lerp(new THREE.Vector3(s, s, s), 0.1);
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={1}>
      <mesh
        ref={mesh}
        position={[2.5, -0.5, -1]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <torusGeometry args={[1.2, 0.15, 32, 64]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={hovered ? 0.6 : 0.2}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
};

const MouseLight = () => {
  const light = useRef<THREE.PointLight>(null);
  useFrame(({ pointer }) => {
    if (!light.current) return;
    light.current.position.x = pointer.x * 5;
    light.current.position.y = pointer.y * 3;
  });
  return <pointLight ref={light} intensity={2} color="#7c6aef" distance={12} />;
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.15} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} color="#e0d4ff" />
        <MouseLight />
        <FloatingOrb position={[0, 0, 0]} color="#7c6aef" speed={0.8} />
        <TorusShape />
        <WireframeShape />
        <Particles count={250} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
