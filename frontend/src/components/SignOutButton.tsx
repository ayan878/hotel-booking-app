import { useMutation, useQueryClient } from "@tanstack/react-query";
import signOutApi from "../api/signOutApi";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const SignOutButton = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      showToast({ message: "Logout Success", type: "SUCCESS" });
      navigate("/"); 
    },
    onError: (error: Error) => {
      showToast({ message: error.message || "Logout failed", type: "ERROR" });
    },
  });
  return (
    <button
      className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100"
      onClick={() => {
        mutation.mutate();
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
