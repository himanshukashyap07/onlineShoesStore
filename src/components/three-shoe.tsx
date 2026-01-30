"use client";

import { useEffect, useRef } from "react";
import * as THREE from "../../node_modules/@types/three";

export default function ThreeShoe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Shoe model (stylized)
    const shoeGroup = new THREE.Group();
    
    const primaryColor = new THREE.Color("hsl(275, 100%, 26%)");
    const accentColor = new THREE.Color("hsl(276, 100%, 50%)");
    const soleColor = new THREE.Color("hsl(0, 0%, 100%)");

    const shoeMaterial = new THREE.MeshStandardMaterial({ 
      color: primaryColor,
      roughness: 0.6,
      metalness: 0.2
    });

    const soleMaterial = new THREE.MeshStandardMaterial({ 
      color: soleColor,
      roughness: 0.9
    });

    const accentMaterial = new THREE.MeshStandardMaterial({
      color: accentColor,
      roughness: 0.4,
      metalness: 0.3
    });

    // Sole
    const soleGeometry = new THREE.BoxGeometry(1, 0.2, 2.2);
    const sole = new THREE.Mesh(soleGeometry, soleMaterial);
    sole.position.y = -0.5;
    shoeGroup.add(sole);

    // Main body
    const bodyGeometry = new THREE.BoxGeometry(0.9, 0.8, 1.8);
    const body = new THREE.Mesh(bodyGeometry, shoeMaterial);
    body.position.y = 0;
    body.position.z = 0.1;
    shoeGroup.add(body);
    
    // Heel
    const heelGeometry = new THREE.BoxGeometry(0.85, 1.2, 0.5);
    const heel = new THREE.Mesh(heelGeometry, shoeMaterial);
    heel.position.y = 0.2;
    heel.position.z = -0.8;
    shoeGroup.add(heel);

    // Tongue
    const tongueGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
    const tongue = new THREE.Mesh(tongueGeometry, accentMaterial);
    tongue.position.set(0, 0.4, 0.2);
    tongue.rotation.x = -Math.PI / 8;
    shoeGroup.add(tongue);
    
    shoeGroup.rotation.x = 0.2;
    shoeGroup.rotation.y = 0.5;
    scene.add(shoeGroup);
    
    // Mouse interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    const onMouseDown = (event: MouseEvent) => {
        isDragging = true;
    };
    
    const onMouseUp = () => {
        isDragging = false;
    };

    const onMouseMove = (event: MouseEvent) => {
        const { clientX, clientY } = event;
        if (isDragging) {
            const deltaX = clientX - previousMousePosition.x;
            const deltaY = clientY - previousMousePosition.y;
            shoeGroup.rotation.y += deltaX * 0.01;
            shoeGroup.rotation.x += deltaY * 0.01;
        }
        previousMousePosition = { x: clientX, y: clientY };
    };

    currentMount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if(!isDragging) {
          shoeGroup.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      if (currentMount) {
        currentMount.removeEventListener('mousedown', onMouseDown);
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="h-full w-full cursor-grab active:cursor-grabbing" />;
}
