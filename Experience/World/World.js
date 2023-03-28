import * as THREE from 'three';
import Experience from '../Experience';

import Room from './Room';

export default class World {
    constructor() {
        this.experience = new Experience();


        this.room = new Room();
    }
}