//Data in the Hero section
export async function fetchHeroData() {
  const heroData = [
    {
      img: "/Images/banner1.jpeg",
      title: "Hello World!",
      description: "Discover the best medical centers near you",
      buttonText: "Discover Centers",
      link: "/centers",
    },
    {
      img: "/Images/banner2.jpg",
      title: "Hello World 2!",
      description: "Discover the best portal for you",
      buttonText: "Discover Here",
      link: "/portal",
    },
  ];
  return heroData;
}

//Data in the Footer Section
export async function fetchFooter() {
  const data = [
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Contact Us",
      link: "/contact",
    },
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Contact Us",
      link: "/contact",
    },
  ];
  const footerData = {
    socialMedia: [
      {
        icon: "/Images/fb.png",
        link: "https://www.facebook.com/",
      },
      {
        icon: "/Images/twitter.png",
        link: "https://www.twitter.com/",
      },
      {
        icon: "/Images/pinterest.png",
        link: "https://www.twitter.com/",
      },
      {
        icon: "/Images/yt.png",
        link: "https://www.instagram.com/",
      },
    ],
    footer1: data,
    footer2: data,
    footer3: data,
    footer4: data,
    copyright: "Copyright © 2023 High Court of Manipur. All rights reserved.",
  };
  return footerData;
}

//Data in the Notice Marquee Section
export async function fetchNoticeMarqueue() {
  const data = [
    {
      title:
        "Circular regarding non-accessibility of the official website of Manipur High Court",
      link: "/notice/1",
    },
    {
      title:
        "Circular regarding non-accessibility of the official website of Delhi High Court",
      link: "/notice/2",
    },
  ];
  return data;
}

//Data in the Common Links Section
export async function fetchCommonLinks() {
  const data = [
    {
      icon: "/Icons/advocate_diary.png",
      link: "",
      title: "Advocate e-Diary",
    },
    {
      icon: "/Icons/eDHCR.png",
      link: "",
      title: "e-DHCR, The Official Law Report",
    },
    {
      icon: "/Icons/cause_list.png",
      link: "",
      title: "Cause List",
    },
    {
      icon: "/Icons/certified_copy.png",
      link: "",
      title: "Certified Copy",
    },
    {
      icon: "/Icons/display_board.png",
      link: "",
      title: "Display Board",
    },
    {
      icon: "/Icons/daily_orders.png",
      link: "",
      title: "Daily Orders",
    },
    {
      icon: "/Icons/judgements.png",
      link: "",
      title: "Judgements",
    },
    {
      icon: "/Icons/commercial_court.png",
      link: "",
      title: "Commercial Court",
    },
    {
      icon: "/Icons/e_Filing.png",
      link: "",
      title: "e-Filing",
    },
    {
      icon: "/Icons/e_inspection.png",
      link: "",
      title: "e-Inspection",
    },
    {
      icon: "/Icons/rti_portal.png",
      link: "",
      title: "RTI Portal",
    },
    {
      icon: "/Icons/certified_copy.png",
      link: "",
      title: "Online Certified Copy",
    },
    {
      icon: "/Icons/judges_roster.png",
      link: "",
      title: "Judges' Roster",
    },
    {
      icon: "/Icons/recruitment.png",
      link: "",
      title: "Recruitment",
    },
  ];
  return data;
}

export async function fetchNews() {
  const data = [
    {
      header_id: 1,
      header: "Recruitment",
      data: generateNews(5),
    },
    {
      header_id: 2,
      header: "NEWS/NOTICE/HIGHLIGHTS",
      data: generateNews(5),
    },
    {
      header_id: 2,
      header: "TENDER",
      data: generateNews(5),
    },
    {
      header_id: 2,
      header: "Lok Adalat",
      data: generateNews(5),
    },
    {
      header_id: 2,
      header: "BENCH CONSTITUTIONS",
      data: generateNews(5),
    },
    {
      header_id: 2,
      header: "E-COURTS",
      data: generateNews(5),
    },
    {
      header_id: 2,
      header: "TRANSFER AND POSTINGS",
      data: generateNews(5),
    },
  ];
  return data;
}

