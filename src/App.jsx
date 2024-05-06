import Applayout from './layout/Applayout'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Favorites from './pages/Favorites'
import Searchpage from './pages/Searchpage'
import Singlegiph from './pages/Singlegiph'
const Router = createBrowserRouter([
  {
    element:<Applayout/>,
    children:[
      {
        path:'/',
        element:<Home/>

      },
      {
        path:'/:category',
        element:<Category/>
      },
      {
        path:'/Favorites',
        element:<Favorites/>
      },
      {
        path:'/Search/:query',
        element:<Searchpage/>
      },
      {
        path:'/:type/:slug',
        element:<Singlegiph/>
      }
    ]
  }
])
function App() {

  
 
  return (
    <>
   <RouterProvider router={Router}/>
    </>
  )
}

export default App
