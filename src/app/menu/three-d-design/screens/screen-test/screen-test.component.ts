import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
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
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.camera.position.z = 10;

        const material1 = new THREE.LineBasicMaterial({ color: 0xe0e0e0 });
        const geometry1 = new THREE.Geometry();

        for (let i = 0; i < 1500; i++) {
          
            let xPos = Math.random() * 20 - 10;
            let yPos = Math.random() * 20 - 10;
            let zPos = Math.random() * 20 - 10;
            
            geometry1.vertices.push(new THREE.Vector3(xPos, yPos, zPos));
        }
        const line = new THREE.Line(geometry1, material1);
        this.scene.add(line);
        this.animationStart();
    }

    animationStart(): void {
      
        const animate = (): void => {
          requestAnimationFrame( animate );
          this.renderer.render(this.scene, this.camera);
        };
        animate();
    }
    //http://binteractive.org/?p=230
}
