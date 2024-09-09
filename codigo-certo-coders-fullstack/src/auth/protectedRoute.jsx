import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'universal-cookie';

const isAuthenticated = () => {
    const cookies = new Cookies()
    const token = cookies.get('jwt-token')

    if (!token) return false;

    try {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken)
        const currentTime = Date.now();
        return decodedToken.exp < currentTime;
    } catch (e) {
        console.error(e.message)
        return false;
    }
};

const ProtectedRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/login" />;
};

export { ProtectedRoute }