function generateNews(number) {
  const randomWords = [
    "technology",
    "sports",
    "politics",
    "science",
    "economy",
    "health",
    "entertainment",
    "education",
    "climate",
    "travel",
    "history",
    "culture",
    "innovation",
    "research",
    "discovery",
    "growth",
    "security",
    "adventure",
    "future",
    "community",
  ];

  const getRandomWords = (count) => {
    const words = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * randomWords.length);
      words.push(randomWords[randomIndex]);
    }
    return words.join(" ");
  };

  const data = Array.from({ length: number }, (_, index) => ({
    news_id: index + 1,
    body: `This is a news article body for news item ${
      index + 1
    }. It contains important details about event ${index + 1}. ${getRandomWords(
      Math.floor(Math.random() * 10) + 5
    )}`, // Adds 5 random words
    date: new Date(2023, Math.floor(index / 3), (index % 30) + 1)
      .toISOString()
      .slice(0, 10), // Generates different dates
    pdf: `https://example.com/pdf/news_${index + 1}.pdf`, // Simulated PDF link
    title: `News Title ${index + 1}`, // Simulated title
  }));
  return data;
}

export async function fetchNewsList(headerId) {
  console.log(headerId);
  const data = generateNews(165);
  return data;
}

export async function fetchHolidays() {
  const data = {
    "2025-02-21": { type: "public_holiday", comment: "State Foundation Day" },
    "2025-03-08": { type: "restricted_holiday", comment: "Women's Day" },
    "2025-04-14": { type: "public_holiday", comment: "Ambedkar Jayanti" },
    "2025-05-01": { type: "public_holiday", comment: "Labour Day" },
    "2025-08-15": { type: "public_holiday", comment: "Independence Day" },
    "2025-10-02": { type: "public_holiday", comment: "Gandhi Jayanti" },
    "2025-12-25": { type: "public_holiday", comment: "Christmas Day" },
  };

  return data;
}
export async function fetchJudges() {
  const data = [
    {
      judge_id: 1,
      name: "D. Krishnakumar",
      title: "Hon'ble Mr. Justice",
      post: "Chief Justice",
      image: "/Judges/justice_1.png",
    },
    {
      judge_id: 2,
      name: "Ahanthem Bimol Singh",
      title: "Hon'ble Mr. Justice",
      post: "Justice",
      image: "/Judges/justice_2.png",
    },
    {
      judge_id: 3,
      name: "A. Guneshwar Sharma",
      title: "Hon'ble Mr. Justice",
      post: "Justice",
      image: "/Judges/justice_3.jpg",
    },
    {
      judge_id: 4,
      name: "Golmei Gaiphulshillu Kabui",
      title: "Hon'ble Mrs. Justice",
      post: "Justice",
      image: "/Judges/justice_4.jpg",
    },
  ];

  return data;
}

export async function fetchGovtLinks() {
  const data = [
    {
      img: "/Clients/client-1.png",
      link: "#",
    },
    {
      img: "/Clients/client-2.png",
      link: "#",
    },
    {
      img: "/Clients/client-3.png",
      link: "#",
    },
    {
      img: "/Clients/client-4.png",
      link: "#",
    },
    {
      img: "/Clients/client-5.png",
      link: "#",
    },
    {
      img: "/Clients/client-6.png",
      link: "#",
    },
  ];
  return data;
}

function generateImageData(start, number, multiplier) {
  start = start * multiplier;
  const data = Array.from({ length: number }, (_, index) => ({
    id: start + index,
    img: `/Gallery/image-${start + index + 1}.jpg`,
    caption: `Image ${start + index + 1}`,
    date: new Date(2023, Math.floor(index / 3), (index % 30) + 1),
  }));
  return data;
}
export async function fetchGalleries() {
  const data = generateImageData(1, 5, 1);
  return data;
}

export async function fetchGalleryImages(id) {
  // console.log(id);
  const data = generateImageData(id, 10, 10);
  return data;
}
export async function fetchMenu() {
  // console.log(id);
  const data = [
    { title: "Home", url: "/" },
    { title: "About", url: "/" },
    { title: "Gallery", url: "/gallery/list" },
    { title: "Contact", url: "/" },
  ];
  return data;
}
