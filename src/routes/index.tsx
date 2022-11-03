import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

const RoutesApp = () => {
    return (
      <BrowserRouter>
        <Fragment>
          <Routes>
            {/* <Route exact path="/home" element={<Private Item={Home} />} /> */}
            <Route path="/" element={<Home />} />
            {/* <Route exact path="/signup" element={<Signup />} /> */}
            {/* <Route path="*" element={<Signin />} /> */}
          </Routes>
        </Fragment>
      </BrowserRouter>
    );
};

export default RoutesApp;