import{
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

/*Import Pages*/
import LoginPage from './../pages/login/login'; //Login Page - First Page
import IndexPage from './../pages/index/index'; //Page select one module

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <IndexPage />
  },
]);

export default function AppRouter(){
  return(
    <RouterProvider router={router}/>
  );
}
