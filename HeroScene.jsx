'use client';
import React, { Suspense, useRef, useMemo, useState, useLayoutEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, MeshTransmissionMaterial, Center } from '@react-three/drei';
import { configureTextBuilder } from 'troika-three-text';
import * as THREE from 'three';

configureTextBuilder({ useWorker: false });

const ACCENT_BG = '#FF4D00';
const DARK_TEXT = '#F7F7F7';

function readTheme(node) {
  const styles = getComputedStyle(node);
  return {
    bg: styles.getPropertyValue('--color-accent').trim() || ACCENT_BG,
    text: styles.getPropertyValue('--color-text-primary').trim() || DARK_TEXT,
  };
}

function ThemeBackground({ color }) {
  const { scene } = useThree();

  useLayoutEffect(() => {
    scene.background = new THREE.Color(color);
  }, [scene, color]);

  return null;
}

function GlassArrow() {
  const meshRef = useRef();

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-1, 2.8);
    s.lineTo(1, 0);
    s.lineTo(-1, -2.8);
    s.lineTo(0.2, -2.8);
    s.lineTo(2.2, 0);
    s.lineTo(0.2, 2.8);
    s.lineTo(-1, 2.8);
    return s;
  }, []);

  const extrudeSettings = useMemo(() => ({
    depth: 1.5,
    bevelEnabled: true,
    bevelThickness: 0.15,
    bevelSize: 0.1,
    bevelSegments: 8,
    curveSegments: 24,
  }), []);

  const invalidate = useThree((state) => state.invalidate);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const targetX = state.pointer.x * 0.25;
    const targetY = -(state.pointer.y * 0.25);
    mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, targetX, 0.05);
    mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, targetY, 0.05);
    if (
      Math.abs(mesh.rotation.y - targetX) > 0.001 ||
      Math.abs(mesh.rotation.x - targetY) > 0.001
    ) {
      invalidate();
    }
  });

  return (
    <Center position={[0, 0, 1.5]}>
      <mesh ref={meshRef} scale={[0.7, 0.7, 0.7]}>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <MeshTransmissionMaterial
          thickness={4}
          roughness={0}
          transmission={1}
          ior={1.8}
          chromaticAberration={0.1}
          backside={true}
          backsideThickness={2}
          distortion={0.8}
          distortionScale={0.5}
          samples={4}
          resolution={512}
        />
      </mesh>
    </Center>
  );
}

function Typography({ color, scale }) {
  const fontUrl = 'https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuBWYMZg.ttf';

  return (
    <group position={[0, 0, -2]} scale={scale}>
      <Text position={[0, 2.2, 0]} fontSize={2.4} letterSpacing={-0.03} font={fontUrl}>
        INNOVATE
        <meshBasicMaterial color={color} />
      </Text>
      <Text position={[0, 0, 0]} fontSize={2.4} letterSpacing={-0.03} font={fontUrl}>
        WITH
        <meshBasicMaterial color={color} />
      </Text>
      <Text position={[0, -2.2, 0]} fontSize={2.4} letterSpacing={-0.03} font={fontUrl}>
        PURPOSE
        <meshBasicMaterial color={color} />
      </Text>
    </group>
  );
}

function FrameKick({ active }) {
  const invalidate = useThree((state) => state.invalidate);

  useLayoutEffect(() => {
    if (active) invalidate();
  }, [active, invalidate]);

  return null;
}

export default function HeroScene() {
  const rootRef = useRef(null);
  const [theme, setTheme] = useState({ bg: ACCENT_BG, text: DARK_TEXT });
  const [scale, setScale] = useState(1);
  const [frameloop, setFrameloop] = useState('demand');

  useLayoutEffect(() => {
    const node = rootRef.current;
    if (node) setTheme(readTheme(node));

    const updateScale = () => {
      const width = window.innerWidth;
      setScale(Math.min(1, Math.max(0.52, width / 1100)));
    };

    updateScale();
    window.addEventListener('resize', updateScale);

    let onScreen = true;
    let scrollTimer = 0;
    let mode = 'demand';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const setMode = (next) => {
      if (mode === next) return;
      mode = next;
      setFrameloop(next);
    };

    const apply = (scrolling) => {
      setMode(!onScreen || reduced || scrolling ? 'never' : 'demand');
    };

    const onScroll = () => {
      apply(true);
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => apply(false), 120);
    };

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.intersectionRatio >= 0.15;
      apply(false);
    }, { threshold: [0, 0.15, 0.5] });

    if (node) observer.observe(node);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', updateScale);
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(scrollTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={rootRef} className="theme-dark hero-scene" data-theme="dark" data-frameloop={frameloop}>
      <Canvas
        frameloop={frameloop}
        dpr={[1, 1.25]}
        gl={{ antialias: false, powerPreference: 'high-performance', stencil: false }}
        camera={{ position: [0, 0, 12], fov: 35 }}
      >
        <FrameKick active={frameloop === 'demand'} />
        <ThemeBackground color={theme.bg} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={4} color="#F7F7F7" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#F7F7F7" />

        <Suspense fallback={null}>
          <Typography color={theme.text} scale={scale} />
        </Suspense>
        <GlassArrow />
      </Canvas>
    </div>
  );
}
