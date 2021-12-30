import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { scene } from './index.js';


export const gltfLoader2 = new GLTFLoader();
const gltfLoader3 = new GLTFLoader();
const gltfLoader4 = new GLTFLoader();
const gltfLoader5 = new GLTFLoader();
const gltfLoader6 = new GLTFLoader();
const gltfLoader7 = new GLTFLoader();
gltfLoader2.load('./orbit_for_fiber2_2.glb', (gltf) => {
  const root = gltf.scene;
  const anim = gltf.animations;
  root.position.x = 10;
  root.position.z = -4;
  root.position.y = 6;
  root.rotation.x = Math.PI / 9
  scene.add(root);
  gltfLoader3.load('./orbit_for_fiber2_text1.glb', (gltf) => {
    const root = gltf.scene;
    const anim = gltf.animations;
    root.position.x = 10;
    root.position.z = -4;
    root.position.y = 6;
    root.rotation.x = Math.PI / 9
    scene.add(root);

  })
  gltfLoader4.load('./orbit_for_fiber2_text2.glb', (gltf) => {
    const root = gltf.scene;
    const anim = gltf.animations;
    root.position.x = 10;
    root.position.z = -4;
    root.position.y = 6;
    root.rotation.x = Math.PI / 9
    scene.add(root);

  })
  gltfLoader5.load('./orbit_for_fiber2_text3.glb', (gltf) => {
    const root = gltf.scene;
    const anim = gltf.animations;
    root.position.x = 10;
    root.position.z = -4;
    root.position.y = 6;
    root.rotation.x = Math.PI / 9
    scene.add(root);

  })
  gltfLoader6.load('./orbit_for_fiber2_text4.glb', (gltf) => {
    const root = gltf.scene;
    const anim = gltf.animations;
    root.position.x = 10;
    root.position.z = -4;
    root.position.y = 6;
    root.rotation.x = Math.PI / 9
    scene.add(root);

  })
  gltfLoader7.load('./orbit_for_fiber2_text5.glb', (gltf) => {
    const root = gltf.scene;
    const anim = gltf.animations;
    root.position.x = 10;
    root.position.z = -4;
    root.position.y = 6;
    root.rotation.x = Math.PI / 9
    scene.add(root);

  })
})

