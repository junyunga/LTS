import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import * as THREE from "three";
import { Stats } from "fs";
import test from "three-orbit-controls";
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
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.camera.position.set(0, 200, 350);
    const sun = new THREE.DirectionalLight(0xffffff, 1.0);
    sun.position.set(300, 400, 175);
    this.scene.add(sun);

    const sun2 = new THREE.DirectionalLight(0x40a040, 0.6);
    sun2.position.set(-100,350,-200);
    this.scene.add(sun2);

    
    

    this.animationStart();
  }

  animationStart(): void {








    const test = (): void => {

    };
    test();
  }
}
