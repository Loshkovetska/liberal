import { BrowserRouter as Router,Route, Routes, Navigate } from 'react-router-dom'
import ScrollToTop from './components/common/ScrollToTop'; 
import routes, { RouteType } from './routes';
import { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import UserModel from './stores/UserModel';
import Auth from './components/log/Auth';
import Forgot from './components/log/Forgot';
import AuthModel from './stores/AuthModel';
import NotFound from './components/main/NotFound';

const App = observer(() =>{
  const headerContent = useRef(null);

  const getRoutes = ()=>{
    if(UserModel.user && UserModel.user.role==="user"){
      return routes.usersRoutes
    }
    else if(UserModel.user && UserModel.user.role==="admin"){
      return routes.adminRoutes;
    }
    else return routes.unAuthUser
  }

  useEffect(()=>{
    if(AuthModel.isForgotOpen){
        (document.querySelector("#root")as Element).classList.add("menu-open")
    }
    else  (document.querySelector("#root")as Element).classList.remove("menu-open")
   
},[AuthModel.isForgotOpen])

  return (
    <Router>
        <div ref={headerContent}></div>
        <ScrollToTop headerContent={headerContent}/>
        <Routes>
        <Route
          path="/404"
          element={<NotFound/>}/>
          {getRoutes().map((route: RouteType, idx:number) => (
            <Route key={idx} path={route.path} element={route.component}  />
          ))}
        <Route
          path="*"
          element={<Navigate to="/404"/>}/>
        </Routes>
       {AuthModel.isAuthOpen? <Auth/>:<></>}
       {AuthModel.isForgotOpen? <Forgot/>:<></>}
        
    </Router>
  );
})

export default App;
