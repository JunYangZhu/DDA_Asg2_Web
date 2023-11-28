// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
//get data from firebase
import { getDatabase, ref, child, get, onValue, push, update, remove, set} 
from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
//get auth from database
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} 
from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';

//get database
const db = getDatabase();
const auth = getAuth();