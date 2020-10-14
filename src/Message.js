import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = (!username ? "Kitchu" : username) == message.username;
  let tStamp = message.timestamp ? message.timestamp.seconds : 1602412075;
  tStamp = new Date(tStamp * 1000).toLocaleDateString();
  tStamp = [
    tStamp.split("/")[1],
    tStamp.split("/")[0],
    tStamp.split("/")[2],
  ].join("-");

  console.log(tStamp);
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent className="message__contents">
          <div className="message__namedate">
            <span className="message__nameblk">
              {!isUser && `${message.username || "Kitchu"}`}
            </span>
            <span className="message__dateblk">{tStamp}</span>
          </div>
          <Typography
            variant="body1"
            component="h2"
            className="message__Typography"
          >
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
