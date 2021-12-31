import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls';
import { light2, light3, light4,light5 } from './direct_light.js';
import {gltfLoader2} from './loader';
import { gltfLoader3 } from './loader2';
import { gltfLoader4 } from './loader3';
import { ObjectSpaceNormalMap } from 'three';
import { display } from './display';
 

//creating a scene
export const scene = new THREE.Scene();
//creating a camera
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
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
document.body.appendChild(display);

scene.background = new THREE.Color(0xFFFFFF);

scene.add(light2);
scene.add(light2.target);
scene.add(light3);
scene.add(light3.target);
scene.add(light4);
scene.add(light4.target);
scene.add(light5);

camera.position.z = 25;
camera.position.y = 1.5;

//gltfLoader2.position.x=2;
controls.update();
controls.autoRotate = false;
renderer.domElement.addEventListener('click', onClick, false);
renderer.domElement.addEventListener('mousemove', mouseOn, false);

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
  //const dispalyDetails = document.getElementsByClassName('display')[0]

  if (intersects.length > 0) {

    console.log('Intersection:', intersects[0]);
    //objectSelected = intersects[0].object;
    //const dispalyDetails = document.getElementsByClassName('display')[0];
    //dispalyDetails.style.visibility='visible'
    /*if(intersects[4]!=null){
      console.log('trafiony nr1');
    }*/

    console.log(intersects[0].object)
    //console.log(objectSelected)
   if(intersects[0].object===scene.children[9].children[6]){
     console.log('hello')
     display.style.visibility='visible';
     
   }

   if(intersects[0].object===scene.children[8].children[6]){
    console.log('hello2')
    display.style.visibility='visible'
  }
  if(intersects[0].object===scene.children[10].children[6]){
    console.log('hello')
    display.style.visibility='visible';
    
  }
  if(intersects[0].object===scene.children[11].children[6]){
    console.log('hello')
    display.style.visibility='visible';
    
  }
  if(intersects[0].object===scene.children[12].children[6]){
    console.log('hello')
    display.style.visibility='visible';
    
  }
  if(intersects[0].object===scene.children[13].children[6]){
    console.log('hello')
    display.style.visibility='visible';
    
  }
  if(intersects[0].object===scene.children[14].children[6]){
    console.log('hello')
    display.style.visibility='visible';
    
  }
  if(intersects[0].object===scene.children[15].children[6]){
    console.log('hello')
    display.style.visibility='visible';
    
  }
  if(intersects[0].object===scene.children[16].children[5]){
    console.log('hello')
    display.style.visibility='visible';
    
  }
  if(intersects[0].object===scene.children[17].children[6]){
    console.log('hello1')
    display.style.visibility='visible';
    
  }
  if(intersects[0].object===scene.children[18].children[6]){
    console.log('hello')
    display.style.visibility='visible';
    
  }
  if(intersects[0].object===scene.children[19].children[6]){
    console.log('hello')
    display.style.visibility='visible';
    
  }
  if(intersects[0].object===scene.children[20].children[6]){
    console.log('hello')
    display.style.visibility='visible';
    
  }
  if(intersects[0].object===scene.children[21].children[6]){
    console.log('hello')
    display.style.visibility='visible';
    
  }
  
  }

}

function mouseOn(event){
  console.log('mouse');
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children, true);
  //const dispalyDetails = document.getElementsByClassName('display')[0]

  if (intersects.length > 0) {
    if(intersects[0].object===scene.children[9].children[6]){
      document.body.style.cursor='pointer';
    }
    else if(intersects[0].object===scene.children[8].children[6]){
      document.body.style.cursor='pointer';
    }
    else if(intersects[0].object===scene.children[10].children[6]){
      document.body.style.cursor='pointer';
    }
    else if(intersects[0].object===scene.children[11].children[6]){
      document.body.style.cursor='pointer';
    }
    else if(intersects[0].object===scene.children[12].children[6]){
      document.body.style.cursor='pointer';
    }
    else if(intersects[0].object===scene.children[13].children[6]){
      document.body.style.cursor='pointer';
    }
    else if(intersects[0].object===scene.children[14].children[6]){
      document.body.style.cursor='pointer';
    }
    else if(intersects[0].object===scene.children[15].children[6]){
      document.body.style.cursor='pointer';
    }
    else if(intersects[0].object===scene.children[16].children[5]){
      document.body.style.cursor='pointer';
    }
    else if(intersects[0].object===scene.children[17].children[6]){
      document.body.style.cursor='pointer';
    }
    else if(intersects[0].object===scene.children[18].children[6]){
      document.body.style.cursor='pointer';
    }
    else if(intersects[0].object===scene.children[19].children[6]){
      document.body.style.cursor='pointer';
    }
    else if(intersects[0].object===scene.children[20].children[6]){
      document.body.style.cursor='pointer';
    }
    else if(intersects[0].object===scene.children[21].children[6]){
      document.body.style.cursor='pointer';
    }
    
    
    else{
      document.body.style.cursor='default';
    }
  }
  if (intersects.length === 0){
    document.body.style.cursor='default';
  }
  console.log(scene.children)
}
animate();