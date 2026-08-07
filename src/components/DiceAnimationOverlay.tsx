import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import '../styles.css';

export type DieType = 'd20' | 'd12' | 'd10' | 'd8' | 'd6' | 'd4' | 'd100';

export type ActiveRollAnimation = {
  dieType: DieType;
  label: string;
  rolls: number[];
  finalResult: number;
  mod?: number;
  total?: number;
  crit?: 'crit' | 'fail' | '';
  rollDetails?: string[];
  onComplete: () => void;
};

type Props = {
  animationData: ActiveRollAnimation | null;
};

interface Particle {
  id: number;
  tx: number;
  ty: number;
  size: number;
  color: string;
  delay: number;
}

export const DiceAnimationOverlay: React.FC<Props> = ({ animationData }) => {
  const [displayNum, setDisplayNum] = useState<number>(1);
  const [isRolling, setIsRolling] = useState<boolean>(true);
  const [isImpact, setIsImpact] = useState<boolean>(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Keyboard shortcut listener to advance when settled
  useEffect(() => {
    if (!animationData || isRolling) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        e.preventDefault();
        animationData.onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [animationData, isRolling]);

  // Initialize Three.js 3D WebGL scene
  useEffect(() => {
    if (!animationData || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const width = 260;
    const height = 260;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lighting setup for rich dark fantasy ambiance
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffe5b4, 2.2);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xc9a227, 1.2);
    dirLight2.position.set(-5, -4, -3);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(
      animationData.crit === 'crit' ? 0xf59e0b : animationData.crit === 'fail' ? 0xef4444 : 0xc9a227,
      3,
      12
    );
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // Create 3D Polyhedral Geometry depending on DieType
    let geometry: THREE.BufferGeometry;
    const type = animationData.dieType;

    switch (type) {
      case 'd20':
        geometry = new THREE.IcosahedronGeometry(1.5, 0);
        break;
      case 'd12':
        geometry = new THREE.DodecahedronGeometry(1.5, 0);
        break;
      case 'd10':
      case 'd100':
        geometry = new THREE.OctahedronGeometry(1.5, 0);
        geometry.scale(1, 1.35, 1);
        break;
      case 'd8':
        geometry = new THREE.OctahedronGeometry(1.5, 0);
        break;
      case 'd6':
        geometry = new THREE.BoxGeometry(2, 2, 2);
        break;
      case 'd4':
        geometry = new THREE.TetrahedronGeometry(1.6, 0);
        break;
      default:
        geometry = new THREE.IcosahedronGeometry(1.5, 0);
    }

    // Material: Carved dark obsidian / antique leather with flat shading
    const dieMaterial = new THREE.MeshStandardMaterial({
      color: 0x1d1712,
      roughness: 0.3,
      metalness: 0.7,
      flatShading: true,
    });

    const dieMesh = new THREE.Mesh(geometry, dieMaterial);
    scene.add(dieMesh);

    // Wireframe / Brass Metallic Edge Lines
    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: animationData.crit === 'crit' ? 0xfbbf24 : animationData.crit === 'fail' ? 0xef4444 : 0xd4af37,
      linewidth: 2,
    });
    const wireframe = new THREE.LineSegments(edgesGeometry, lineMaterial);
    dieMesh.add(wireframe);

    // Animation Loop Variables
    let animationFrameId: number;
    let rollingActive = true;

    // Angular velocities for tumbling
    let rotXSpeed = 0.18 + Math.random() * 0.1;
    let rotYSpeed = 0.22 + Math.random() * 0.1;
    let rotZSpeed = 0.14 + Math.random() * 0.1;
    let bobTime = 0;

    const animate = () => {
      if (rollingActive) {
        dieMesh.rotation.x += rotXSpeed;
        dieMesh.rotation.y += rotYSpeed;
        dieMesh.rotation.z += rotZSpeed;

        // Oscillate height for 3D bounce
        bobTime += 0.08;
        dieMesh.position.y = Math.sin(bobTime) * 0.35;
        dieMesh.position.z = Math.cos(bobTime) * 0.25;

        // Slightly slow down rotation speed over time
        rotXSpeed *= 0.992;
        rotYSpeed *= 0.992;
        rotZSpeed *= 0.992;
      } else {
        // Settle smoothly to front facing angle
        dieMesh.rotation.x = THREE.MathUtils.lerp(dieMesh.rotation.x, 0.2, 0.15);
        dieMesh.rotation.y = THREE.MathUtils.lerp(dieMesh.rotation.y, 0, 0.15);
        dieMesh.rotation.z = THREE.MathUtils.lerp(dieMesh.rotation.z, 0, 0.15);
        dieMesh.position.y = THREE.MathUtils.lerp(dieMesh.position.y, 0, 0.2);
        dieMesh.position.z = THREE.MathUtils.lerp(dieMesh.position.z, 0.5, 0.2);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up Three.js WebGL context on unmount
    return () => {
      rollingActive = false;
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      dieMaterial.dispose();
      edgesGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, [animationData]);

  // Number Shuffle & Settlement Physics
  useEffect(() => {
    if (!animationData) return;

    setIsRolling(true);
    setIsImpact(false);
    setParticles([]);

    const dieMaxMap: Record<DieType, number> = {
      d20: 20, d12: 12, d10: 10, d8: 8, d6: 6, d4: 4, d100: 100
    };
    const maxVal = dieMaxMap[animationData.dieType] || 20;

    let delay = 35;
    let timeoutId: ReturnType<typeof setTimeout>;

    const rollStep = () => {
      setDisplayNum(Math.floor(Math.random() * maxVal) + 1);
      delay = Math.min(delay * 1.07, 130);
      timeoutId = setTimeout(rollStep, delay);
    };

    timeoutId = setTimeout(rollStep, delay);

    // Settle after 1100ms
    const timer = setTimeout(() => {
      clearTimeout(timeoutId);
      setDisplayNum(animationData.finalResult);
      setIsRolling(false);
      setIsImpact(true);

      // Particle Burst
      const isCrit = animationData.crit === 'crit';
      const isFail = animationData.crit === 'fail';
      const count = isCrit ? 32 : isFail ? 24 : 18;
      const palette = isCrit
        ? ['#f59e0b', '#fbbf24', '#fef08a', '#ffffff']
        : isFail
        ? ['#ef4444', '#b91c1c', '#7f1d1d', '#15130f']
        : ['#c9a227', '#e7dcc0', '#d4af37', '#f4e09a'];

      const newParticles: Particle[] = Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * 2 * Math.PI + (Math.random() - 0.5) * 0.4;
        const dist = 70 + Math.random() * 120;
        return {
          id: i,
          tx: Math.cos(angle) * dist,
          ty: Math.sin(angle) * dist,
          size: 4 + Math.random() * 7,
          color: palette[Math.floor(Math.random() * palette.length)],
          delay: Math.random() * 0.08,
        };
      });
      setParticles(newParticles);
      // Removed auto-close timer so user can review results at their pace
    }, 1100);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timer);
    };
  }, [animationData]);

  if (!animationData) return null;

  const isCrit = animationData.crit === 'crit';
  const isFail = animationData.crit === 'fail';

  return (
    <div className="dice-overlay" onClick={() => !isRolling && animationData.onComplete()}>
      <div
        className={`dice-modal ${isRolling ? 'rolling' : 'settled'} ${isImpact ? 'impact-shake' : ''} ${
          isCrit ? 'crit-glow' : ''
        } ${isFail ? 'fail-glow' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="dice-modal-header">{animationData.label}</div>

        {/* Arcane Runic Background Circle */}
        <div className={`runic-circle-container ${isRolling ? 'spinning' : 'glow-pulse'}`}>
          <svg viewBox="0 0 200 200" className="runic-circle-svg">
            <circle cx="100" cy="100" r="92" fill="none" stroke="var(--brass)" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.4" />
            <circle cx="100" cy="100" r="82" fill="none" stroke="var(--brass-dim)" strokeWidth="1" opacity="0.3" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="var(--brass)" strokeWidth="0.8" strokeDasharray="12 8 4 8" opacity="0.5" />
            <g fill="var(--brass)" opacity="0.6">
              <polygon points="100,6 104,14 96,14" />
              <polygon points="100,194 104,186 96,186" />
              <polygon points="6,100 14,104 14,96" />
              <polygon points="194,100 186,104 186,96" />
              <circle cx="34" cy="34" r="3" />
              <circle cx="166" cy="34" r="3" />
              <circle cx="34" cy="166" r="3" />
              <circle cx="166" cy="166" r="3" />
            </g>
          </svg>
        </div>

        {/* 3D WebGL Die Stage */}
        <div className="webgl-die-stage">
          {/* Ground Shadow */}
          <div className={`die-shadow ${isRolling ? 'tumbling-shadow' : 'settled-shadow'}`}></div>

          {/* WebGL Canvas */}
          <canvas ref={canvasRef} className="webgl-canvas" />

          {/* Number Overlay inside 3D Die */}
          <div className="webgl-num-overlay">
            <span className={`die-number ${isRolling ? 'blur-num' : 'final-num'} ${isCrit ? 'crit-num' : ''} ${isFail ? 'fail-num' : ''}`}>
              {displayNum}
            </span>
          </div>

          {/* Landing Shockwave */}
          {isImpact && <div className={`die-shockwave ${isCrit ? 'crit-wave' : isFail ? 'fail-wave' : ''}`}></div>}

          {/* Particles */}
          <div className="particle-container">
            {particles.map((p) => (
              <span
                key={p.id}
                className="spark-particle"
                style={{
                  backgroundColor: p.color,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  boxShadow: `0 0 8px ${p.color}`,
                  animationDelay: `${p.delay}s`,
                  transform: `translate(${p.tx}px, ${p.ty}px) scale(0)`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        </div>

        {/* Result Summary */}
        {!isRolling && (
          <div className="dice-modal-result">
            {animationData.rollDetails && animationData.rollDetails.length > 0 ? (
              <div className="dice-details-list">
                {animationData.rollDetails.map((detail, idx) => (
                  <div key={idx} className="dice-detail-item">{detail}</div>
                ))}
              </div>
            ) : animationData.rolls.length > 1 ? (
              <div className="dice-rolls-list">Tiradas: [{animationData.rolls.join(', ')}]</div>
            ) : null}

            {animationData.total !== undefined && animationData.total !== animationData.finalResult ? (
              <div className="dice-total-box">
                Resultado final: <strong>{animationData.total}</strong>
              </div>
            ) : (
              <div className="dice-total-box">
                Dado: <strong>{animationData.finalResult}</strong>
              </div>
            )}

            {isCrit && <div className="crit-badge">✨ ¡20 NATURAL! ✨</div>}
            {isFail && <div className="fail-badge">💀 ¡1 NATURAL! 💀</div>}

            <button
              type="button"
              className="dice-next-btn"
              onClick={(e) => {
                e.stopPropagation();
                animationData.onComplete();
              }}
            >
              <span>Siguiente</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <div className="click-hint">Toca cualquier parte o presiona Enter/Espacio para continuar</div>
          </div>
        )}
      </div>
    </div>
  );
};


