import { useState } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './App.css'

function App() {
  
const firebaseConfig = {
  apiKey: 'AIzaSyBi1snp5kADNTLvky49vgWT3V6yQz5oMog',
  authDomain: 'login-2988f.firebaseapp.com',
  projectId: 'login-2988f',
  storageBucket: 'login-2988f.appspot.com',
  messagingSenderId: '823195933670',
  appId: '1:823195933670:web:5c1a76bbe7dfdd22a05427',
  measurementId: 'G-XP55K27FW4',
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
  return (
    <>
    <div class="container" id="container">
        <div class="form-container sign-up-container">
            <form action="#" name="submit-to-google-sheet">
                <h1>Create Account</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <div class="infield">
                    <input type="text" placeholder="First Name" name="First"/>
                    <label></label>
                </div>
                <div class="infield">
                    <input type="text" placeholder="Last Name" name="Last"/>
                    <label></label>
                </div>
                <div class="infield">
                    <input type="email" placeholder="Email" name="Email"/>
                    <label></label>
                </div>
                <div class="infield">
                    <input type="password" placeholder="Password" name="Password"/>
                    <label></label>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#" name="submit-to-google-sheet2">
                <h1>Sign in</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <div class="infield">
                    <input type="email" placeholder="Email" name="Email"/>
                    <label></label>
                </div>
                <div class="infield">
                    <input type="password" placeholder="Password" name="Password"/>
                    <label></label>
                </div>
               
                <a href="#" class="forgot">Forgot your password?</a>
                <button type="submit">Sign In</button>
            </form> 
        </div>
        <div class="overlay-container" id="overlayCon">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button>Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button>Sign Up</button>
                </div>
            </div>
            <button id="overlayBtn"></button>
        </div>
    </div>
    </>
  )
}

export default App
