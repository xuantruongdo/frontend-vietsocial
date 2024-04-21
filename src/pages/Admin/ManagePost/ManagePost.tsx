import { useState, useEffect } from "react";
import { Table, Popconfirm } from "antd";

import { DeleteOutlined } from "@ant-design/icons";
import { callFetchListPost } from "../../../api/api";
import moment from "moment";

const ManagePost = () => {
  const [listPost, setListPost] = useState<IPost[]>([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);
  const [sortQuery, setSortQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchPostList = async (filter: any) => {
    setIsLoading(true);
    let query = `current=${current}&pageSize=${pageSize}`;
    if (filter) {
      query += `&${filter}`;
    }
    if (sortQuery) {
      query += `&${sortQuery}`;
    }
    const res = await callFetchListPost(query);
    if (res && res.data) {
      setListPost(res.data.result);
      setTotal(res.data.meta.total);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPostList(null);
  }, [current, pageSize, sortQuery]);

  const onChange = (pagination: any, sorter: any) => {
    if (pagination && pagination?.current !== current) {
      setCurrent(pagination.current);
    }
    if (pagination && pagination?.pageSize !== pageSize) {
      setPageSize(pagination.pageSize);
      setCurrent(1);
    }

    if (sorter && sorter.field) {
      const q =
        sorter.order === "ascend"
          ? `sort=${sorter.field}`
          : `sort=-${sorter.field}`;

      setSortQuery(q);
    }
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      render: (record: any) => {
        return <a href="#">{record._id}</a>;
      },
    },
    {
      title: "Author",
      dataIndex: "author",
      sorter: true,
      render: (author: any) => author.fullname,
    },
    {
      title: "Content",
      dataIndex: "content",
      sorter: true,
    },

    {
      title: "Create At",
      dataIndex: "createdAt",
      sorter: true,
      render: (record: any) => {
        return <p>{moment(record?.createdAt).format("DD-MM-YYYY HH:mm:ss")}</p>;
      },
    },
    {
      title: "Action",
      render: () => {
        return (
          <div>
            <Popconfirm
              placement="leftTop"
              title={"Confirm post deletion"}
              description={"Are you sure to delete this post?"}
              //   onConfirm={() => handleDeleteUser(record._id)}
              okText="Yes"
              cancelText="No"
            >
              <span style={{ cursor: "pointer", margin: "0 20px" }}>
                <DeleteOutlined style={{ color: "#ff4d4f" }} />
              </span>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        loading={isLoading}
        style={{ marginTop: "50px" }}
        columns={columns}
        dataSource={listPost}
        onChange={onChange}
        rowKey="_id"
        pagination={{
          current: current,
          pageSize: pageSize,
          showSizeChanger: true,
          total: total,
          showTotal: (total, range) => {
            return (
              <div>
                {range[0]} - {range[1]} in {total} rows
              </div>
            );
          },
        }}
      />
    </>
  );
};

export default ManagePost;
