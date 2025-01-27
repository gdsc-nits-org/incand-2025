"use client";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

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

const EventsDesktop = (props: { bigScreen: boolean; is4k: boolean }) => {
  const initialized = useRef(false);
  const [isResize, setIsResize] = useState(false);

  window.addEventListener("resize", () => setIsResize(!isResize));

  useEffect(() => {
    if (!props.bigScreen || initialized.current) return;

    initialized.current = true;

    const f = () => {
      const imageContainer = document.getElementById(
        "imageContainer",
      ) as HTMLDivElement;
      const imageElement = document.getElementById(
        "myImage",
      ) as HTMLImageElement;

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

      const shaderUniforms = {
        u_mouse: { value: new THREE.Vector2() },
        u_prevMouse: { value: new THREE.Vector2() },
        u_aberrationIntensity: { value: 0.0 },
        u_texture: { value: texture },
      };

      const size = props.is4k ? 40 : 13;
      const planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(size, size),
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
    };

    setTimeout(f, 1000);
  }, [props.bigScreen, isResize]);

  return (
    <section className="h-full w-full overflow-hidden rounded-3xl bg-[#FFA6F6] 4k:rounded-[4rem]">
      <div
        id="imageContainer"
        className="relative mx-auto flex h-full w-full max-w-full items-center justify-center overflow-hidden"
      >
        <img
          draggable="false"
          className="absolute inset-0 h-full w-full select-none object-cover object-center opacity-0 brightness-75 filter"
          id="myImage"
          src="/assets/events/eventseffect.png"
          alt=""
        />
      </div>
    </section>
  );
};

