import { createSlice } from '@reduxjs/toolkit';

const holder = [
  {
    id: '1',
    name: 'Anna Shevchenko',
    avatar_url: 'https://ftp.goit.study/img/avatars/23.jpg',
    birthday: '1996-04-10T22:25:57.010+00:00',
    experience: '5 years',
    reviews: [
      {
        reviewer: 'Olga K.',
        rating: 5,
        comment:
          'Anna is wonderful! My kids loved her and she was always punctual.',
      },
      {
        reviewer: 'Petr S.',
        rating: 4,
        comment:
          "She's great, but sometimes she had to reschedule on short notice.",
      },
    ],
    education: "Bachelor's in Early Childhood Education, First Aid Certified",
    kids_age: '1 to 6 years old',
    price_per_hour: 15,
    location: 'Kyiv, Ukraine',
    about:
      'I love children and have been working with them for over 5 years. I believe in creating a positive and nurturing environment for kids. I also love outdoor activities and crafts.',
    characters: ['patient', 'energetic', 'creative', 'punctual'],
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Maria Kovalenko',
    avatar_url: 'https://ftp.goit.study/img/avatars/10.jpg',
    birthday: '1991-04-10T22:25:57.010+00:00',
    experience: '7 years',
    reviews: [
      {
        reviewer: 'Ivan D.',
        rating: 4.5,
        comment: 'Maria is very caring and knows how to handle kids very well.',
      },
      {
        reviewer: 'Lena R.',
        rating: 5,
        comment:
          'Maria has been a blessing for our family. Our children adore her!',
      },
    ],
    education: "Master's in Child Psychology, CPR Certified",
    kids_age: '6 months to 8 years old',
    price_per_hour: 16,
    location: 'Lviv, Ukraine',
    about:
      'I have a passion for teaching and mentoring children. I aim to help them grow and learn in a safe and loving environment. I am also a trained child psychologist, which helps me in understanding and catering to the unique needs of every child.',
    characters: ['compassionate', 'knowledgeable', 'adaptive', 'trustworthy'],
    rating: 4.75,
  },
  {
    id: '3',
    name: 'Olena Petrenko',
    avatar_url: 'https://ftp.goit.study/img/avatars/37.jpeg',
    birthday: '1999-04-10T22:25:57.010+00:00',
    experience: '6 years',
    reviews: [
      {
        reviewer: 'Sergiy M.',
        rating: 4.7,
        comment: 'Olena is dependable and has a natural way with children.',
      },
      {
        reviewer: 'Tetiana V.',
        rating: 5,
        comment: 'My twins love spending time with her. Highly recommend!',
      },
    ],
    education:
      "Bachelor's in Child Development, Special Needs Child Care Training",
    kids_age: '2 to 10 years old',
    price_per_hour: 17,
    location: 'Odesa, Ukraine',
    about:
      "Being with children brings joy to my day. I've worked with children of various birthday groups, including those with special needs. My approach is hands-on, engaging, and tailored to each child's unique personality.",
    characters: ['empathetic', 'skilled', 'observant', 'enthusiastic'],
    rating: 4.85,
  },
  {
    id: '4',
    name: 'Iryna Vasylchenko',
    avatar_url: 'https://ftp.goit.study/img/avatars/25.jpg',
    birthday: '1999-04-10T22:25:57.010+00:00',
    experience: '4 years',
    reviews: [
      {
        reviewer: 'Dmytro L.',
        rating: 4.8,
        comment:
          "Iryna is fantastic with my toddler. She's always full of creative ideas.",
      },
      {
        reviewer: 'Anastasia P.',
        rating: 4.9,
        comment:
          'Very professional and genuinely cares for children. My son looks forward to the days she comes over.',
      },
    ],
    education:
      "Associate's in Childcare Management, Nutrition for Children Course",
    kids_age: '1 to 5 years old',
    price_per_hour: 16,
    location: 'Kharkiv, Ukraine',
    about:
      'I believe in creating a balanced routine for children, incorporating both learning and play. My background in child nutrition also allows me to ensure kids are eating healthily under my care.',
    characters: ['attentive', 'nurturing', 'resourceful', 'consistent'],
    rating: 4.85,
  },
  {
    id: '5',
    name: 'Kateryna Boyko',
    avatar_url: 'https://ftp.goit.study/img/avatars/30.jpg',
    birthday: '1992-04-10T22:25:57.010+00:00',
    experience: '8 years',
    reviews: [
      {
        reviewer: 'Yaroslav H.',
        rating: 5,
        comment:
          'Kateryna is very patient and kind. My daughter loves her storytelling sessions.',
      },
      {
        reviewer: 'Nataliia Z.',
        rating: 4.5,
        comment:
          "She's proactive and always brings fun activities for the kids.",
      },
    ],
    education:
      "Bachelor's in Childhood Education, Certified in Children's Yoga",
    kids_age: '3 to 9 years old',
    price_per_hour: 19,
    location: 'Dnipro, Ukraine',
    about:
      "I integrate mindfulness and yoga into play, making it a unique experience for children. I'm passionate about holistic child development and believe in cultivating both mind and body.",
    characters: ['calm', 'innovative', 'respectful', 'engaging'],
    rating: 4.75,
  },
  {
    id: '6',
    name: 'Valeriia Dybinka',
    avatar_url: 'https://ftp.goit.study/img/avatars/21.jpg',
    birthday: '1994-04-10T22:25:57.010+00:00',
    experience: '6 years',
    reviews: [
      {
        reviewer: 'Roman T.',
        rating: 5,
        comment:
          "Valeriia is punctual and always brings educational toys. My son learns a lot when she's around.",
      },
      {
        reviewer: 'Oksana P.',
        rating: 4.7,
        comment:
          "She's very gentle with kids and always attentive to their needs.",
      },
    ],
    education:
      "Bachelor's in Early Childhood Development, Child Safety Training",
    kids_age: '6 months to 7 years old',
    price_per_hour: 18,
    location: 'Zaporizhzhia, Ukraine',
    about:
      "I believe every child is unique and has a distinct learning pace. I focus on individual attention and ensure each child's emotional and educational needs are met.",
    characters: ['meticulous', 'caring', 'proactive', 'knowledgeable'],
    rating: 4.85,
  },
  {
    id: '7',
    name: 'Sofiya Ostapenko',
    avatar_url: 'https://ftp.goit.study/img/avatars/2.jpg',
    birthday: '1993-04-10T22:25:57.010+00:00',
    experience: '7 years',
    reviews: [
      {
        reviewer: 'Oleh V.',
        rating: 4.9,
        comment:
          'Sofiya has a gentle approach and is fantastic with our toddler. Always attentive.',
      },
      {
        reviewer: 'Larysa M.',
        rating: 4.8,
        comment:
          'She has a talent for connecting with children. Our daughter warmed up to her immediately.',
      },
    ],
    education: "Master's in Child Psychology, Child First Aid Certification",
    kids_age: '2 to 8 years old',
    price_per_hour: 20,
    location: 'Vinnytsia, Ukraine',
    about:
      "I integrate play with learning and focus on fostering independence in children. I have a keen understanding of child psychology which helps me tailor my approach to each child's needs.",
    characters: ['understanding', 'creative', 'dependable', 'proactive'],
    rating: 4.85,
  },
  {
    id: '8',
    name: 'Tetyana Horbatenko',
    avatar_url: 'https://ftp.goit.study/img/avatars/16.jpg',
    birthday: '1998-04-10T22:25:57.010+00:00',
    experience: '5 years',
    reviews: [
      {
        reviewer: 'Mykhailo B.',
        rating: 5,
        comment:
          'Tetyana is both fun and disciplined. My kids have a great time with her, and they also follow routines well.',
      },
      {
        reviewer: 'Yuliia S.',
        rating: 4.6,
        comment:
          "She's great with arts and crafts and always has activities planned out.",
      },
    ],
    education:
      "Bachelor's in Early Childhood Studies, Certified in Play Therapy",
    kids_age: '3 to 10 years old',
    price_per_hour: 18,
    location: 'Chernihiv, Ukraine',
    about:
      "I'm a firm believer in the power of play for children's development. Whether it's arts and crafts, outdoor games, or reading, I ensure that kids are always engaged and learning.",
    characters: ['enthusiastic', 'organized', 'patient', 'imaginative'],
    rating: 4.8,
  },
  {
    id: '9',
    name: 'Natalia Shevchenko',
    avatar_url: 'https://ftp.goit.study/img/avatars/4.jpg',
    birthday: '1999-04-10T22:25:57.010+00:00',
    experience: '4 years',
    reviews: [
      {
        reviewer: 'Volodymyr K.',
        rating: 4.8,
        comment:
          "Natalia is kind-hearted and always brings a smile to our daughter's face.",
      },
      {
        reviewer: 'Iryna F.',
        rating: 4.7,
        comment:
          "She's always punctual and keeps our son engaged with educational games.",
      },
    ],
    education:
      "Bachelor's in Childhood Education, Montessori Training Certified",
    kids_age: '1 to 7 years old',
    price_per_hour: 17,
    location: 'Poltava, Ukraine',
    about:
      "I'm passionate about the Montessori approach, promoting independence and self-directed learning in children. I believe in creating a supportive environment where kids can be themselves and explore at their own pace.",
    characters: ['compassionate', 'self-motivated', 'adaptive', 'observant'],
    rating: 4.75,
  },
  {
    id: '10',
    name: 'Oksana Melnyk',
    avatar_url: 'https://ftp.goit.study/img/avatars/38.jpeg',
    birthday: '1996-04-10T22:25:57.010+00:00',
    experience: '5 years',
    reviews: [
      {
        reviewer: 'Bohdan P.',
        rating: 4.9,
        comment:
          'Oksana is fantastic with our two sons. They are always excited when she arrives.',
      },
      {
        reviewer: 'Anastasiia D.',
        rating: 4.8,
        comment:
          'Very reliable and great at keeping kids entertained and educated at the same time.',
      },
    ],
    education:
      "Bachelor's in Pedagogy, Certified in Child Behavioral Management",
    kids_age: '2 to 9 years old',
    price_per_hour: 19,
    location: 'Rivne, Ukraine',
    about:
      'My goal is to ensure children have a safe, nurturing environment to grow and learn. I integrate educational games into playtime and always respect the values and rules set by parents.',
    characters: ['responsible', 'energetic', 'respectful', 'creative'],
    rating: 4.85,
  },
  {
    id: '11',
    name: 'Larysa Honcharuk',
    avatar_url: 'https://ftp.goit.study/img/avatars/14.jpg',
    birthday: '1994-04-10T22:25:57.010+00:00',
    experience: '7 years',
    reviews: [
      {
        reviewer: 'Andriy G.',
        rating: 5,
        comment:
          "Larysa has a unique approach to teaching kids while playing. She's been a blessing for our family.",
      },
      {
        reviewer: 'Olga R.',
        rating: 4.9,
        comment:
          'Our daughter always looks forward to the days Larysa babysits. They have a lot of fun learning activities.',
      },
    ],
    education:
      "Master's in Child Development, First Aid Certified for Children",
    kids_age: '6 months to 8 years old',
    price_per_hour: 20,
    location: 'Lviv, Ukraine',
    about:
      "I've dedicated my career to understanding child development. Every child has their own rhythm, and I believe in adapting my methods to fit each individual's needs.",
    characters: ['adaptive', 'kind-hearted', 'intuitive', 'educated'],
    rating: 4.95,
  },
  {
    id: '12',
    name: 'Mariia Kovalenko',
    avatar_url: 'https://ftp.goit.study/img/avatars/18.jpg',
    birthday: '1997-04-10T22:25:57.010+00:00',
    experience: '5 years',
    reviews: [
      {
        reviewer: 'Yaroslava S.',
        rating: 5,
        comment:
          "Mariia is patient and wonderful with our son. He's learning so much while having fun!",
      },
      {
        reviewer: 'Taras N.',
        rating: 4.8,
        comment:
          "She's been reliable and always goes the extra mile for our family.",
      },
    ],
    education:
      "Bachelor's in Educational Psychology, Training in Children's Music Education",
    kids_age: '1 to 6 years old',
    price_per_hour: 18,
    location: 'Odesa, Ukraine',
    about:
      "I'm passionate about combining learning with musical activities. Music has a wonderful way of capturing kids' attention and helping them understand complex ideas.",
    characters: ['musical', 'patient', 'joyful', 'committed'],
    rating: 4.9,
  },
  {
    id: '13',
    name: 'Ivanna Dmytruk',
    avatar_url: 'https://ftp.goit.study/img/avatars/6.jpg',
    birthday: '1995-04-10T22:25:57.010+00:00',
    experience: '6 years',
    reviews: [
      {
        reviewer: 'Pavlo H.',
        rating: 4.7,
        comment:
          'Ivanna has a natural ability to connect with children. Our twins adore her.',
      },
      {
        reviewer: 'Svitlana L.',
        rating: 4.8,
        comment:
          'She is adept at handling multiple kids, keeps them engaged and ensures safety.',
      },
    ],
    education: "Bachelor's in Child Counseling, Training in Play Therapy",
    kids_age: '1 to 10 years old',
    price_per_hour: 19,
    location: 'Kharkiv, Ukraine',
    about:
      'Every child has a world full of imagination. I aim to be a guide in that world, helping them explore and learn in a safe environment. I specialize in handling siblings and ensuring each child gets individual attention.',
    characters: ['compassionate', 'energetic', 'meticulous', 'playful'],
    rating: 4.75,
  },
  {
    id: '14',
    name: 'Kateryna Petrenko',
    avatar_url: 'https://ftp.goit.study/img/avatars/8.jpg',
    birthday: '1996-04-10T22:25:57.010+00:00',
    experience: '6 years',
    reviews: [
      {
        reviewer: 'Maksym K.',
        rating: 5,
        comment:
          'Kateryna always has a structured schedule and my kids have thrived with her around.',
      },
      {
        reviewer: 'Olena B.',
        rating: 4.9,
        comment:
          "She's nurturing and understands the nuances of child behavior really well.",
      },
    ],
    education:
      "Master's in Childcare Management, Special Training in Speech Therapy",
    kids_age: '2 to 11 years old',
    price_per_hour: 20,
    location: 'Kyiv, Ukraine',
    about:
      'I believe in nurturing children in a holistic manner, focusing on their mental, emotional, and physical growth. My background in speech therapy also helps in ensuring their linguistic development is on track.',
    characters: ['dedicated', 'observant', 'nurturing', 'knowledgeable'],
    rating: 4.95,
  },
  {
    id: '15',
    name: 'Anastasiia Zinchenko',
    avatar_url: 'https://ftp.goit.study/img/avatars/12.jpg',
    birthday: '1997-04-10T22:25:57.010+00:00',
    experience: '5 years',
    reviews: [
      {
        reviewer: 'Serhiy T.',
        rating: 5,
        comment:
          "Anastasiia is attentive and has an exceptional way with our toddler. Couldn't be happier!",
      },
      {
        reviewer: 'Hanna P.',
        rating: 4.8,
        comment:
          "Her methods are innovative and she's always thinking of creative ways to engage our son.",
      },
    ],
    education:
      "Bachelor's in Child Development, Special Training in Physical Activities for Kids",
    kids_age: '1 to 7 years old',
    price_per_hour: 19,
    location: 'Zaporizhia, Ukraine',
    about:
      'I believe in incorporating physical activities into the daily routines of kids. It keeps them active, happy, and ensures they have a healthy growth pattern.',
    characters: ['active', 'innovative', 'caring', 'reliable'],
    rating: 4.9,
  },
  {
    id: '16',
    name: 'Yuliia Moroz',
    avatar_url: 'https://ftp.goit.study/img/avatars/31.jpeg',
    birthday: '1999-04-10T22:25:57.010+00:00',
    experience: '4 years',
    reviews: [
      {
        reviewer: 'Roman D.',
        rating: 4.7,
        comment:
          "Yuliia has a gentle approach and a genuine love for kids. Our daughter lights up when she's around.",
      },
      {
        reviewer: 'Nadia Z.',
        rating: 4.8,
        comment:
          "She's resourceful and always brings new educational toys and books for our son. A true gem!",
      },
    ],
    education:
      "Bachelor's in Early Childhood Education, Training in Sign Language for Toddlers",
    kids_age: '6 months to 5 years old',
    price_per_hour: 18,
    location: 'Vinnytsia, Ukraine',
    about:
      'I emphasize communication, even with the youngest ones. Using sign language, I ensure even toddlers can express their needs and feelings effectively.',
    characters: ['gentle', 'communicative', 'innovative', 'loving'],
    rating: 4.75,
  },
];
export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: [],
    isLoading: false,
    isLogin: true,
  },
  reducers: {
    createFavoriveNany(state, { payload }) {
      state.favorites = [...state.favorites, payload];
    },
    delNany(state, { payload }) {
      state.favorites = state.favorites.filter(item => item.id !== payload);
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const selectFavorites = state => state.favorite.favorites;
export const { delNany, createFavoriveNany } = favoriteSlice.actions;
