const START_FONT = 7;
const END_FONT = 14;

const START_OPACITY = 0.1;
const END_OPACITY = 0.9;
const TEXT_PADDING = Math.PI / 7;

import { CONSTANTS } from './Constants';

function map(n, start1, stop1, start2, stop2) {
    return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
};

export class Label {
    constructor(data, container, onselect, coords) {
        this.container = container;
        this.onselect = onselect;
        this.coords = coords;
        this.data = data;

        this.element = document.createElement('div');
        this.element.setAttribute('class', 'label')
        this.text = document.createElement('div');
        this.text.setAttribute('class', 'inner-text');
        this.text.innerHTML = this.data.text + (this.data.count > 1 ? ` +${this.data.count - 1}` : '');
        this.element.appendChild(this.getSpaceportIcon());

        console.log(this.data.fail, this.data.success);
        if (this.data.fail != 0 && this.data.success != 0) {
            this.icon.style.borderColor = 'orange';
        } else if (this.data.fail != 0) {
            this.icon.style.borderColor = 'red';
        } else if (this.data.success != 0) {
            this.icon.style.borderColor = 'green';
        }

        this.element.appendChild(this.text);

        this.container.appendChild(this.element);
        this.size = 1;

        this.element.addEventListener('click', () => {
            this.onselect(this.data);
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
        // console.log(this.data.count);
        this.setRadius(map(this.data.count, 0, 20, 10, 40));
        this.element.style.left = (posx - offset) + 'px';
        this.element.style.top = posy + 'px';
        this.element.style.opacity = opacity;
        // this.element.style.fontSize = fontSize;
    }

    setRadius(r) {
        this.icon.style.width = r * 2 + 'px';
        this.icon.style.height = r * 2 + 'px';
        this.icon.style.left = -r + 'px';
        this.icon.style.top = -r + 'px';
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

    hide() {
        this.element.style.display = 'none';
    }

    show() {
        this.element.style.display = 'block';
    }

    dispose() {
        console.log('disposing', this.data.text);
        document.removeEventListener('click');
        document.remove(this.text);
        document.remove(this.icon);
        document.remove(this.element);

    }
}