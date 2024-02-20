import { Avatar, Button, Flex, Input, Space, Typography } from "antd";
import "./ChatBox.scss";
import { MdDelete } from "react-icons/md";
import ScrollableFeed from "react-scrollable-feed";
import { IoSend } from "react-icons/io5";

const ChatBox = () => {
  return (
    <div className="chatbox">
      <Flex align="center" justify="space-between" className="heading">
        <h3>Stella Johnson</h3>
        <Space style={{ color: "red" }}>
          <MdDelete /> Delete Conversation
        </Space>
      </Flex>

      <div className="chatbox__content">
        <ScrollableFeed>
          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>

          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>

          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>

          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>
          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>
          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>
          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>
          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>
          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>
          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>
          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>
          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>
          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>
          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>
          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>
          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>
          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>
          <Flex align="flex-start" gap={10} style={{ margin: "10px 0" }}>
            <div>
              <Avatar
                size={44}
                src="https://image.vtc.vn/resize/th/upload/2020/12/28/ronaldo-06545791.jpeg"
                alt="avatar"
              />
            </div>
            <div className="text">
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>

          <Flex
            align="center"
            justify="flex-end"
            gap={10}
            style={{ margin: "10px 0" }}
          >
            <div
              className="text"
              style={{ backgroundColor: "#2a41e8", color: "white" }}
            >
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>

          <Flex
            align="center"
            justify="flex-end"
            gap={10}
            style={{ margin: "10px 0" }}
          >
            <div
              className="text"
              style={{ backgroundColor: "#2a41e8", color: "white" }}
            >
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>

          <Flex
            align="center"
            justify="flex-end"
            gap={10}
            style={{ margin: "10px 0" }}
          >
            <div
              className="text"
              style={{ backgroundColor: "#2a41e8", color: "white" }}
            >
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                laoreet.
              </p>
            </div>
          </Flex>
        </ScrollableFeed>
        <div className="send__wrapper">
          <Flex align="center" gap={10}>
            <Input placeholder="Basic usage" />
            <Button type="primary">
              <IoSend />
            </Button>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
