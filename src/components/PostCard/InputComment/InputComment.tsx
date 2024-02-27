import { Button, Flex, Input } from "antd";
import { IoSend } from "react-icons/io5";

interface IProps {
  content: string;
  setContent: any;
  handleComment: any;
}
const InputComment = (props: IProps) => {
  const { content, setContent, handleComment } = props;

  return (
    <div className="post__comments">
      <Flex align="center" justify="space-between" gap={20}>
        <Input
          placeholder="Add your comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="primary" onClick={() => handleComment(content)}>
          <IoSend />
        </Button>
      </Flex>
    </div>
  );
};

export default InputComment;
