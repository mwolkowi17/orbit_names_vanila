import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { scene } from './index.js';


export const gltfLoader4 = new GLTFLoader()
    
    gltfLoader4.load('./orbit_for_fiber2_text2.glb', (gltf) => {
      const root = gltf.scene;
      const anim = gltf.animations;
      root.position.x=10;
      root.position.z=-4;
      root.position.y=6;
      root.rotation.x=Math.PI/10
      scene.add(root); 
      
    })

