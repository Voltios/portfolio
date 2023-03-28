import * as THREE from 'three';
import Experience from "./Experience";


export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;


        this.createPerspectiveCamera();
        this.createOrtographicCamera();
    }

    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 1000)
        this.scene.add(this.perspectiveCamera)
    }
    createOrtographicCamera() {
        this.frustrum = 5;
        this.orthographicCamera = new THREE.OrthographicCamera((-this.sizes.aspect * this.frustrum) / 2, (this.sizes.aspect * this.frustrum) / 2, this.sizes.frustrum / 2, -this.sizes.frustrum / 2, -100, 100);
        this.scene.add(this.orthographicCamera)
    }
    resize() {
        // update perspective camera on resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        // update orthographic camera on resize
        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.top = this.sizes.frustrum / 2;
        this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
        this.orthographicCamera.updateProjectionMatrix();
    }
    update() {}
}