import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 90%;
  margin-top: 20px;
  align-items: center;
`;

export const Cover = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
`;

export const Name = styled.p`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
`;

export const Description = styled.p`
  text-overflow: ellipsis;
  color: #696969;
`;

export const Content = styled.div`
  margin-left: 20px;
  width: 500px;
`;
