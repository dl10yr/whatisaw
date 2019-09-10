import firebase from 'firebase'
import store from './store'

var config = {
    apiKey: "AIzaSyDOusnVHpmoUZeb_Eu2Nu4Jmrqm4cjWKXk",
    authDomain: "whatisaw.firebaseapp.com",
    databaseURL: "https://whatisaw.firebaseio.com",
    projectId: "whatisaw",
    storageBucket: "whatisaw.appspot.com",
    messagingSenderId: "1002198572987",
    appId: "1:1002198572987:web:eec96e171e9b00e72b2e9e"
};

export default {
    init() {
        firebase.initializeApp(config)
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        firebase.auth().onAuthStateChanged(user => {
            user = user ? user : {};
            store.commit('setUser', user);
            store.commit('setLogin', user.uid ? true : false);
        })
    },
    onAuth() {
        firebase.auth().onAuthStateChanged(user => {
            user = user ? user : {};
            store.commit('setUser', user);
            store.commit('setLogin', user.uid ? true : false);
        })
    },
    login() {
        // const provider = new firebase.auth.TwitterAuthProvider();
        // firebase.auth().signInWithPopup(provider);
        store.commit('setUser', firebase.auth().currentUser)
        store.commit('setLogin', true)
    },
}