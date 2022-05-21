import { Text, Progress } from "@nextui-org/react";
import React from "react";
import Hero from "./Hero";

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

  console.log(loadingCount);

  return <div>{loading ? <Hero loading={loadingCount} /> : <h1>main</h1>}</div>;
}
