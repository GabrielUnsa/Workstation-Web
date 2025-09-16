import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import LoginPage from './../pages/login/login';
import IndexPage from './../pages/index/index';
import IndexPageME from './../pages/indexme/index';
import NewInput from './../pages/newinput/newinput';

const router = createBrowserRouter( [
  {
    path: "login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <IndexPage />
  },
  {
    path: "mentradas",
    element: <IndexPageME />
  },
  {
    path: "nuevo-ingreso",
    element: <NewInput />
  }
] );

export default function AppRouter(){
  return(
    <RouterProvider router={router}/>
  );
}
