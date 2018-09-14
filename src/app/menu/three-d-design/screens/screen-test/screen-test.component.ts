import { Component, OnInit } from "@angular/core";
import * as THREE from "three";
@Component({
  selector: "app-screen-test",
  templateUrl: "./screen-test.component.html",
  styleUrls: ["./screen-test.component.scss"]
})
export class ScreenTestComponent implements OnInit {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer();
  constructor() { }

  ngOnInit() {
    this.animationStart();
  }

  animationStart(): void {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    const material2 = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    const geometry2 = new THREE.Geometry();
    geometry2.vertices.push(new THREE.Vector3(-2, 0, 0));
    geometry2.vertices.push(new THREE.Vector3(0, 2, 0));
    geometry2.vertices.push(new THREE.Vector3(2, 0, 0));
    geometry2.vertices.push(new THREE.Vector3(4, 0, 0));
    geometry2.vertices.push(new THREE.Vector3(2, -2, 0));
    geometry2.vertices.push(new THREE.Vector3(4, -4, 0));
    geometry2.vertices.push(new THREE.Vector3(0, -2, 0));
    geometry2.vertices.push(new THREE.Vector3(-4, -4, 0));
    geometry2.vertices.push(new THREE.Vector3(-2, -2, 0));
    geometry2.vertices.push(new THREE.Vector3(-4, 0, 0));
    geometry2.vertices.push(new THREE.Vector3(-2, 0, 0));
    const line = new THREE.Line(geometry2, material2);





    this.scene.add(cube);
    this.scene.add(line);


    this.camera.position.z = 5;

    const test = (): void => {
      requestAnimationFrame(test);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
    };
    test();
  }
}
