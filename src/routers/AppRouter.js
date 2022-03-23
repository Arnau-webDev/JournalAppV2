import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import JournalScreen from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

import { firebase } from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../actions/notes';


export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setChecking(false);

        setIsLoggedIn(true);
        const notes = await loadNotes(user.uid);
        dispatch(setNotes(notes));

      } else {
        setIsLoggedIn(false);
        setChecking(false);
      }
    })
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return (<h1>Loading...</h1>)
  }

  return (
    <Router >
      <Switch>
        {/* <Route path="/auth" component={AuthRouter}></Route>
        <Route exact path="/" component={JournalScreen}></Route>

        <Redirect to="/auth/login" /> */}
        {
          isLoggedIn ? (
            <Route path="/" component={JournalScreen}></Route>
          ) : (
            <Route path="/auth" component={AuthRouter}></Route>
          )
        }

        <Redirect to="/auth/login" />

      </Switch>
    </Router>
  )
}
