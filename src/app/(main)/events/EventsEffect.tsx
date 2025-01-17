"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;
const fragmentShader = `
    varying vec2 vUv;
    uniform sampler2D u_texture;    
    uniform vec2 u_mouse;
    uniform vec2 u_prevMouse;
    uniform float u_aberrationIntensity;
    float sz = 80.00;
    float len = 40.00;
    float breth = 80.00;
    void main() {
        vec2 gridUV = floor(vUv * vec2(sz, sz)) / vec2(sz, sz);
        vec2 centerOfPixel = gridUV + vec2(1.0/len, 1.0/breth) ;
        
        vec2 mouseDirection = u_mouse - u_prevMouse;
        
        vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
        float pixelDistanceToMouse = length(pixelToMouseDirection);
        float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);
 
        vec2 uvOffset = strength * - mouseDirection * 0.2;
        vec2 uv = vUv - uvOffset;

        vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
        vec4 colorG = texture2D(u_texture, uv);
        vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

        gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
    }
`;

const EventsEffect = () => {
  useEffect(() => {
    const imageContainer = document.getElementById(
      "imageContainer",
    ) as HTMLDivElement;
    const imageElement = document.getElementById("myImage") as HTMLImageElement;

    if (!imageContainer || !imageElement) return;

    const scene = new THREE.Scene();
    const perspective = 1000;
    const fov =
      (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI;
    const camera = new THREE.PerspectiveCamera(fov, 1, 1, 1000);
    camera.position.set(0, 0, 16);

    const texture = new THREE.TextureLoader().load(
      "/assets/events/eventseffect.png",
    );

    const shaderUniforms: {
      u_mouse: { value: THREE.Vector2 };
      u_prevMouse: { value: THREE.Vector2 };
      u_aberrationIntensity: { value: number };
      u_texture: { value: THREE.Texture };
    } = {
      u_mouse: { value: new THREE.Vector2() },
      u_prevMouse: { value: new THREE.Vector2() },
      u_aberrationIntensity: { value: 0.0 },
      u_texture: { value: texture },
    };

    const planeMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(13, 13),
      new THREE.ShaderMaterial({
        uniforms: shaderUniforms,
        vertexShader,
        fragmentShader,
      }),
    );
    scene.add(planeMesh);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(imageElement.offsetWidth, imageElement.offsetHeight);
    imageContainer.appendChild(renderer.domElement);

    const mousePosition = new THREE.Vector2(0.5, 0.5);
    const targetMousePosition = new THREE.Vector2(0.5, 0.5);
    const prevPosition = new THREE.Vector2(0.5, 0.5);
    let aberrationIntensity = 0.0;
    let easeFactor = 0.02;

    function animateScene() {
      requestAnimationFrame(animateScene);

      mousePosition.lerp(targetMousePosition, easeFactor);

      shaderUniforms.u_mouse.value.copy(mousePosition);
      shaderUniforms.u_prevMouse.value.copy(prevPosition);

      aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05);
      shaderUniforms.u_aberrationIntensity.value = aberrationIntensity;

      renderer.render(scene, camera);
    }

    function handleMouseMove(event: MouseEvent) {
      easeFactor = 0.02;
      const rect = imageContainer.getBoundingClientRect();
      prevPosition.copy(targetMousePosition);

      targetMousePosition.set(
        (event.clientX - rect.left) / rect.width,
        (event.clientY - rect.top) / rect.height,
      );

      aberrationIntensity = 1;
    }

    function handleMouseEnter(event: MouseEvent) {
      easeFactor = 0.02;
      const rect = imageContainer.getBoundingClientRect();

      mousePosition.set(
        (event.clientX - rect.left) / rect.width,
        (event.clientY - rect.top) / rect.height,
      );
      targetMousePosition.copy(mousePosition);
    }

    function handleMouseLeave() {
      easeFactor = 0.05;
      targetMousePosition.copy(prevPosition);
    }

    animateScene();
    imageElement.addEventListener("mousemove", handleMouseMove);
    imageElement.addEventListener("mouseenter", handleMouseEnter);
    imageElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      renderer.dispose();
      scene.clear();
      planeMesh.geometry.dispose();
      planeMesh.material.dispose();
      imageContainer.removeChild(renderer.domElement);
    };
  }, []);
  return (
    <section className="h-full w-full overflow-hidden rounded-3xl bg-[#FFA6F6]">
      <div
        id="imageContainer"
        className="relative mx-auto flex h-full w-full max-w-full items-center justify-center overflow-hidden"
      >
        <img
          className="absolute inset-0 select-none object-cover object-center opacity-0 brightness-75 filter"
          id="myImage"
          src="/assets/events/eventseffect.png"
          alt=""
        />
      </div>
    </section>
  );
};
export default EventsEffect;
