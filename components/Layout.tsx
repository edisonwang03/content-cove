import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header />
      <div className="mt-10 ml-20 mr-20">
        {props.children}
      </div>
  </div>
);

export default Layout;
