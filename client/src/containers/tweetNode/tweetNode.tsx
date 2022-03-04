import DisplayTweet from "../../commons/models/diplayTweet";
import { TweetDiv } from "./styles";

function TweetNode({ data, nameColor, textColor, backgroundColor, borderColor }: 
    {data: DisplayTweet, color?: string, nameColor?: string, textColor?: string, backgroundColor?: string, borderColor?: string}) {

  return(
    <TweetDiv style={{ backgroundColor: backgroundColor, border: "2px solid " + borderColor, left: data.position.x, top: data.position.y }}>
      <p style={{ color: nameColor }}>{data.name} @{data.username} - {data.stringDate}</p>
      <br/>
      <p style={{ color: textColor }}>{data.text}</p>
    </TweetDiv>
  );
}

TweetNode.defaultProps = {
  nameColor: "#6175ff",
  textColor: "#e6e6e6",
  backgroundColor: "#2b2b2b",
  borderColor: "#6e6e6e"
};

export default TweetNode;