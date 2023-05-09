import Image from "next/image";
import styled from "styled-components";
import { Button } from "antd";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 250px;
`;

export const Cover = styled(Image)`
border-radius: 20px
`;

export const Delete = styled(Button)`
margin-top: 10px;
width: 120px;
margin-right: 5px
`;

export const ButtonsWrapper = styled.div`
display: flex;
width: 250px;
justify-content: flex-start;
`