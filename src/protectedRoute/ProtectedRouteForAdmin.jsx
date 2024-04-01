/* eslint-disable react/prop-types */
import { Navigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/FirebaseConfig";

export const ProtectedRouteForAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error("Error fetching user:", error);
        return <div>Error</div>;
    }

    if (user && user.role === "admin") {
        return children;
    } else {
        return <Navigate to={'/login'} />;
    }
};
