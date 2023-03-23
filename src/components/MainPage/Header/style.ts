import Image from "next/image";
import styled from "styled-components";

export const Main = styled.div`
width: 100%;
background-color: #F4F5F0;
border-bottom: 1px solid rgba(5, 5, 5, 0.06);
@media(min-width: 768px){
    height: 100px;
}
`

export const AdminLogo = styled(Image)`
height: 70px;
width: auto;
display: flex;

margin: 15px auto;
`