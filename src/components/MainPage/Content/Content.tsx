import React, { useEffect, useState } from "react";
import { Avatar, Button, List, message, Modal, Skeleton } from "antd";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useToggle } from "ahooks";
import ModalsContent from "./ModalsContent";

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

const count = 10;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const Content = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([]);
  const [isModalOpen, { toggle: setModalOpen }] = useToggle(false);
  const [isDeclineOpen, { toggle: setDeclineOpen }] = useToggle(false);
  const [messageApi, contextHolder] = message.useMessage();

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
        <Button onClick={onLoadMore}>...</Button>
      </div>
    ) : null;

  const cancel = () => {
    messageApi.open({
      type: "error",
      content: "Изменения не были сохранены",
    });
  };
  const okay = () => {
    messageApi.open({
      type: "error",
      content: "Изменения не были сохранены",
    });
  };

  return (
    <>
    <Button type="primary" style={{marginBottom: 20,}}><PlusCircleOutlined /> Добавить новый товар</Button>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a onClick={setModalOpen} key="list-loadmore-edit">
                Изменить <EditOutlined />
              </a>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name?.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </Skeleton>
          </List.Item>
        )}
        
      />
      <Modal
        title={"Изменить товар"}
        open={isModalOpen}
        onOk={setModalOpen}
        onCancel={setDeclineOpen}
        cancelText={"Отменить изменения"}
        okText={"Сохранить"}
      >
        <ModalsContent/>
        
      </Modal>
    </>
  );
};

export default Content;