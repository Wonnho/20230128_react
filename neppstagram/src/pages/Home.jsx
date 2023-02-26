import { useEffect } from "react";
import { getCurrentUser } from "../api/auth";

function Home() {
  useEffect(() => {
    getCurrentUser();
  }, []);

  return <div>Home component</div>;
}

export default Home;
