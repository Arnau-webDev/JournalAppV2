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
import { startLoadingNotes } from '../actions/notes';
import LoadingScreen from '../components/loading/LoadingScreen';


export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setTimeout(() => { setChecking(false); }, 500);

        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));

      } else {
        setIsLoggedIn(false);
        setTimeout(() => { setChecking(false); }, 500);
      }
    })
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <LoadingScreen />
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
