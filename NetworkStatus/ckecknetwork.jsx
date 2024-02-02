import { useEffect, useState } from "react";
import { useLottie } from "lottie-react";
import online from "./online.json";
import offline from "./offline.json";
import { toast } from "react-toastify";
const NetworksStatus = () => {
  const [networkStatus, setNetworkStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", changeStatus);
    window.addEventListener("offline", changeStatus);
    return () => {
      window.removeEventListener("online", changeStatus);
      window.removeEventListener("offline", changeStatus);
    };
  }, []);
  const optionsOnline = {
    animationData: online,
    loop: true,
  };
  const optionsOffline = {
    animationData: offline,
    loop: true,
  };

  const changeStatus = () => {
    setNetworkStatus(navigator.onLine);
    console.log(navigator.onLine);
    if (navigator.onLine) {
      toast("connection Back ,You are online");
    } else {
      toast("Connection Break ");
    }
  };
  const { View } = useLottie(networkStatus ? optionsOnline : optionsOffline);
  return (
    <>
      {" "}
      <div style={{ width: "150px", height: "150px" }}>{View}</div>
      <h1>{networkStatus ? "You are Online" : "You are offline"}</h1>
    </>
  );
};

export default NetworksStatus;
