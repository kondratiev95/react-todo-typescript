import React from "react";
import Root from "./components/Root/Root";
import Registration from "./components/Registration/Registration";
export const App: React.FC = () => {
  return (
    <div className="Todo-App">
      <Registration/>
      {/* <Root /> */}
    </div>
  );
};
