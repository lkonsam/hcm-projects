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
    footer1: [
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
      {
        title: "About Us",
        link: "/about",
      },
      {
        title: "Contact Us",
        link: "/contact",
      },
    ],
    footer2: [
      {
        title: "About Us",
        link: "/about",
      },
      {
        title: "Contact Us",
        link: "/contact",
      },
      {
        title: "Contact Us",
        link: "/contact",
      },
      {
        title: "Contact Us",
        link: "/contact",
      },
      {
        title: "Contact Us",
        link: "/contact",
      },
    ],
    footer3: [
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
    ],
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
