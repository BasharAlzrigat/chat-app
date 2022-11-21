import { Box, Button, StackDivider, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentMessage, changeMessageList } from "./redux/chatSlice";

function Chat({ socket, username, room }) {

  const dispatch = useDispatch();
  const { currentMessage, messageList } = useSelector((state) => state.chat);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      dispatch(changeMessageList(messageData));
      dispatch(changeCurrentMessage(""));
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("receive_message!!!!", data);
      dispatch(changeMessageList(data));
    });
  }, [socket]);

  return (
    <div className="chat-window">
      <Box width="100%" height="45px" borderTopRadius="6px" bg="heavyPurple">
        <Text class="chat-header" color="white">
          Live Chat
        </Text>
      </Box>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={2}
            align="stretch"
          >
            {messageList.map((messageContent) => {
              return (
                <div
                  className="message"
                  id={username === messageContent.author ? "you" : "other"}
                >
                  <div>
                    <div className="message-content">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className="message-meta">
                      <p id="time">{messageContent.time}</p>
                      <p id="author">{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </VStack>
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            dispatch(changeCurrentMessage(event.target.value));
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <Button onClick={sendMessage}>&#9658;</Button>
      </div>
    </div>
  );
}

export default Chat;
