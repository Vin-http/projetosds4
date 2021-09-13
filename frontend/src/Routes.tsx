import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';

const Routes = () => {
    return (
       <div>
           <BrowserRouter>
           <switch>
               <Route path="/" exact>
                   <Home />
               </Route>
               <Route path="/dashboard">
                   <Dashboard />
               </Route>
           </switch>
           </BrowserRouter>
       </div>
    );
}

export default Routes;