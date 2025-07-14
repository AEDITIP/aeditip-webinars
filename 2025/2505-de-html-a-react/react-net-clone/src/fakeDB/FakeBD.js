export const fakeLogin = () => {
  return new Promise((res, rej) => {
    try {
      setTimeout(() => {
        res(true);
      }, 3000);
    } catch (error) {
      rej(false);
    }
  });
};

export const fakeLogout = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(false);
    }, 2000);
  });
};

export const fakeGETListOfMovies = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(listofSections);
    }, 3500);
  });
};

const listofSections = [
  {
    sectionName: "Popular on Netflix",
    movies: [
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true",
        alt: "",
      },
    ],
  },
   {
    sectionName: "Trending Now",
    movies: [
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true",
        alt: "",
      },
    ],
  },
   {
    sectionName: "TV Shows",
    movies: [
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true",
        alt: "",
      },
    ],
  },
   {
    sectionName: "Blockbuster Action & Adventure",
    movies: [
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true",
        alt: "",
      },
      {
        src: "https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true",
        alt: "",
      },
    ],
  },
  
];
