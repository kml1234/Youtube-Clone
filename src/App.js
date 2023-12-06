
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './Components/Maincontainer';
import WatchPage from './Components/WatchPage';
import ButtonList from './Components/ButtonList';
import ResultPage from './Components/ResultPage';
import MainPage from './MainPage';



const appRouter=createBrowserRouter([
  {
  path:"/",
  element:<MainPage/> ,
  children: [
    {
      path:"/",
      element:<Maincontainer/>,
    },
    {
      path:"watch",
      element:<WatchPage/>,
    },
    {
      path:"/searchResult/:searchQuery",
      element:<ResultPage />,

    }

  ]

 }
])
function App() {
  return (
    <Provider store={store}>
    < div className="bg-white">
    
     <RouterProvider router={appRouter}>
     <MainPage/>
       
       </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;

// head 
// body
//   sidebar
//     menuitem
//   main container
//     buttonlist
//     videoconatiner
//     videocard