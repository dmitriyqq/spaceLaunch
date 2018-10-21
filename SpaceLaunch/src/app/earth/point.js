import * as THREE from 'three';
import { Label } from './label';
import { CONSTANTS, RADIUS } from './Constants';

const POINT_RADIUS = 0.01;

export class Point{
    constructor(lat, lon, text, type, container, onselect) {
        this.lat = lat
        this.lon = lon;
        this.container = container;
        this.label = new Label(text, type, container, onselect, {lat, lon});
        this.onselect = onselect;
    }

    update(camera, width, height) {
        var widthHalf = width / 2, heightHalf = height / 2;
        const pos = this.getPosition();
        pos.project(camera);
        pos.x = (pos.x * widthHalf) + widthHalf;
        pos.y = - (pos.y * heightHalf) + heightHalf;

        const cameraPosition = camera.position.clone();
        const start = new THREE.Vector3();
        const n = start.sub(cameraPosition);
        
        n.normalize();
        n.multiplyScalar(RADIUS);
        const position = this.getPosition();
        const dp = n.dot(position);
        const cost = dp / (position.length() * n.length());
        this.label.update(pos.x, pos.y, cost);
    }

    dispose(){
        this.label.dispose();
    }

    getPosition(){
        const phi = (90 - this.lat) * (Math.PI / 180);
        const theta = (this.lon + 180) * (Math.PI / 180);

        const x = -((RADIUS+POINT_RADIUS/3) * Math.sin(phi)*Math.cos(theta));
        const z = ((RADIUS+POINT_RADIUS/3) * Math.sin(phi)*Math.sin(theta));
        const y = ((RADIUS+POINT_RADIUS/3) * Math.cos(phi));

        return new THREE.Vector3(x, y, z);
    }

    dispose(scene){
        scene.remove(this.mesh);
    }
}