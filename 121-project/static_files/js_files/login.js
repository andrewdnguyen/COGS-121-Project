"use strict";
$(document).ready(function() {
    $(".g-signin2").click( function(){
        console.log('Attempting to login using Google Sign-In.');
        let auth2 = gapi.auth2.getAuthInstance();
        // Sign the user in, and then retrieve their ID.
        auth2.signIn().then(function() {
            var profile = auth2.currentUser.get().getBasicProfile();
            console.log('Logged in as: ' + profile.getName());
            console.log('ID: ' + profile.getId());
            console.log('Full Name: ' + profile.getName());
            console.log('Given Name: ' + profile.getGivenName());
            console.log('Family Name: ' + profile.getFamilyName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            window.location.href = "http://localhost:3000/home.html";
        });
    });
    $("#SignOut").click(signOut);
    // if (auth2.isSignedIn.get()) {
    //   var profile = auth2.currentUser.get().getBasicProfile();
    //   console.log('ID: ' + profile.getId());
    //   console.log('Full Name: ' + profile.getName());
    //   console.log('Given Name: ' + profile.getGivenName());
    //   console.log('Family Name: ' + profile.getFamilyName());
    //   console.log('Image URL: ' + profile.getImageUrl());
    //   console.log('Email: ' + profile.getEmail());
    // }
});

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

/*This function would be used to toggle the visibility
  of text at the login page of index.html.*/
function showPassword() {
    let password = document.getElementById("passInput");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}
