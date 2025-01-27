import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

import Layout from "./components/Layout.jsx";
import './index.css';
import {
  Home,
  About,
  Contact,
  UniSocial,
  Learning,
  Contests,
  Signup,
  Signin,
  Dashboard,
  PrivateRoute,
  OnlyAdminPrivateRoute,
  CreatePost,
  UpdatePost,
  PostPage,
  Search,
} from "./components/index.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />
      <Route path="sign-in" element={<Signin />} />
      <Route path="search" element={<Search />} />
      <Route path="uniSocial" element={<UniSocial />} />
      <Route path="learning" element={<Learning />} />
      <Route path="contests" element={<Contests />} />
      <Route element={<PrivateRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route element={<OnlyAdminPrivateRoute />}>
        <Route path="create-post" element={<CreatePost />} />
        <Route path="update-post/:postId" element={<UpdatePost />} />
      </Route>
      {/* <Route path="/projects" element={<Projects />} /> */}
      <Route path="post/:postSlug" element={<PostPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </PersistGate>
);
