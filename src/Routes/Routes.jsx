import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../Layout/MainLayOut';
import Home from '../Pages/Home/Home';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut/>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])
export default Routes;