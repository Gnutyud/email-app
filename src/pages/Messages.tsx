import EmailBox from "../components/EmailBox";
interface MessageProps{
  data : MessageType[],
  user : string
}
const Messages = (props: MessageProps) => {
  return <EmailBox  data={props.data} user={props.user} />;
};
export default Messages;
