<template>
  <div class="container">
    <p v-if="$auth.loggedIn">Name：{{ $auth.user.name }}</p>
  </div>
</template>
<table class="table">
  ...
</table>


<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA4OpdafL5Pvmt9Hh16EuyhK1s100iRgFw",
    authDomain: "fir-pj-c486f.firebaseapp.com",
    projectId: "fir-pj-c486f",
    storageBucket: "fir-pj-c486f.appspot.com",
    messagingSenderId: "920843347854",
    appId: "1:920843347854:web:bb8443412473ca9651e6df",
    measurementId: "G-18HEQWEDLG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>