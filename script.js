// local reviews data
const reviews = [
    {
      id: 1,
      name: 'Malik Noor',
      job: 'Photographer',
      img: 'person-1.png',
      text: "The staff was great.The receptionist were very helpfull and answered all our questions.The room was clean and bright, and the room service was always on time. Will be coming back !",
    },
    {
        id: 2,
        name: 'Nora Molinas',
        job: 'Teacher',
        img: './images/person-2.png',
        text: 'The hotel’s prime location made exploring the city a breeze, and I can’t wait to return to [HotelName] on my next visit. Highly recommended!',
      },
    {
      id: 3,
      name: 'Mohamed Malek',
      job: 'Doctor',
      img: './images/person-3.png',
      text: 'The hotel’s elegant design, combined with its top-notch amenities, made for a truly relaxing and enjoyable experience.',
    },
    {
      id: 4,
      name: 'Kelly Smith',
      job: 'Architect',
      img: './images/person-4.png',
      text: 'Lovely hotel with a wonderful restaurant. Very friendly staff. Hotel is full of great art. Just a charming place.',
    },
    {
      id: 5,
      name: 'Patrick Jones',
      job: 'Data Entry Associate',
      img: './images/person-5.png',
      text: 'Hotel exceeded my expectations was spotless the staff was amazing and the most comfortable bed I have ever slept in.',
    },
  ];

  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info'); 

  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');

  // set starting item
  let currentItem = 0;

  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
  });
  
