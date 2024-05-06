import { useEffect, useState } from "react";
import { useAuth } from "../../Context/Auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

export const PrivateRoute = () => {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        console.log("inside private route ", auth.token)
        console.log("inside useeffect")
        const authCheck = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/v1/auth/user-auth',{
                    headers:{
                        "Authorization": auth.token
                    }
                });
                if (res.data.ok) {
                    console.log("inside true")
                    setOk(true);
                } else {
                    setOk(false);
                }
            } catch (error) {
                console.error("Error checking authentication:", error);
                setOk(false);
            }
        };
        if (auth?.token) {
            console.log(auth.token)
            authCheck();
        }
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner />;
};


