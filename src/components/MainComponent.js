import React from "react";
import Hero from "./Hero";
import UsersList from "./UsersList";

export default function MainComponent() {
  const [loading, setLoading] = React.useState(true);
  const [loadingCount, setLoadingCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLoadingCount((loadingCount) => loadingCount + 1);
    }, 20);
    setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 3000);
  }, []);

  return <div>{loading ? <Hero loading={loadingCount} /> : <UsersList />}</div>;
}
