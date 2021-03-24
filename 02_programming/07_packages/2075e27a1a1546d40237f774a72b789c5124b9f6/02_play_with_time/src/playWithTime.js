import moment from "moment";

const formatDate = (day) => {
  return moment(day).format("dddd Do MMMM YYYY");
};


const yearsSinceDate = (day2) => {
  return parseInt(moment(day2, "YYYYMMDD").fromNow());;
};


const daysSinceDate = (day4) => {
  return;
};

const getDayFromDate = (day3) => {
  return moment(day3).format("dddd");
};

export { formatDate, yearsSinceDate, getDayFromDate, daysSinceDate };