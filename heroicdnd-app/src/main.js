import * as firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from "firebaseui";
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      // User is already logged in
      // Add Vuetify Plug-in
      Vue.use(Vuetify);
      // Starting Vue
      global.homeApplication = new Vue({ 
          el:"#app",
          vuetify: new Vuetify()
      }).$mount("#app");
  } else {
      // User not logged in
      // Load login ui
      (new firebaseui.auth.AuthUI(firebase.auth()))
          .start('#firebaseui-auth-container', {
              signInSuccessUrl: "/",
              signInOptions: [
                  firebase.auth.EmailAuthProvider.PROVIDER_ID,
              ],
              tosUrl: "/terms-of-service",
              privacyPolicyUrl: "/privacy-policy"
          });
  }
}, function(error) {
  console.log(error);
});