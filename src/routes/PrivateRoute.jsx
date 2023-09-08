
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    // console.log(location);
    if (loading) {
        return <div>Loading ...</div>;
    }
    
    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to={"/"} replace></Navigate>
};

export default PrivateRoute;