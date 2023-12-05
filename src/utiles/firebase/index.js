import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-NBeW3iAGnQF1iQeabI5PADOa_0LgDss",
  authDomain: "e-commerce-838a1.firebaseapp.com",
  projectId: "e-commerce-838a1",
  storageBucket: "e-commerce-838a1.appspot.com",
  messagingSenderId: "741702500576",
  appId: "1:741702500576:web:4f235003476694f4e39085",
  measurementId: "G-X1773EXE5Z",
};

// Initialize Firebase
const commerceApp = initializeApp(firebaseConfig);

//<-----Authentication------>//
const commerceAuth = getAuth(commerceApp);

//activate provider
const commerceGoogleProvider = new GoogleAuthProvider();

//create a authentication method function
const signInWithGooglePopup = () =>
  signInWithPopup(commerceAuth, commerceGoogleProvider);

//create a method function for userCreation using email and password
const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(commerceAuth, email, password);
};

//create a method function for signInWithEmail and Password
const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(commerceAuth, email, password);
};

//create a method for signOut
const signOutUser = () => signOut(commerceAuth);

//create a method of onAuthStateChange
const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(commerceAuth, callback);

//<-----Firestore------>//
const commerceDb = getFirestore(commerceApp);

//create user document
const createUserDocumentFromAuth = async (
  userAuth,
  additionInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(commerceDb, "users", userAuth.uid);
  // console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);

  // console.log(userSnapShot);
  // console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionInformation,
      });
    } catch (error) {
      console.log(`Error creating the user`, error.message);
    }
  }

  return userDocRef;
};

//create method for add collection and Documents from local to firebase
const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field = "title"
) => {
  const collectionRef = collection(commerceDb, collectionKey);
  const batch = writeBatch(commerceDb);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

//create method for getting data from firestore
const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(commerceDb, "categories");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);

  const categoryMap = querySnapShot.docs.reduce((acc, docsSnapShot) => {
    const { title, items } = docsSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};
//<-----Exporting------>//
export {
  commerceAuth,
  signInWithGooglePopup,
  commerceDb,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  onAuthStateChangedListener,
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
};
