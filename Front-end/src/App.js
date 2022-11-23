import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { changeRoom, changeUsername } from "./redux/joinFormSlice";

const socket = io.connect("https://chat-app-back-end-heroku.herokuapp.com/");

function App() {
  const { username, room } = useSelector((state) => state.joinForm);
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(true);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowForm(false);
    }
  };

  return (
    <>
      <div className="App">
        {showForm ? (
          <Box
            variant="with-shadow"
            border="2px"
            w="20%"
            h="280px"
            bg="lightPurple"
          >
            <div className="joinChatContainer">
              <Flex flexDir="column" align="center" justify="center">
                <Text fontSize="5xl" textShadow="1px 1px black" color="white">
                  Join A Chat
                </Text>
                <input
                  type="text"
                  placeholder="John..."
                  onChange={(event) => {
                    dispatch(changeUsername(event.target.value));
                  }}
                />
                <input
                  type="text"
                  placeholder="Room ID..."
                  onChange={(event) => {
                    dispatch(changeRoom(event.target.value));
                  }}
                />
                <Button
                  variant="joinRoom"
                  onClick={joinRoom}
                >
                  Join A Room
                </Button>
              </Flex>
            </div>
          </Box>
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
      </div>
    </>
  );
}

export default App;
