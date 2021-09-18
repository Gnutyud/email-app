import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Messages from "./pages/Messages";
import Contacts from "./pages/Contacts";
import Preferences from "./pages/Preferences";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";
import messagesData from "./data/messages.json";
function App() {
  const [account, setAccount] = useState<string | null>(
    localStorage.getItem("currentAcc"),
  );
  // console.log(account);

  // Handle Login
  const loginHandler = (acc: string) => {
    console.log(acc);
    localStorage.setItem("currentAcc", acc);
    const currentAcc = localStorage.getItem("currentAcc");
    setAccount(currentAcc);
  };
  // get account
  const getUser = () => {
    const users = messagesData.map((item) => item.to);
    const usersSet = new Set(users);
    return [...usersSet];
  };
  const users = getUser();
  return (
    <Layout
      users={users}
      accountLogin={(acc: string) => loginHandler(acc)}
      currentAcc={account || ""}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/messages" />
          </Route>
          <Route path="/messages">
            {account !== null && account !== "Choose User" ? (
              <Messages data={messagesData} user={account} />
            ) : (
              <h2 className="centered">
                Please choose an account to see your messages!
              </h2>
            )}
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Layout>
  );
}

export default App;
