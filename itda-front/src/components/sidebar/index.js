import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import UserSummary from './UserSummary';
import Flags from './Flags';
import Communities from './Communities';

export default function Sidebar() {
  const [value, onChange] = useState(new Date());
  return (
    <aside className='l-side'>
      <UserSummary />
      <Flags />
      <Calendar className='c-card' calendarType={'US'} onChange={onChange} value={value} />
      <Communities />
    </aside>
  );
}
