import { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Preload from "../../components/Preload";
import { LoginContext } from "../../contexts/LoginProvider";
import api from "../../services/api";

const ProtectedRoutes = () => {
  const { loading, user, setUser, setLoading } = useContext(LoginContext);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@sgs:token");
      const id = localStorage.getItem("@sgs:id");

      if (token) {
        api
          .get(`/users/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            setUser(data);
          })
          .catch((error) => {
            console.log(error);
            toast.error("Ops, algo deu errado :(");
          });
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  return loading ? (
    <Preload />
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoutes;
