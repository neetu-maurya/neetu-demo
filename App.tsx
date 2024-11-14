import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import VarifyEmail from "./auth/VarifyEmail";


import MainLayout from "./layout/MainLayout";
import HeroSection from "./components/HeroSection";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children: [
      {
        path:"/",
        element:<HeroSection/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword/>,
  },
  {
    path: "/reset-password",
    element: <ResetPassword/>,
  },
  {
    path: "/varify-email",
    element: <VarifyEmail/>,
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
