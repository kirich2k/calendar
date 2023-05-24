import React from "react";
import styled from "styled-components";

const Footers = styled.footer`
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 82px;
    padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-top: 2px solid #c0c0c0;
    background-color: #f6f6f6;
`;
const Button = styled.button`
    font-size: 26px;
    line-height: 26px;
    color: red;
`;

const Footer: React.FC = () => {
    return (
        <Footers>
            <Button>Today</Button>
        </Footers>
    );
};

export default Footer;
