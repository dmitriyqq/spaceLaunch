const START_FONT = 7;
const END_FONT = 22;

const START_OPACITY = 0.1;
const END_OPACITY = 0.9;
const TEXT_PADDING = Math.PI / 7;

import {CONSTANTS} from './Constants';

function map(n, start1, stop1, start2, stop2) {
    return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
};

export class Label {
    constructor(text, type, container, onselect, coords) {
        this.container = container;
        this.type = type;
        this.onselect = onselect;
        this.coords = coords;

        this.element = document.createElement('div');
        this.element.setAttribute('class', 'label')
        this.text = document.createElement('div');
        this.text.setAttribute('class', 'inner-text');
        this.text.innerHTML = text;
        this.element.appendChild(this.text);

        if (this.type == CONSTANTS.LAUNCH) {
            this.element.appendChild(this.getSpaceportIcon());
        } else {
            this.element.appendChild(this.getCircleIcon());
        }

        this.container.appendChild(this.element);
        this.size = 1;

        this.element.addEventListener('click', () => {
            this.onselect(this.coords);
        })
    }

    update(posx, posy, cost) {
        if (Math.acos(cost) < Math.PI / 2 + TEXT_PADDING) {
            this.element.style.display = 'none';
            return;
        }

        this.element.style.display = 'block';

        const opacity = map(Math.acos(cost), 2, 2.5, START_OPACITY, END_OPACITY);
        const fontSize = Math.round(map(Math.acos(cost), 2, 2.5, START_FONT, END_FONT)) + 'px';

        const offset = this.element.offsetWidth / 2;
        this.element.style.left = (posx - offset) + 'px';
        this.element.style.top = posy + 'px';
        this.element.style.opacity = opacity;
        this.element.style.fontSize = fontSize;
    }

    getSpaceportIcon() {
        this.icon = document.createElement('div');
        this.icon.setAttribute('class', 'inner-icon-circle');
        return this.icon;
    }

    getCircleIcon() {
        this.icon = document.createElement('div');
        this.icon.setAttribute('class', 'inner-icon');
        this.svg = SVG_IMAGE;
        this.icon.appendChild(this.svg);
        return this.icon;
    }

    hide(){
        this.element.style.display = 'none';
    }
    
    show(){
        this.element.style.display = 'block';
    }

    dispose() {
        this.container.removeChild(this.element);
        this.element.removeEventListener('click');
        this.element.removeChild(this.text);
        this.element.removeChild(this.icon);
    }
}