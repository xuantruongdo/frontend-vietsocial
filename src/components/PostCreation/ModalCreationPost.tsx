import {
  Button,
  Input,
  Modal,
  Space,
  Spin,
  Typography,
  Upload,
  message,
  notification,
} from "antd";
import { FaUserPlus } from "react-icons/fa";
import { FaFaceLaugh, FaLocationDot } from "react-icons/fa6";
import { MdInsertPhoto } from "react-icons/md";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../constants/constants";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { callCreatePost, callUploadSingleFile } from "../../api/api";

interface IProps {
  fetchPosts: any;
  isModalOpen: boolean;
  closeModal: any;
}

const ModalCreationPost = (props: IProps) => {
  const { fetchPosts, isModalOpen, closeModal } = props;

  const currentUser = useSelector((state: any) => state.account.user);

  const [content, setContent] = useState<string>("")
  const [loadingPost, setLoadingPost] = useState<boolean>(false);
  const [loadingUpload, setLoadingUpload] = useState<boolean>(false);
  const [urlImage, setUrlImage] = useState<string>("");

  const handleCreatePost = async () => {
    if (!content && !urlImage) {
      return notification.error({
        message: "An error occurred",
        description: "Posts without content cannot be posted",
        duration: 5,
      });
    }

    const newData = {
      content,
      image: urlImage,
    };
    setLoadingPost(true);
    const res = await callCreatePost(newData);
    setLoadingPost(false);

    if (res && res.data) {
      setLoadingPost(false);
      fetchPosts();
      closeModal();
      setContent("");
      setUrlImage("");
      message.success("Post created successfully");
    } else {
      notification.error({
        message: "An error occurred",
        description:
          res.message && Array.isArray(res.message)
            ? res.message[0]
            : res.message,
        duration: 5,
      });
    }
  };

  const propsUpload = {
    maxCount: 1,
    multiple: false,
    showUploadList: false,
    accept: ".png, .jpg, .jpeg",
    async customRequest({ file, onSuccess, onError }: any) {
      setLoadingUpload(true);

      const res = await callUploadSingleFile(file);

      setLoadingUpload(false);

      if (res && res.data) {
        setUrlImage(res.data.fileName);
        if (onSuccess) onSuccess("ok");
      } else {
        if (onError) {
          setUrlImage("");
          const error = new Error(res.message);
          onError({ event: error });
        }
      }
    },
    onChange(info: any) {
      if (info.file.status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(
          info?.file?.error?.event?.message ??
            "An error occurred while uploading the file"
        );
      }
    },
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={closeModal}
      footer={[]}
    >
      <Typography
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          color: "#333",
          paddingBottom: "20px",
        }}
      >
        Create post
      </Typography>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div>
          <img
            src={`${BASE_URL}/images/${currentUser?.avatar}`}
            alt=""
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </div>
        <Input.TextArea placeholder="What's on your mind ?" value={content} onChange={(e) => setContent(e.target.value)}/>
      </div>

      <div className="preview">
        {urlImage && (
          <img src={`${BASE_URL}/images/${urlImage}`} alt="post__image" />
        )}

        {!urlImage && loadingUpload && (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        )}
      </div>

      <div className="file__wrapper">
        <p>Add to your post</p>
        <Space>
          <Upload {...propsUpload}>
            <div className="icon photo">
              <MdInsertPhoto style={{ fontSize: 24 }} />
            </div>
          </Upload>

          <div className="icon tag">
            <FaUserPlus style={{ fontSize: 24 }} />
          </div>
          <div className="icon feeling">
            <FaFaceLaugh style={{ fontSize: 24 }} />
          </div>
          <div className="icon location">
            <FaLocationDot style={{ fontSize: 24 }} />
          </div>
        </Space>
      </div>

      <Button
        type="primary"
        loading={loadingPost}
        style={{ width: "100%", marginTop: 30 }}
        onClick={handleCreatePost}
      >
        Post
      </Button>
    </Modal>
  );
};

export default ModalCreationPost;
