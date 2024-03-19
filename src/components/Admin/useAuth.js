import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = (role) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUsername = localStorage.getItem('username');
        const storedRoles = localStorage.getItem('role')?.split(',');

        if (storedToken && storedUsername && storedRoles) {
            setIsAuthenticated(true);
            setIsAuthorized(storedRoles.includes(role));
        } else {
            navigate('/login');
        }
    }, [role, navigate]);

    return { isAuthenticated, isAuthorized };
};

export default useAuth;
