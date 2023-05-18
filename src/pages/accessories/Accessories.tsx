// import AdminPage from "@/layouts/AdminPage";
// import React, { ReactElement, useState } from "react";
// import { NextPageWithLayout } from "../_app";
// import { success, fail } from "@/helpers/notifications";
// import { AddButton, ButtonText } from "@/styles/global";
// import { PlusCircleOutlined } from "@ant-design/icons";
// import { Row, Col, Modal, Avatar, List, Form, Input, Select } from "antd";
// import { ACCESSORIES, CATEGORIES } from "@/graphql/queries";
// import { useMutation, useQuery } from "@apollo/client";
// import ListItem from "@/components/ListItem";
// import form from "antd/es/form";
// // import { Hosting } from "../deserts/styles";
// // import { INSERT_ACCESSORIES,  } from "@/graphql/mutations";
// import logoanim from '../../assets/logo-animated.svg'
// import { Loader } from "@/styles/login/styles";
// import PrivateRoute from "@/auth/PrivateRouter";

// const Accessories: NextPageWithLayout = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isInstructionOpen, setInstructionOpen] = useState(false);
//   const [form] = Form.useForm();

//   const showInstruction = () => {
//     setInstructionOpen(true);
//   };

//   const closeManual = () => {
//     setInstructionOpen(false);
//   };

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   const onSave = (values: any) => {
//     console.log(values);
 
//     addAccess(
//      { variables: {
//         acc: {
//           price: values.price,
//           name: values.name,
//           id: values.id,
//           description: values.description,
//           category: values.category,
//           image: values.image
//         }
//       },}
//     );
//   };
//   const { data, loading } = useQuery(ACCESSORIES);
//   const { data: category } = useQuery(CATEGORIES);

//   const [addAccess, { data: mut, loading: loadmut, error: errmut }] =
//     useMutation(INSERT_ACCESSORIES, {
//       refetchQueries: [{ query: ACCESSORIES }, "ACCESSUARIES"],
//     });

//     if(loading) {
//       return (
//         <Loader style={{margin: "0 auto", display: 'flex'}} src={logoanim} alt=""/>
//       )
//     }
//   return (
//     <PrivateRoute>

    
//     <Row justify={"center"}>
//       <Col span={23}>
//         <div>
//           <h2 className="header-inner">Аксессуары</h2>
//           <AddButton type="primary">
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <PlusCircleOutlined style={{ marginRight: 10, fontSize: 15 }} />
//               <ButtonText onClick={showModal}>Добавить аксессуар</ButtonText>
//             </div>
//           </AddButton>
//         </div>
//         <Modal
//           title="Добавить аксессуары"
//           open={isModalOpen}
//           onOk={() => {
//             form.submit(),
//             handleOk(), success();
//           }}
//           okText={"Сохранить"}
//           cancelText={"Отменить"}
//           onCancel={() => {
//             handleCancel(), fail();
//           }}
//         >
//           <Hosting type="link">Хостинг для загрузки</Hosting>
//           <Hosting type="link" onClick={showInstruction}>
//             Инстркуция
//           </Hosting>

//           <Form form={form} onFinish={(formdata) => onSave(formdata)}>
//             <Form.Item name="image">
//               {/* <ImageUpload /> */}
//               <Input placeholder="URL изображения" required />
//             </Form.Item>

//             <Form.Item name="name" required style={{ marginRight: "20px" }}>
//               <Input placeholder="Название" required />
//             </Form.Item>
//             <Form.Item
//               name="description"
//               required
//               style={{ marginRight: "20px" }}
//             >
//               <Input placeholder="Описание" required />
//             </Form.Item>
//             <Form.Item
//               name="category"
//               required
//               style={{ width: "300px", marginRight: "20px" }}
//             >
//               <Select>
//                 {category?.category.map((category: any) => (
//                   <Select.Option value={category.id}>
//                     {category.name}
//                   </Select.Option>
//                 ))}
//               </Select>
//             </Form.Item>
//             <Form.Item name="price" required style={{ marginRight: "20px" }}>
//               <Input placeholder="Цена" suffix="₽" />
//             </Form.Item>
//           </Form>
//         </Modal>

//         {data?.accessories.map((accessories: any) => (
//           <div key={accessories.id}>
//             <ListItem
//               name={accessories.name}
//               description={accessories.description}
//               image={accessories.image}
//               price={accessories.price}
//               category={accessories.category}
//             />
//           </div>
//         ))}
//       </Col>
//     </Row>
//     </PrivateRoute>
//   );
// };

// Accessories.getLayout = function getLayout(page: ReactElement) {
//   return <AdminPage>{page}</AdminPage>;
// };

// export default Accessories;
