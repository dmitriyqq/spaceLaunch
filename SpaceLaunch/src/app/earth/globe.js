import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';
import { Point } from './point.js'

import { CONSTANTS, RADIUS } from './Constants';

export class Globe {
    constructor(width, height, container, onselect) {
        this.width = width;
        this.height = height;
        this.container = container;
        this.onselect = onselect;
        this.points = [];
    }

    async setupGlobeMaterial() {
        const spec = await this.loadTexture('../../assets/img/earth.jpg');
        const bump = await this.loadTexture('../../assets/img/earth.jpg');
        const texture = await this.loadTexture('../../assets/img/earth.jpg');

        this.material = new THREE.MeshPhongMaterial({
            map: texture,
            bumpMap: bump,
            specularMap: spec,
            bumpScale: 0.05,
        });
    }

    async init() {
        await this.setupGlobeMaterial();
        const bg = await this.loadTexture('../../assets/img/bg.png');

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(this.width, this.height);
        this.container.appendChild(this.renderer.domElement);

        this.scene = new THREE.Scene();
        this.scene.background = bg;
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.autoRotate = true;
        this.controls.addEventListener('change', this.draw);


        this.ambient = new THREE.AmbientLight(0xffffff, 0.1);
        this.directional = new THREE.DirectionalLight(0xffffff, 0.3);
        this.point = new THREE.PointLight(0xffffff, 0.7);
        // const helper = new THREE.DirectionalLightHelper(this.directional, 5);

        const geometry = new THREE.SphereGeometry(RADIUS, 64, 64);
        this.sphere = new THREE.Mesh(geometry, this.material);

        this.camera.position.z = 4;

        this.scene.add(this.sphere);
        this.point.target = this.sphere;

        this.camera.add(this.point);
        this.scene.add(this.camera)
        this.scene.add(this.ambient);
        this.scene.add(this.directional);

        this.animate = this.animate.bind(this);
        this.draw = this.draw.bind(this);
        this.animate();
    }

    animate() {
        this.controls.update();
        for (let point of this.points) {
            point.update(this.camera, this.width, this.height);
        }
        this.point.position.copy(this.camera.position);
        this.draw();
        requestAnimationFrame(this.animate);
    }

    async loadTexture(path) {
        const loader = new THREE.TextureLoader();
        return new Promise((resolve) => {
            loader.load(
                path,
                texture => {
                    console.log('successfully loaded texture')
                    resolve(texture);
                },
                undefined,
                err => { console.error('An error happened. ' + err); }
            );
        })
    }

    draw() {
        if (this.renderer) {
            this.renderer.render(this.scene, this.camera);
        }
    }

    clean() {

        for (const point of this.points) {
            console.log('disposing', point);
            point.dispose(this.scene);
        }

        //this.points = [];
    }

    addPoints(data) {
        const point = new Point(+data.lat, data.lon, data, this.container, (data) => {
            this.onselect(data);
        });
        this.points.push(point);
    }
}