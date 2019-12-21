import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function Trainingcalendar () {
  const localizer = momentLocalizer(moment);

  const [events, setEvents] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch('https://customerrest.herokuapp.com/gettrainings')
    .then(response => response.json())
    .then(data => {
      for(let i = 0; i < data.length; i++) {
        let eventTitle = data[i].activity + '/' + data[i].customer.firstname + ' ' + data[i].customer.lastname;
        let eventStart = moment(data[i].date).toDate();
        let eventEnd = moment(data[i].date + data[i].duration*60000).toDate();
        setEvents(events => [...events, {title: eventTitle, start: eventStart, end: eventEnd}])
      }
    })
    .catch(err => console.error(err))
  }

  return(
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, padding: '20px' }}
      />
    </div>
  )
}
