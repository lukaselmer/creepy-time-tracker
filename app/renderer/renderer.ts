import * as firebase from 'firebase';
import { FirebaseDb } from '../firebase-db';

export class Renderer {
  elements = [];
  private main: HTMLElement;

  constructor() {
    this.main = this.findMain();
    this.main.innerText = '';
  }

  private findMain(): HTMLElement {
    const main = document.getElementById('main');
    if (!main) throw Error('document has not element #main');
    return main;
  }

  run() {
    const ref = FirebaseDb.db
      .ref('location-events')
      .orderByChild('time')
      .limitToLast(5);
    ref.on('child_added', (data: firebase.database.DataSnapshot) => this.createElement(data));
  }

  private createElement(data: firebase.database.DataSnapshot) {
    const node = document.createElement('div');
    const timeNode = document.createElement('div');
    timeNode.innerText = data.val().time;
    node.appendChild(timeNode);
    const messageNode = document.createElement('div');
    messageNode.innerText = data.val().message;
    node.appendChild(messageNode);
    this.main.insertBefore(node, this.main.childNodes[0]);
  }
}
