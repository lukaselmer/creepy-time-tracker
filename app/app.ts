import { FirebaseDb } from './firebase-db';
import { DemoProducer } from './producers/demo-producer';
import { Renderer } from './renderer/renderer';

export class CreepyTimeTrackerApp {
  run() {
    FirebaseDb.INIT_FIREBASE();
    new Renderer().run();
    new DemoProducer().run();
  }
}
