import DisplayTweet from "../../commons/models/diplayTweet";
import { TweetDiv } from "./styles";

function TweetNode(props:TweetNodeProps) {

  return(
    <TweetDiv onClick={props.onClick} backgroundColor={props.backgroundColor!} borderColor={props.borderColor!} pos={props.data.position} dimensions={props.data.dimension}>
      <p style={{ color: props.nameColor }}>{props.data.name} @{props.data.username} - {props.data.stringDate}</p>
      <br/>
      <p style={{ color: props.textColor }}>{props.data.text}</p>
    </TweetDiv>
  );
}

export interface TweetNodeProps extends React.HTMLAttributes<HTMLDivElement>{
  data: DisplayTweet, 
  color?: string, 
  nameColor?: string, 
  textColor?: string, 
  backgroundColor?: string, 
  borderColor?: string
}


TweetNode.defaultProps = {
  nameColor: "#6175ff",
  textColor: "#e6e6e6",
  backgroundColor: "#2b2b2b",
  borderColor: "#6e6e6e"
};

export default TweetNode;
