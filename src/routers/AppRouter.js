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


export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  useEffect(() => {

    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setChecking(false);
      }
    })
  }, [dispatch, setChecking]);

  if (checking) {
    return (<h1>Loading...</h1>)
  }

  return (
    <Router >
      <Switch>
        <Route path="/auth" component={AuthRouter}></Route>
        <Route exact path="/" component={JournalScreen}></Route>

        <Redirect to="/auth/login" />

      </Switch>
    </Router>
  )
}
