type TDate = {
    dateNum: number,
    dateMonth: number,
    dateYear: number
}

type TTime = {
    timeHourse: number;
    timeMinute: number;
    timeSecond: number;
};

type TEvents = {
    date: TDate;
    time: TTime;
};

const Events: TEvents[] = [];

export default Events