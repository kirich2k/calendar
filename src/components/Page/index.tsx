import React from "react";
import styled from "styled-components";
import Events from "../../Arrays/arrayEvens";
import arrTime from "../../Arrays/arrayTime";
import getDate from "../../scripts/getDate";
// import getDate from "../../scripts/getDate";

const Article = styled.article`
    position: fixed;
    top: 273px;
    left: 0px;
    width: 100%;
    height: calc(100vh - 355px);
    display: flex;
    flex-direction: column;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
`;

const TimeDesk = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;
const TimeCol = styled.div`
    max-width: 12.3%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const Time = styled.span`
    margin-bottom: 49px;
    padding-left: 17px;
    padding-right: 9px;
    font-size: 18px;
    line-height: 20px;
    color: #c0c0c0;
`;

const EventDesk = styled.div`
    max-width: 87.7%;
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

const Cell = styled.div`
    width: 14.28%;
    height: 69px;
    border: 1px solid #c0c0c0;
    border-left: 0px;
    &:nth-child(-n + 7) {
        margin-top: 10px;
        border-top: 3px solid #c0c0c0;
    }
    &:nth-child(n + 162) {
        border-bottom: 0px;
    }
    &:nth-child(7n) {
        border-right: 0px;
    }
    &.-select {
        background-color: #b3b7ff;
    }
`;

const SelectCell = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let nameClass: string[] = e.currentTarget.className.split(" ");
    for (let y = 0; y < nameClass.length; y++) {
        if (nameClass[y] === "-select") {
            e.currentTarget.classList.remove("-select");
        } else {
            e.currentTarget.classList.add("-select");
        }
    }
};

const newDesk = () => {
    const arrayCells = [];
    Events.map((e)=>{
        if (getDate().year === e.date.dateYear) {
            console.log('Год совпадает');
            if (getDate().month === e.date.dateMonth) {
                console.log("Месяц совпадает");
            }
        }
    })
}

const Main: React.FC = () => {
    // console.log(getDate());
    return (
        <Article className="main">
            <TimeDesk className="main__inner">
                <TimeCol>
                    {arrTime.map((a, t) => (
                        <Time key={t}>{a + `:00`}</Time>
                    ))}
                </TimeCol>
                <EventDesk>
                    {[...new Array(168)].map((_, i) => (
                        <Cell onClick={(e) => SelectCell(e)} key={i}></Cell>
                    ))}
                </EventDesk>
            </TimeDesk>
        </Article>
    );
};

export default Main;
