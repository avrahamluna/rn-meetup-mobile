export const fetchMeetups = () =>
  fetch('http://192.168.0.3:3000/api/meetups')
    .then(res => res.json()); 

    