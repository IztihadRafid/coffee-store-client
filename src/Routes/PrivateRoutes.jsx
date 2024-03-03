import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
   // console.log(location.pathname);
    if(loading){
        return <div className="text-center p-16"><progress className="progress w-96 "></progress></div>
    }
    if(user?.email){
        return children
    }
    return (
        <Navigate to='/login' state={location.pathname} replace></Navigate>
    );
};

export default PrivateRoutes;