import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { scene } from './index.js';


export const gltfLoader2 = new GLTFLoader()
    
    gltfLoader2.load('./orbit_for_fiber1.glb', (gltf) => {
      const root = gltf.scene;
      const anim = gltf.animations;
      root.position.x=8;
      root.position.z=-4;
      root.position.y=4.5;
      root.rotation.x=Math.PI/10
      scene.add(root); 
    })
