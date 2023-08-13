import React from "react";
import { createRoot } from "react-dom/client";
import Body from "./src/components/Body";

const root = createRoot(document.getElementById("root"));

const AppLayout = () => {
  return <Body />;
};

root.render(<AppLayout />);
