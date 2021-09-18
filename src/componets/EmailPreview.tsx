import React from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import classes from "./EmailPreview.module.css";
interface EmailPreviewProps {
  data : MessageType[],
  user : string
}
const EmailPreview: React.FC<EmailPreviewProps> = (props) => {
  const param: any = useParams();
  const history = useHistory();
  const location = useLocation();
  let path = location.pathname.split("/");
  let currentId = path[3];
  // get message
  const message = props.data.filter(
    (item: MessageType) => item.folder === param.folder && item.to === props.user,
  );
  // show message
  const showMessage = (id: string) => {
    history.push(`/messages/${param.folder}/${id}`);
    // mark that user already read this messages
    localStorage.setItem(id, "1");
  };
  // console.log();

  return (
    <div className={classes.messageList}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sender</th>
            <th>Subject</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {message.map((item: any) => {
            return (
              <tr
                key={item._id}
                onClick={() => showMessage(item._id)}
                className={item._id === currentId ? classes.active : ""}>
                <td
                  className={
                    localStorage.getItem(item._id) === "1" ? "" : classes.unread
                  }></td>
                <td>{item.from}</td>
                <td>{item.subject}</td>
                <td>{item.date.substring(0, 10)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default EmailPreview;
