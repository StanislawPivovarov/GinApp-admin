import React, { useEffect, useState } from "react";
import { useToggle } from "ahooks";
import {
  Avatar,
  Button,
  Drawer,
  List,
  Modal,
  Popconfirm,
  Skeleton,
  message,
} from "antd";
import UploadImg from "@/components/UploadImg";

const Admin = () => {
  const [open, { toggle: setIsOpen }] = useToggle();
  const [isShown, { toggle: setIsShown }] = useToggle();
  const [isModalOpen, { toggle: setModalIsOpen }] = useToggle();
  const [isPopOpen, { toggle: setPopIsOpen }] = useToggle();

  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([]);
  const [messageApi, contextHolder] = message.useMessage();

  interface DataType {
    gender?: string;
    name: {
      title?: string;
      first?: string;
      last?: string;
    };
    email?: string;
    picture: {
      large?: string;
      medium?: string;
      thumbnail?: string;
    };
    nat?: string;
    loading: boolean;
  }

  const count = 3;
  const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );

    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event("resize"));
      });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  const confirm = () => {
    messageApi.open({
      type: "success",
      content: "?????????????????? ??????????????????!",
    });
  };

  const cancel = () => {
    messageApi.open({
      type: "error",
      content: "?????????????????? ???? ???????? ??????????????????!",
    });
  };

  const renderItems = (item: any) => (
    <List.Item
      actions={[
        <Button onClick={setModalIsOpen} key="list-loadmore-edit">
          ????????????
        </Button>,
      ]}
    >
      <Skeleton avatar title={false} loading={item.loading} active>
        <List.Item.Meta
          avatar={<Avatar src={item.picture.large} />}
          title={<a href="https://ant.design">{item.name?.last}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
        <div>content</div>
      </Skeleton>
    </List.Item>
  );

  return (
    <>
      <div>
        {contextHolder}
        <Button style={{ zIndex: 10 }} onClick={setIsOpen}>
          ffff
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="top"
          onClose={setIsOpen}
          open={open}
          height={"100vh"}
          closable={false}
          zIndex={9}
          headerStyle={{ display: "none" }}
        >
          <div></div>
        </Drawer>

        <h4>???????? ????????????</h4>
        <List
          className="demo-loadmore-list"
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={renderItems}
        />

        <Modal
          title={`?????????????????? ????????????`}
          open={isModalOpen}
          onOk={function () {
            setModalIsOpen();
            confirm();
          }}
          onCancel={function () {
            setModalIsOpen();
            cancel();
          }}
        >
            <UploadImg/>
        </Modal>
      </div>
    </>
  );
};

export default Admin;
