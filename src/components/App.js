import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
// eslint-disable-next-line import/no-named-as-default
import ManageCoursePage from "./courses/ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;

/*The slug is a url friendly id, where the slug is unique (like an ID).
But the slug is friendlier to read in the URL compared to an ID*/

/*Since our routes are wrapped in switch only one route inside switch can match.
The moment the react router finds a matching route it stops. So if it finds a slug in the URL,
it will stop there. This is why we need to make sure that the slug route is declared first, otherwise
the shorter course URL would match so our slug route would never match and would never load.*/
