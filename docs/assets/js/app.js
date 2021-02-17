function init() {
  var firebaseConfig = {
    apiKey: "AIzaSyCAqmHntWMl1DiYjPnnJz--ptAH2RkhgtE",
    authDomain: "watch-my-conversion.firebaseapp.com",
    databaseURL: "https://watch-my-conversion.firebaseio.com",
    projectId: "watch-my-conversion",
    storageBucket: "watch-my-conversion.appspot.com",
    messagingSenderId: "53850095842",
    appId: "1:53850095842:web:cf46c445672394a0029ebb",
    measurementId: "G-YZ5KXZEMSY"
  };
  firebase.initializeApp(firebaseConfig);
  
  const urlParams = new URLSearchParams(window.location.search);
  const facebookId = urlParams.get('facebookId');
  console.log('Yes, got a facebookId', facebookId);
  if (facebookId) {
    firebase.firestore().collection('facebook').doc(facebookId).update({
      lastTriggeredDate: new Date()
    }).then(() => {
      console.log('Added lastTriggeredDate');
    })
  }
};
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    console.log('The facebook response', response)
  });
}

init();