const EventsMobile = () => {
  return (
    <div className="my-2 h-full w-full rounded-2xl bg-[#FFA6F6] bg-event-pattern2 bg-contain ipadpro:p-6">
      <span className="flex justify-between p-2 pb-0">
        <span className="scale-110 mobile3:scale-150">
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2562_7473)">
              <path
                d="M13.3615 11.7774C28.8805 7.78171 24.4904 0.48428 13.1327 11.3957C24.4964 0.48428 16.8905 -3.72533 12.7352 11.176C16.8965 -3.72533 8.11629 -3.72533 12.2715 11.176C8.11026 -3.73112 0.510373 0.484279 11.8681 11.39C0.510373 0.484279 -3.87974 7.78171 11.6392 11.7774C-3.87974 7.78171 -3.87974 16.2125 11.6392 12.2226C-3.87974 16.2183 0.510373 23.5157 11.8681 12.6043C0.504352 23.5157 8.11027 27.7253 12.2655 12.824C8.10424 27.7253 16.8845 27.7253 12.7292 12.824C16.8905 27.7253 24.4904 23.5099 13.1267 12.6043C24.4904 23.5157 28.8745 16.2125 13.3555 12.2226C28.8805 16.2125 28.8805 7.78171 13.3615 11.7774Z"
                fill="#FAE00D"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2562_7473"
                x="0"
                y="0"
                width="26.0685"
                height="25.0685"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1.06852" dy="1.06852" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2562_7473"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2562_7473"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </span>
        <span className="scale-110 mobile3:scale-150">
          <svg
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2562_7480)">
              <g filter="url(#filter1_d_2562_7480)">
                <path
                  d="M14.6707 0.849914C13.008 -0.0342842 10.8761 2.22984 9.9123 5.9074C9.80513 6.31766 9.71758 6.72297 9.64623 7.13207C9.30142 6.90901 8.93966 6.69703 8.56534 6.49781C5.20786 4.71439 2.10123 4.74646 1.62162 6.56971C1.14506 8.39162 3.47642 11.3151 6.83256 13.0955C8.86828 14.1758 10.8111 14.5885 12.1334 14.3395C12.3298 14.3152 12.5294 14.2567 12.7292 14.1655C12.9317 14.0804 13.1099 13.9732 13.2609 13.8453C14.34 13.0416 15.3519 11.3302 15.9383 9.10416C16.899 5.42794 16.3321 1.73106 14.6707 0.849914Z"
                  fill="#00E9F4"
                />
                <path
                  d="M15.9383 9.10416L15.9331 9.10279C15.3468 11.3283 14.3355 13.0384 13.2577 13.841L13.2577 13.841L13.2575 13.8412C13.1069 13.9687 12.9291 14.0756 12.7271 14.1606L12.727 14.1606C12.5276 14.2516 12.3285 14.3099 12.1327 14.3342L12.1324 14.3342C10.8118 14.5829 8.87027 14.1708 6.83508 13.0907C5.15757 12.2008 3.73629 11.0253 2.79402 9.84482C1.85148 8.66398 1.3892 7.47945 1.62681 6.57107C1.86569 5.66295 2.75899 5.19961 4.01433 5.18662C5.26947 5.17363 6.88461 5.61111 8.56282 6.50254C8.93702 6.70169 9.29864 6.9136 9.64332 7.13657L9.64623 7.13207L9.64914 7.12756L9.65368 7.12055L9.65151 7.13299C9.72284 6.72403 9.81036 6.31887 9.91748 5.90876C10.3992 4.07055 11.1728 2.58603 12.0333 1.67167C12.8939 0.757157 13.84 0.414252 14.6682 0.854647L14.6707 0.849914L14.6682 0.85465C15.4965 1.29397 16.0532 2.4362 16.2825 3.9297C16.5117 5.42278 16.4133 7.26531 15.9331 9.1028L15.9383 9.10416ZM15.9383 9.10416C15.3519 11.3302 14.34 13.0416 13.2609 13.8453L15.9383 9.10416Z"
                  stroke="black"
                  stroke-width="0.0107225"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_2562_7480"
                x="0.914612"
                y="0.0755615"
                width="22.7936"
                height="21.1495"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4" dy="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2562_7480"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2562_7480"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_2562_7480"
                x="1.55981"
                y="0.658569"
                width="18.8461"
                height="17.7512"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4" dy="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2562_7480"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2562_7480"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </span>
        <span className="scale-110 mobile3:scale-150">
          <svg
            width="24"
            height="17"
            viewBox="0 0 24 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2562_7474)">
              <g filter="url(#filter1_d_2562_7474)">
                <circle cx="12.0697" cy="6.57964" r="5.06626" fill="#00E9F4" />
              </g>
              <path
                d="M9.30615 6.49126C9.34453 5.49336 10.02 3.56665 12.415 3.84299"
                stroke="white"
                stroke-width="1.86991"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.24634 3.81633C6.88831 0.899394 18.794 -1.61838 21.2811 11.646C16.0997 14.9084 4.83878 17.9098 1.24634 3.81633Z"
                stroke="#00E9F4"
                stroke-width="1.86991"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2562_7474"
                x="0.311279"
                y="0.555008"
                width="22.9734"
                height="15.8205"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1.06852" dy="1.06852" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2562_7474"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2562_7474"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_2562_7474"
                x="7.00348"
                y="1.51338"
                width="11.201"
                height="11.201"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1.06852" dy="1.06852" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2562_7474"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2562_7474"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </span>
      </span>
      <h1 className="scale-110 text-center font-ahsing text-7xl text-white drop-shadow-[4px_4px_0px_black] mobile3:text-9xl">
        EVENTS
      </h1>
      <span className="relative flex w-full translate-y-[-50%] justify-center mobile3:scale-150">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_2562_7478)">
            <g filter="url(#filter1_d_2562_7478)">
              <path
                d="M12.7508 6.15989C12.7508 9.55313 10 12.3039 6.60676 12.3039C3.21353 12.3039 0.462769 9.55313 0.462769 6.15989C0.462769 2.76666 3.21353 0.0158997 6.60676 0.0158997C10 0.0158997 12.7508 2.76666 12.7508 6.15989ZM3.14242 6.15989C3.14242 8.0732 4.69346 9.62424 6.60676 9.62424C8.52007 9.62424 10.0711 8.0732 10.0711 6.15989C10.0711 4.24659 8.52007 2.69555 6.60676 2.69555C4.69346 2.69555 3.14242 4.24659 3.14242 6.15989Z"
                fill="#FAE00D"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_2562_7478"
              x="0.462769"
              y="0.0158997"
              width="12.5551"
              height="12.5551"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="0.26713" dy="0.26713" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2562_7478"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2562_7478"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_2562_7478"
              x="0.462769"
              y="0.0158997"
              width="13.3565"
              height="13.3565"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1.06852" dy="1.06852" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2562_7478"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2562_7478"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </span>
      <span className="flex w-full scale-110 justify-end px-10 pb-2">
        <svg
          width="31"
          height="25"
          viewBox="0 0 31 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_2562_7472)">
            <path
              d="M21.4946 10.4181V0C16.7341 0 12.881 4.66637 12.881 10.4181V0C6.16346 0 0.718994 4.66057 0.718994 10.4181C0.718994 16.1756 6.16346 20.8362 12.8742 20.8362V10.4181C12.8742 16.1698 16.7341 20.8362 21.4879 20.8362V10.4181C21.4879 16.1756 23.6683 20.8362 26.3635 20.8362V0C23.6751 0 21.4946 4.66057 21.4946 10.4181Z"
              fill="#FFD23C"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2562_7472"
              x="0.718994"
              y="0"
              width="29.6445"
              height="24.8362"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2562_7472"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2562_7472"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </span>
    </div>
  );
};

const EventsEffect = () => {
  const [isMounted, setIsMounted] = useState(false);
  const bigScreen = useMediaQuery("(min-width: 1025px)");
  const is4k = useMediaQuery("(min-width: 3839px)");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // return <EventsDesktop />;
  if (bigScreen) return <EventsDesktop bigScreen={bigScreen} is4k={is4k} />;
  return <EventsMobile />;
};

export default EventsEffect;
