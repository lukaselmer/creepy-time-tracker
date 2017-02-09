import * as firebase from 'firebase';
import { config } from './config/config';

export class FirebaseDb {
  public static app: firebase.app.App;
  public static db: firebase.database.Database;

  static INIT_FIREBASE() {
    const dbConfig = {
      apiKey: config().firebaseApiKey,
      authDomain: `${config().firebaseProjectId}.firebaseapp.com`,
      databaseURL: `https://${config().firebaseDatabaseName}.firebaseio.com`,
      messagingSenderId: config().firebaseMessagingSenderId,
      storageBucket: `${config().firebaseBucket}.appspot.com`
    };
    FirebaseDb.app = firebase.initializeApp(dbConfig);
    FirebaseDb.db = firebase.database();
  }
}
