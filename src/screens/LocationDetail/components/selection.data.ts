import dayjs from 'dayjs';

const date = dayjs('2019-01-25').add(1, 'day').subtract(1, 'year').year(2009).toString();

console.log('date', date);

// const selectionDate = [
//   {
//     id:
//   }
// ]
