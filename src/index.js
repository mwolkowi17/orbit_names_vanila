import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls';
import { light2, light3, light4 } from './direct_light.js';
import {gltfLoader2} from './loader';
import { gltfLoader3 } from './loader2';
 

//creating a scene
export const scene = new THREE.Scene();
//creating a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//creating a raycaster to make object interactive
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2()
//creating renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
//creating a orbitcontrols
const controls = new OrbitControls(camera, renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color(0xFFFFFF);

scene.add(light2);
scene.add(light2.target);
scene.add(light3);
scene.add(light3.target);
scene.add(light4);
scene.add(light4.target);

camera.position.z = 12;
camera.position.y = 1.5;

//gltfLoader2.position.x=2;
controls.update();
controls.autoRotate = false;
renderer.domElement.addEventListener('dblclick', onClick, false);


//const clock = new THREE.Clock();

const animate = function () {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);

  controls.update()
  
};

function onClick(event) {

  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children, true);
  const dispalyDetails = document.getElementsByClassName('display')[0]

  if (intersects.length > 0) {

    console.log('Intersection:', intersects[1]);
    //const dispalyDetails = document.getElementsByClassName('display')[0];
    //dispalyDetails.style.visibility='visible'
    if(intersects[1]!=null){
      console.log('trafiony');
    }

  }

}



animate();