import React, { useState, useEffect } from "react";
import {
  Table,
  Row,
  Col,
  Input,
  Button,
  Form,
  Drawer,
  Space,
  Descriptions,
  Badge,
  Popconfirm,
  Switch,
  notification,
  message,
} from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { callFetchListUser, callUpdateUser } from "../../../api/api";
import moment from "moment";

const ManageUser = () => {
  const [listUser, setListUser] = useState<IUser[]>([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState("");
  const [sortQuery, setSortQuery] = useState("");
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [dataViewDetail, setDataViewDetail] = useState<any>();

  const fetchUserList = async (filter: any) => {
    setIsLoading(true);
    let query = `current=${current}&pageSize=${pageSize}`;
    if (filter) {
      query += `&${filter}`;
    }
    if (sortQuery) {
      query += `&${sortQuery}`;
    }
    const res = await callFetchListUser(query);
    if (res && res.data) {
      setListUser(res.data.result);
      setTotal(res.data.meta.total);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUserList(null);
  }, [current, pageSize, filter, sortQuery]);

  const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
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

  const handleSearch = (filter: any) => {
    fetchUserList(filter);
  };

  const onFinish = (values: any) => {
    let query = "";
    if (values.fullname) {
      query += `&fullname=/${values.fullname}/i`;
    }
    if (values.email) {
      query += `&email=/${values.email}/i`;
    }
    if (query) {
      handleSearch(query);
    }
  };

  const handleClear = () => {
    form.resetFields();
    fetchUserList(null);
  };

  const handleSwitchChange = async (
    record: any,
    checked: boolean,
    type: string
  ) => {
    try {
      let data = {};
      if (type === "active") {
        data = { isActive: checked };
      }
      if (type === "verify") {
        data = { isVerify: checked };
      }

      await callUpdateUser(record?._id, data);
      message.success("User update successfully");
    } catch (err) {
      return notification.error({
        message: "An error occurred",
        description: "User update failed",
        duration: 5,
      });
    }
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      render: (text: any, record: any, index: number) => {
        return (
          <a href="#" onClick={() => showDrawer(record)}>
            {record._id}
          </a>
        );
      },
    },
    {
      title: "Fullname",
      dataIndex: "fullname",
      sorter: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: true,
    },
    {
      title: "Active",
      dataIndex: "isActive",
      render: (text: any, record: any, index: number) => {
        return (
          <Switch
            defaultChecked={record?.isActive}
            onChange={(checked) =>
              handleSwitchChange(record, checked, "active")
            }
          />
        );
      },
    },
    {
      title: "Verify",
      dataIndex: "isVerify",
      render: (text: any, record: any, index: number) => {
        return (
          <Switch
            defaultChecked={record?.isVerify}
            onChange={(checked) =>
              handleSwitchChange(record, checked, "verify")
            }
          />
        );
      },
    },
    {
      title: "Create At",
      dataIndex: "createdAt",
      sorter: true,
      render: (text: any, record: any, index: number) => {
        return <p>{moment(record?.createdAt).format("DD-MM-YYYY HH:mm:ss")}</p>;
      },
    },
    {
      title: "Action",
      render: (text: any, record: any, index: number) => {
        return (
          <div>
            <Popconfirm
              placement="leftTop"
              title={"Confirm user deletion"}
              description={"Are you sure to delete this user?"}
              //   onConfirm={() => handleDeleteUser(record._id)}
              okText="Yes"
              cancelText="No"
            >
              <span style={{ cursor: "pointer", margin: "0 20px" }}>
                <DeleteOutlined style={{ color: "#ff4d4f" }} />
              </span>
            </Popconfirm>

            <span
              style={{ cursor: "pointer", margin: "0 20px" }}
              //   onClick={() => showModalUpdate(record)}
            >
              <EditOutlined style={{ color: "#f57800" }} />
            </span>
          </div>
        );
      },
    },
  ];

  const showDrawer = (record: any) => {
    setOpen(true);
    setDataViewDetail(record);
  };

  return (
    <>
      <Form
        form={form}
        name="form-filter"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Row gutter={[16, 16]} justify="space-between">
          <Col span={8}>
            <Form.Item label="FullName" name="fullname">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button onClick={handleClear} style={{ marginLeft: "10px" }}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>

      <Table
        loading={isLoading}
        style={{ marginTop: "50px" }}
        columns={columns}
        dataSource={listUser}
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

      <Drawer
        title="User detail"
        width="50%"
        onClose={() => setOpen(false)}
        open={open}
        extra={
          <Space>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="primary" onClick={() => setOpen(false)}>
              OK
            </Button>
          </Space>
        }
      >
        <Descriptions title="User Information" bordered column={1}>
          <Descriptions.Item label="ID">
            {dataViewDetail?._id}
          </Descriptions.Item>
          <Descriptions.Item label="Fullname">
            {dataViewDetail?.fullname}
          </Descriptions.Item>
          <Descriptions.Item label="Email">
            {dataViewDetail?.email}
          </Descriptions.Item>

          <Descriptions.Item label="Created At">
            {moment(dataViewDetail?.createdAt).format("DD-MM-YYYY HH:mm:ss")}
          </Descriptions.Item>
          <Descriptions.Item label="Updated At">
            {moment(dataViewDetail?.updatedAt).format("DD-MM-YYYY HH:mm:ss")}
          </Descriptions.Item>
          <Descriptions.Item label="Role">
            <Badge status="processing" text={dataViewDetail?.role.name} />
          </Descriptions.Item>
          <Descriptions.Item label="Live">
            {dataViewDetail?.live}
          </Descriptions.Item>
          <Descriptions.Item label="From">
            {dataViewDetail?.from}
          </Descriptions.Item>
          <Descriptions.Item label="Relationship">
            {dataViewDetail?.relationship}
          </Descriptions.Item>
          <Descriptions.Item label="Note">
            {dataViewDetail?.note}
          </Descriptions.Item>
        </Descriptions>
      </Drawer>
    </>
  );
};

export default ManageUser;
