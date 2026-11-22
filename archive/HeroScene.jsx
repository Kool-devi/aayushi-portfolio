'use client';
import React, { Suspense, useRef, useMemo, useState, useEffect, useLayoutEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, MeshTransmissionMaterial, Center } from '@react-three/drei';
import { configureTextBuilder } from 'troika-three-text';
import * as THREE from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

configureTextBuilder({ useWorker: false });

const ACCENT_BG = '#FF5900';
const HERO_TEXT = '#111111';
const TEXT_DEPTH = -2;
const ARROW_DEPTH = 1.5;
// Share of the visible width the widest headline line may fill.
const TEXT_FIT = 0.9;
// Scroll parallax, as multiples of page scroll speed. Both stay above 1 so the
// content outruns the edge of the next section as it slides over the pinned
// canvas, instead of being cut off by it.
const TEXT_SPEED = 1.3;
const ARROW_SPEED = 1.15;

function readTheme(node) {
  const styles = getComputedStyle(node);
  return {
    bg: styles.getPropertyValue('--color-accent').trim() || ACCENT_BG,
    text: HERO_TEXT,
  };
}

function ThemeBackground({ color }) {
  const { scene } = useThree();

  useLayoutEffect(() => {
    scene.background = new THREE.Color(color);
  }, [scene, color]);

  return null;
}

const ARROW_CORNER_RADIUS = 0.45;

function roundedShape(points, radius) {
  const shape = new THREE.Shape();
  const n = points.length;

  const corner = (i) => {
    const [px, py] = points[(i - 1 + n) % n];
    const [cx, cy] = points[i];
    const [nx, ny] = points[(i + 1) % n];
    const inLen = Math.hypot(cx - px, cy - py);
    const outLen = Math.hypot(nx - cx, ny - cy);
    const r = Math.min(radius, inLen / 2, outLen / 2);
    return {
      start: [cx + ((px - cx) / inLen) * r, cy + ((py - cy) / inLen) * r],
      ctrl: [cx, cy],
      end: [cx + ((nx - cx) / outLen) * r, cy + ((ny - cy) / outLen) * r],
    };
  };

  const first = corner(0);
  shape.moveTo(...first.end);
  for (let i = 1; i <= n; i++) {
    const c = i === n ? first : corner(i);
    shape.lineTo(...c.start);
    shape.quadraticCurveTo(...c.ctrl, ...c.end);
  }
  return shape;
}

function GlassArrow({ scale }) {
  const meshRef = useRef();

  const geometry = useMemo(() => {
    const shape = roundedShape([
      [-1.6, 2.8],
      [0.4, 0],
      [-1.6, -2.8],
      [0.8, -2.8],
      [2.8, 0],
      [0.8, 2.8],
    ], ARROW_CORNER_RADIUS);

    const extruded = new THREE.ExtrudeGeometry(shape, {
      depth: 1.1,
      bevelEnabled: true,
      bevelThickness: 0.4,
      bevelSize: 0.32,
      // Keeps the silhouette the same size as before the softer bevel.
      bevelOffset: -0.32,
      bevelSegments: 20,
      curveSegments: 20,
    });

    // Welding vertices lets normals blend across cap/bevel seams instead of creasing.
    extruded.deleteAttribute('normal');
    extruded.deleteAttribute('uv');
    const smooth = mergeVertices(extruded, 1e-4);
    smooth.computeVertexNormals();
    extruded.dispose();
    return smooth;
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);

  const invalidate = useThree((state) => state.invalidate);

  // frameloop="demand" never wakes on pointer movement by itself.
  useEffect(() => {
    const wake = () => invalidate();
    window.addEventListener('pointermove', wake, { passive: true });
    return () => window.removeEventListener('pointermove', wake);
  }, [invalidate]);

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
    <Center position={[0, 0, ARROW_DEPTH]}>
      <mesh ref={meshRef} scale={0.7 * scale} geometry={geometry}>
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

function Typography({ color, scale, onMeasure }) {
  const fontUrl = 'https://fonts.gstatic.com/s/archivo/v25/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTnTRp8A.ttf';

  const measure = (text) => {
    const bounds = text.textRenderInfo?.blockBounds;
    if (bounds) onMeasure(bounds[2] - bounds[0]);
  };

  return (
    <group position={[0, 0, TEXT_DEPTH]} scale={scale}>
      <Text position={[0, 2.2, 0]} fontSize={2.4} letterSpacing={-0.03} font={fontUrl} onSync={measure}>
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

// Scales headline and arrow together so the widest line ("INNOVATE")
// always fits the visible width at its depth; never scales above 1.
function HeroContent({ color }) {
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef();
  const arrowRef = useRef();
  const viewport = useThree((state) => state.viewport);
  const camera = useThree((state) => state.camera);
  const size = useThree((state) => state.size);
  const invalidate = useThree((state) => state.invalidate);

  const textView = viewport.getCurrentViewport(camera, [0, 0, TEXT_DEPTH]);
  const arrowView = viewport.getCurrentViewport(camera, [0, 0, ARROW_DEPTH]);
  const scale = textWidth ? Math.min(1, (textView.width * TEXT_FIT) / textWidth) : 1;
  // World units per CSS pixel at each layer's depth.
  const textUnit = textView.height / size.height;
  const arrowUnit = arrowView.height / size.height;

  useEffect(() => {
    const wake = () => invalidate();
    window.addEventListener('scroll', wake, { passive: true });
    return () => window.removeEventListener('scroll', wake);
  }, [invalidate]);

  useFrame(() => {
    const y = window.scrollY;
    if (textRef.current) textRef.current.position.y = y * TEXT_SPEED * textUnit;
    if (arrowRef.current) arrowRef.current.position.y = y * ARROW_SPEED * arrowUnit;
  });

  return (
    <>
      <group ref={textRef}>
        <Suspense fallback={null}>
          <Typography color={color} scale={scale} onMeasure={setTextWidth} />
        </Suspense>
      </group>
      <group ref={arrowRef}>
        <GlassArrow scale={scale} />
      </group>
    </>
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
  const [theme, setTheme] = useState({ bg: ACCENT_BG, text: HERO_TEXT });
  const [frameloop, setFrameloop] = useState('demand');

  useLayoutEffect(() => {
    const node = rootRef.current;
    if (node) setTheme(readTheme(node));

    let onScreen = true;
    let mode = 'demand';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const setMode = (next) => {
      if (mode === next) return;
      mode = next;
      setFrameloop(next);
    };

    // Rendering stops once the hero is mostly covered; by then the parallax
    // has already carried the headline and arrow off the top of the screen.
    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.intersectionRatio >= 0.15;
      setMode(!onScreen || reduced ? 'never' : 'demand');
    }, { threshold: [0, 0.15, 0.5] });

    if (node) observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="theme-dark hero-scene" data-theme="dark" data-frameloop={frameloop}>
      <div className="hero-scene-pin">
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

        <HeroContent color={theme.text} />
      </Canvas>
      </div>
    </div>
  );
}
