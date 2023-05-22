import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const FlagMaterial = shaderMaterial(
  { uTime: 0 },
  `
    #define PI 3.1415926535897932384626433832795

    uniform float uTime;

    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;

    void main() {
        vUv = uv;
        vPosition = position;
        vNormal = normal;
        vec3 newPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    }
    `,
  `
    #define PI 3.1415926535897932384626433832795

    uniform float uTime;

    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;

    void main() {
    
        gl_FragColor = vec4(1.0 - vUv, 0.5, 1.0);
        
    }
    `
);

extend({ FlagMaterial });

export { FlagMaterial };
