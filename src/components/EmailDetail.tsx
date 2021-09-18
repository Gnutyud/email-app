import { useParams } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { TiArrowBack } from "react-icons/ti";
import { AiFillForward } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import classes from "./EmailDetail.module.css";
import React from "react";
interface EmailDetailProps {
  data : MessageType[],
  user : string
}
const EmailDetail: React.FC<EmailDetailProps> = (props) => {
  const param: any = useParams();
  const messageDetail = props.data.find(
    (item: MessageType) => item._id === param.MessageId,
  );
  if(messageDetail){
    let date = new Date(messageDetail.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    let time = new Date(messageDetail.date).toLocaleTimeString("en-US");
  
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.left}>
          <h3>{messageDetail?.subject}</h3>
          <p>
            {messageDetail?.from} <BsArrowRight /> {messageDetail?.to}
          </p>
        </div>
        <div className={classes.right}>
          <p>
            {date} {time}
          </p>
          <div className={classes.btnControl}>
            <button className={`${classes.btn} ${classes["btn-primary"]}`}>
              <TiArrowBack />
              Reply
            </button>
            <button className={`${classes.btn} ${classes["btn-primary"]}`}>
              <AiFillForward />
              Forward
            </button>
            <button className={`${classes.btn} ${classes["btn-primary"]}`}>
              <FaTimes />
              Delete
            </button>
          </div>
        </div>
      </header>
      <main className={classes.content}>
        <div>
          {messageDetail?.body
            .split("\n")
            .map((paragraph: string, key: number) => {
              return <p key={key}>{paragraph}</p>;
            })}
        </div>
      </main>
    </div>
  );}else{
    return <h2>Loading</h2>
  }
};
export default EmailDetail;
