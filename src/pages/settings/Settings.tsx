import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement, useState } from "react";
import { NextPageWithLayout } from "../_app";
import { AddButton, ButtonText } from "@/styles/global";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Row, Col, Button, Modal, Form, Input, Select } from "antd";
import CarouselImages from "@/components/CarouselImages";
import { success } from "@/helpers/notifications";
import { fail } from "@/helpers/notifications";
import ModalInstructuion from "@/components/ModalInstruction";
import { useMutation, useQuery } from "@apollo/client";
import {
  CAROUSEL_ACTIVE,
  CAROUSEL_ARCHIVE,
  CAROUSEL_CATEGORY,
} from "@/graphql/queries";
import logoanim from "../../assets/logo-animated.svg";
import { Loader } from "@/styles/login/styles";
import { Grid } from "./style";
import { ADD_CAROUSEL, REMOVE_CAROUSEL } from "@/graphql/mutations";

const Settings: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInstructionOpen, setInstructionOpen] = useState(false);
  const [form] = Form.useForm();

  const { data: active, loading: loading_active } = useQuery(CAROUSEL_ACTIVE);
  const { data: archive, loading: loading_archive } =
    useQuery(CAROUSEL_ARCHIVE);
  const { data: category, loading: category_loading } =
    useQuery(CAROUSEL_CATEGORY);

  const [addCarousel, { data: carouselData, loading: carouselLoading }] =
    useMutation(ADD_CAROUSEL, {
      refetchQueries: [
        { query: CAROUSEL_ACTIVE },
        { query: CAROUSEL_ARCHIVE },
        "GET_CAROUSEL",
      ],
    });

  const [
    removeCarousel,
    { data: remove_carousel, loading: remove_carousel_loading },
  ] = useMutation(REMOVE_CAROUSEL, {
    refetchQueries: [
      { query: CAROUSEL_ACTIVE },
      { query: CAROUSEL_ARCHIVE },
      "GET_CAROUSEL",
    ],
  });

  const onSave = (values: any) => {
    addCarousel({
      variables: {
        carousel: {
          image: values.image,
          category: values.category,
        },
      },
    });
  };
  const onDelete = (values: any) => {
    console.log(values);
    removeCarousel({
      variables: {
        item: values,
      },
    });
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
      form.submit(), handleOk(), success();
    } catch {
      console.log("fuck you");
    }
  };

  const showInstruction = () => {
    setInstructionOpen(true);
  };

  const closeManual = () => {
    setInstructionOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (
    loading_active ||
    loading_archive ||
    category_loading ||
    carouselLoading ||
    remove_carousel_loading
  ) {
    return (
      <Loader
        style={{ margin: "0 auto", display: "flex" }}
        src={logoanim}
        alt=""
      />
    );
  }

  return (
    <Row justify={"center"}>
      <Col span={23}>
        <div>
          <h2 className="header-inner">Настройки приложения</h2>
          <Button onClick={showModal} type="primary">
            Добавить изображение
          </Button>
        </div>
        <h3 style={{ margin: "10px 0" }}>
          Активные изображения - рекоммендуется ставить статус `&quot;`активный`&quot;` на не
          более, чем пяти изображениях
        </h3>
        <Grid>
          {active?.carousel.map((item: any) => (
            <CarouselImages
              key={item.id}
              image={`${item.image}`}
              delete={() => onDelete(item.id)}
              edit={() => console.log("pressed delete")}
            />
          ))}
        </Grid>

        <h3 style={{ margin: "10px 0" }}>Архив</h3>
        <Grid>
          {archive?.carousel.map((item: any) => (
            <CarouselImages
              key={item.id}
              image={`${item.image}`}
              delete={() => onDelete(item.id)}
              edit={() => console.log("pressed delete")}
            />
          ))}
        </Grid>

        <Modal
          title="Добавить набор"
          open={isModalOpen}
          onOk={() => {
            // form.submit(), handleOk(), success()
            onCheck();
          }}
          okText={"Сохранить"}
          cancelText={"Отменить"}
          onCancel={() => {
            handleCancel(), fail();
          }}
        >
          <Button type="link" href="http://postimages.org" target="blank">
            Хостинг для загрузки
          </Button>
          <Button type="link" onClick={showInstruction}>
            Инстркуция
          </Button>

          <Form form={form} onFinish={(formdata) => onSave(formdata)}>
            <Form.Item
              rules={[
                { required: true, message: "Необходимо добавить изображение!" },
              ]}
              name="image"
            >
              <Input placeholder="URL изображения" required />
            </Form.Item>

            <Form.Item
              rules={[
                { required: true, message: "Необходимо выбрать статус!" },
              ]}
              name="category"
              required
              style={{ width: "300px", marginRight: "20px" }}
            >
              <Select>
                {category?.carouselCategory.map((category: any) => (
                  <Select.Option key={category.id} value={category.id}>
                    {category.category}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          footer={null}
          closable
          onCancel={closeManual}
          open={isInstructionOpen}
          width={1000}
        >
          <ModalInstructuion />
        </Modal>
      </Col>
    </Row>
  );
};

Settings.getLayout = function getLayout(page: ReactElement) {
  return <AdminPage>{page}</AdminPage>;
};

export default Settings;
