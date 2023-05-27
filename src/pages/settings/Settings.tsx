import AdminPage from "@/layouts/AdminPage";
import React, { ReactElement, use, useEffect, useState } from "react";
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
import { Grid } from "../../styles/settings/style";
import { ADD_CAROUSEL, REMOVE_CAROUSEL, UPDATE_CAROUSEL } from "@/graphql/mutations";

const Settings: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInstructionOpen, setInstructionOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [datas, setDatas] = useState({ id: '', category: '', image: '' });
  const [form] = Form.useForm();
  const [upd] = Form.useForm();

  useEffect(() => {
    upd.setFieldsValue(datas)
  }, [upd, datas])


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

  const [updateCarousel] = useMutation(UPDATE_CAROUSEL, {
    refetchQueries: [
      { query: CAROUSEL_ACTIVE },
      { query: CAROUSEL_ARCHIVE }
    ]
  })

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
    removeCarousel({
      variables: {
        item: values,
      },
    });
  };

  const onUpdate = (values: any) => {
    updateCarousel({
      variables: {
        id: values.id,
        carousel: values
      }
    })
  }

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
      form.submit(), handleOk(), success();
    } catch {
      console.log(form.getFieldError)
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

  const openUpdate = (values: any) => {
    setDatas(values);
    setIsUpdateOpen(true);
  }

  const hideUpdate = () => {
    setIsUpdateOpen(false)
  }

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
              edit={() => openUpdate(item)}
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
              edit={() => openUpdate(item)}
            />
          ))}
        </Grid>

        <Modal
          title="Добавить изображение в карусель"
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
          title={"Изменить id - " + datas.id}
          open={isUpdateOpen}
          onOk={() => {
            upd.submit(), hideUpdate()
          }}
          okText={"Сохранить"}
          cancelText={"Отменить"}
          onCancel={() => {
            hideUpdate(), fail();
          }}
        >
          <Button type="link" href="http://postimages.org" target="blank">
            Хостинг для загрузки
          </Button>
          <Button type="link" onClick={showInstruction}>
            Инстркуция
          </Button>

          <Form form={upd} onFinish={(formdata) => onUpdate(formdata)} initialValues={datas}>
            <Form.Item name="id">
              <Input placeholder="id" disabled />
            </Form.Item>
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
