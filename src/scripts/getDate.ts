type TArrDate = {
    nameDay: number;
    hourse: number;
    minute: number;
    second: number;
    day: number;
    month: number;
    year: number;
};

const getDate = () => {
    let date = new Date();
    let arrDate: TArrDate;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (arrDate = {
        nameDay: date.getDay(),
        day: date.getDate(),
        hourse: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
    });
};
export default getDate;
