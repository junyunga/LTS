import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

import * as THREE from "three-full";
// declare global {
//     interface Window {
//          THREE: typeof THREE;
//     }
// }
// window.THREE = THREE;   
// require("three/examples/js/controls/TrackballControls");

@Component({
    selector: "app-screen-test",
    templateUrl: "./screen-test.component.html",
    styleUrls: ["./screen-test.component.scss"]
})
export class ScreenTestComponent implements OnInit {

    scene: any;
    camera: any;
    renderer: any;
    controls: any;
    constructor() { }

    ngOnInit() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x707070);
        this.scene.fog = new THREE.Fog(0x707070, 1, 1600);


        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(450, 200, 300);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.autoClear = false;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFShadowMap;
        document.body.appendChild(this.renderer.domElement);


        this.controls = new THREE.TrackballControls(this.camera);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;
        this.controls.noZoom = false;
        this.controls.noPan = false;
        this.controls.staticMoving = false;
        this.controls.dynamicDampingFactor = 0.2;
        const ambient = new THREE.AmbientLight(0x111111);
        this.scene.add(ambient);

        const light = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 2);
        light.position.set(450, 800, 1100);
        light.target.position.set(0, 0, 0);
        light.castShadow = true;
        light.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(50, 1, 300, 1500));
        light.shadow.bias = 0.0001;
        light.shadow.mapSize.width = 4096;
        light.shadow.mapSize.height = 4096;
        this.scene.add(light);

        //피사체
        const group = new THREE.Object3D();
        const geometry = new THREE.BoxBufferGeometry(70, 70, 3);
        for (let i = 0; i < 1000; i++) {
            const object = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: 0xff0000 }));
            object.position.x = Math.random() * 800 - 400;
            object.position.y = Math.random() * 800 - 400;
            object.position.z = Math.random() * 800 - 400;
            object.rotation.x = Math.random() * 2 * Math.PI;
            object.rotation.y = Math.random() * 2 * Math.PI;
            object.rotation.z = Math.random() * 2 * Math.PI;
            object.scale.x = Math.random() + 0.5;
            object.scale.y = Math.random() + 0.5;
            object.scale.z = Math.random() + 0.5;
            object.castShadow = true;
            object.receiveShadow = true;
            group.add(object);
        }
        this.scene.add(group)


        this.animationStart();
    }

    animationStart(): void {

        const animate = (): void => {
            requestAnimationFrame(animate);
            this.controls.update();
            this.renderer.render(this.scene, this.camera);
        };
        animate();
    }
    //http://binteractive.org/?p=230
}
