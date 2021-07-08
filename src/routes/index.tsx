import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Page from '../components/Page';
import PageOne from '../components/PageOne';
import PageTwo from '../components/PageTwo';

const Routes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.key}>
        <Route path="/page1">
          <PageOne content="Page 01" color="#6C63FF" />
        </Route>
        <Route path="/page2">
          <PageTwo content="Page 02" color="#F50057" />
        </Route>
        <Route path="/">
          <Page content="Page Home" color="#F9A826" />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
