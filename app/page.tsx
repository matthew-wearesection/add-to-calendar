import { CalendarEvent, ics } from "calendar-link";
import dayjs from "dayjs";

export default async function Home() {
 
  const event: CalendarEvent = {
    title: 'title',
    description: 'desction',
    start: dayjs(),
    duration: [3, 'hour'],
    
   };
  const icsData = ics(event)


  return (
    <>
    <a href={icsData} download="calendar">
        add to calendar
      </a>
     </>
  );
}
