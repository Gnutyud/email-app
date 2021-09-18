import { NavLink, Route, useLocation } from "react-router-dom";
import EmailPreview from "./EmailPreview";
import EmailDetail from "./EmailDetail";
import classes from "./EmailBox.module.css";
import { AiOutlineFolder, AiOutlineFolderOpen } from "react-icons/ai";
import React from "react";
// email folder
interface EmailBoxProps {
  data : MessageType[],
  user : string
}
const emailFolder: string[] = ["inbox","finance","travel","personal","spam","drafts","sent"]
const EmailBox: React.FC<EmailBoxProps> = (props) => {
  const location = useLocation();
  let path = location.pathname.split("/");
  const isOpenFolder = (folderName: string) => {
    return folderName === path[2];
  };
  return (
    <>
      <div className={classes.row}>
        <div className={classes.box}>
          {emailFolder.map((item: string, index: number) => {
            return (
              <NavLink
                key={index}
                activeClassName={classes.active}
                to={`/messages/${item}`}>
                {isOpenFolder(item) ? (
                  <AiOutlineFolderOpen />
                ) : (
                  <AiOutlineFolder />
                )}

                {item}
              </NavLink>
            );
          })}
        </div>
        <Route path="/messages/:folder">
          <EmailPreview data={props.data} user={props.user} />
        </Route>
      </div>
      <Route path="/messages/:folder/:MessageId">
        <EmailDetail data={props.data} user={props.user} />
      </Route>
    </>
  );
};
export default EmailBox;
