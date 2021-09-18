import React from "react";
import MainNavigation from "./MainNavigation";
interface LayoutProps {
  users : string[];
  currentAcc : string;
  accountLogin(acc : string):void;
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <React.Fragment>
      <MainNavigation
        users={props.users}
        getAccount={(e: string) => props.accountLogin(e)}
        currentAcc={props.currentAcc}
      />
      <main>{props.children}</main>
    </React.Fragment>
  );
};
export default Layout;
