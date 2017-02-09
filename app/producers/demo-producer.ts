import { FirebaseDb } from '../firebase-db';

export class DemoProducer {
  run() {
    const ref = FirebaseDb.db.ref('location-events');
    setTimeout(() => ref.push({ time: new Date().toISOString(), message: 'test' }), 1000);
    setTimeout(() => ref.push({ time: new Date().toISOString(), message: 'test' }), 2000);
    setTimeout(() => ref.push({ time: new Date().toISOString(), message: 'test' }), 3000);
  }
}
