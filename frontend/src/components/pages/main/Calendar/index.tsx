import DateCard from "components/common/DateCard";
import { StyledCalendar } from "components/pages/main/Calendar/styles";
import { addDays, subDays } from "date-fns";
import getDaysInMonth from "date-fns/getDaysInMonth";
import lastDayOfMonth from "date-fns/lastDayOfMonth";
import { HTMLAttributes } from "react";

function populateDateArray(startDate: Date, endDate: Date) {
  let currentDate = subDays(startDate, 1);
  const populatedDateArray = [] as Date[];
  while (currentDate.getDate() !== endDate.getDate()) {
    console.log("currentDate", currentDate, "endDate", endDate);
    populatedDateArray.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }
  populatedDateArray.push(endDate);
  return populatedDateArray;
}

const DAY_LOOKUP_ARRAY = ["일", "월", "화", "수", "목", "금", "토"];

interface Props extends HTMLAttributes<HTMLDivElement> {
  selectedDate: Date;
}

function Calendar({ selectedDate, ...props }: Props) {
  const today = new Date(); // 오늘
  const daysInThisMonth = getDaysInMonth(today); // 오늘이 속한 달의 날 개수
  const lastDayInThisMonth = addDays(lastDayOfMonth(today), 1); // 오늘이 속한 달의 마지막 날
  const firstDayInThisMohth = subDays(lastDayInThisMonth, daysInThisMonth - 2);

  const populatedDateArray = populateDateArray(firstDayInThisMohth, lastDayInThisMonth);

  return (
    <StyledCalendar>
      {populatedDateArray.map((date, index) => (
        <DateCard
          dateCardTitle={String(date.getUTCDate())}
          dateCardContent={DAY_LOOKUP_ARRAY[date.getUTCDay()]}
          isToday={date.getUTCDate() === today.getUTCDate() ? true : false}
          isSelected={date.getUTCDate() === selectedDate.getUTCDate() ? true : false}
          key={index}
        />
      ))}
    </StyledCalendar>
  );
}

export default Calendar;
