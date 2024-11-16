
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Loading';
import { useContext } from 'react';

export default function PrivateRoute({ children }) {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <Loading></Loading>;
    }

    if (user && user?.email) {
        return children;
    } else {
        return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
    }

}
