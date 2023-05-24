import React from "react";
import styled from "styled-components";
import Events from "../../Arrays/arrayEvens";
import leftImg from "../../img/left.svg";
import rightImg from "../../img/right.svg";
import getDate from "../../scripts/getDate";

interface IArrDay {
    day: string;
    number?: number;
}

const arrDay: IArrDay[] = [
    {
        day: "M",
    },
    {
        day: "T",
    },
    {
        day: "W",
    },
    {
        day: "T",
    },
    {
        day: "F",
    },
    {
        day: "S",
    },
    {
        day: "S",
    },
];

let monthName: string;

const Headers = styled.header`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 273px;
    display: flex;
    flex-direction: column;
`;

const HeadersContainer = styled.div`
    width: 100%;
    height: 130px;
    padding: 0px 50px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-bottom: 1px solid #c0c0c0;
`;
const Logo = styled.span`
    color: black;
    font-size: 26px;
    line-height: 28px;
`;
const Button = styled.button`
    width: 29px;
    height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Plus = styled.span`
    content: "";
    position: relative;
    width: 100%;
    height: 3px;
    display: flex;
    background-color: red;
    &::before {
        content: "";
        position: absolute;
        top: 0px;
        width: 100%;
        height: 2px;
        transform: rotate(90deg);
        background-color: red;
    }
`;

const MainHeader = styled.div`
    width: 100%;
    height: 143px;
    padding: 18px 35px 19px 103px;
    background-color: #f6f6f6;
    border-bottom: 1px solid #c0c0c0;
`;

const Nav = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const NavDay = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

const DayItem = styled.div`
    max-width: 36px;
    width: 100%;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:last-child {
        margin-right: 0px;
    }
    &.-active {
        position: relative;
        &::before {
            z-index: 5;
            position: absolute;
            content: "";
            top: 25px;
            left: auto;
            width: 50px;
            height: 50px;
            background-color: red;
            border-radius: 50%;
        }
    }
`;

const DayName = styled.span`
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
`;

const DayNumber = styled.span`
    margin-top: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    z-index: 15;
`;

const NavMonth = styled.div`
    margin-top: 20px;
    padding: 0px 7px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
`;
const NavBtn = styled.button`
    width: 12px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
    }
`;

const NavDate = styled.span`
    font-size: 20px;
    line-height: 22px;
    font-weight: bold;
    color: black;
`;

const addEvent = () => {
    let newEvent = prompt(
        `Enter event time: \n YYYY-MM-DD HH:mm:ss`,
        String(
            `${getDate().year}-${
                getDate().month < 10 ? "0" + getDate().month : getDate().month
            }-${getDate().day < 10 ? "0" + getDate().day : getDate().day} ${
                getDate().hourse < 10
                    ? "0" + getDate().hourse
                    : getDate().hourse
            }:${
                getDate().minute < 10
                    ? "0" + getDate().minute
                    : getDate().minute
            }:${
                getDate().second < 10
                    ? "0" + getDate().second
                    : getDate().second
            }`
        )
    );
    if (newEvent !== null) {
        let arrNewEvent: string[] = newEvent?.split(" ");
        if (arrNewEvent.length === 2) {
            let arrDate: string[] = arrNewEvent[0].split("-");
            let arrTime: string[] = arrNewEvent[1].split(":");
            if (arrDate.length === 3) {
                // console.log("Дата в порядке");
                if (arrTime.length === 3) {
                    // console.log("Время в порядке");
                    let dateEvent = {
                        dateNum: Number(arrDate[2]),
                        dateMonth: Number(arrDate[1]),
                        dateYear: Number(arrDate[0]),
                    };
                    let timeEvent = {
                        timeHourse: Number(arrTime[0]),
                        timeMinute: Number(arrTime[1]),
                        timeSecond: Number(arrTime[2]),
                    };
                    let event = {
                        date: dateEvent,
                        time: timeEvent,
                    };
                    Events.push(event);
                } else {
                    console.error("Не правильно указано время(Проверьте ':')");
                }
            } else {
                console.error("Не правильно указана дата(Проверьте '-')");
            }
        } else {
            console.error(
                "Не указана или не правильно указана дата или время(должен быть 1 пробел)"
            );
        }
    }
    console.log(Events);
};

const pushArrDay = () => {
    let nameDay = getDate().nameDay;
    let numberDay = getDate().day;
    let less:number;
    switch (nameDay) {
        case 0:
            less = numberDay - 6;
            for (let o = 0; o < 7; o++) {
                arrDay[o].number = less + o;
            }
            break;
        case 1:
            less = numberDay - 0;
            for (let o = 0; o < 7; o++) {
                arrDay[o].number = less + o;
            }
            break;
        case 2:
            less = numberDay - 1;
            for (let o = 0; o < 7; o++) {
                arrDay[o].number = less + o;
            }
            break;
        case 3:
            less = numberDay - 2;
            for (let o = 0; o < 7; o++) {
                arrDay[o].number = less + o;
            }
            break;
        case 4:
            less = numberDay - 3
            for (let o = 0; o < 7; o++) {
                arrDay[o].number = less + o
            }
            break;
        case 5:
            less = numberDay - 4;
            for (let o = 0; o < 7; o++) {
                arrDay[o].number = less + o;
            }
            break;
        case 6:
            less = numberDay - 5;
            for (let o = 0; o < 7; o++) {
                arrDay[o].number = less + o;
            }
            break;
    }
};

const getNameMonth = () => {
    switch (getDate().month - 1) {
        case 0:
            monthName = "January";
            break;
        case 1:
            monthName = "February";
            break;
        case 2:
            monthName = "March";
            break;
        case 3:
            monthName = "April";
            break;
        case 4:
            monthName = "May";
            break;
        case 5:
            monthName = "June";
            break;
        case 6:
            monthName = "July";
            break;
        case 7:
            monthName = "August";
            break;
        case 8:
            monthName = "September";
            break;
        case 9:
            monthName = "October";
            break;
        case 10:
            monthName = "November";
            break;
        case 11:
            monthName = "December";
            break;
    }
};


const Header: React.FC = () => {
    console.log(getDate());
    getNameMonth();
    pushArrDay();
    return (
        <Headers>
            <HeadersContainer className="header">
                <Logo className="header__logo">Interview Calendar</Logo>
                <Button className="header__btn" onClick={() => addEvent()}>
                    <Plus></Plus>
                </Button>
            </HeadersContainer>
            <MainHeader className="header__main">
                <Nav>
                    <NavDay>
                        {arrDay.map((e, i) => (
                            <DayItem
                                key={i}
                                className={
                                    i + 1 === getDate().nameDay ? "-active" : ""
                                }
                            >
                                <DayName>{e.day}</DayName>
                                <DayNumber>
                                    {e.number ? String(e.number) : "0"}
                                </DayNumber>
                            </DayItem>
                        ))}
                    </NavDay>
                    <NavMonth>
                        <NavBtn>
                            <img src={leftImg} alt="left" />
                        </NavBtn>
                        <NavDate>
                            {monthName ? monthName : "Empty"}{" "}
                            {String(getDate().year)}
                        </NavDate>
                        <NavBtn>
                            <img src={rightImg} alt="right" />
                        </NavBtn>
                    </NavMonth>
                </Nav>
            </MainHeader>
        </Headers>
    );
};

export default Header;
