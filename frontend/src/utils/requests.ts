const BASE_URL = process.env.REACT_APP_API_URL;

const dummyData = (a: any, i: any) => {
  const characters = [
    {
      name: "Akame",
      anime: "Akame ga Kill!",
      description:
        "Akame, also known as Akame of the Demon Sword Murasame, is the titular heroine, alongside Tatsumi, and lead anti-heroine of the manga series Akame ga Kill!, as well as the main protagonist of the prequel manga Akame ga Kill! Zero.",
      // src: "https://i.pinimg.com/originals/75/9c/42/759c426ac9e6c4b899939435d051b704.jpg",
      src:
        "https://i.pinimg.com/originals/aa/d4/8c/aad48cc5521e4b6f73f2f98c5fa3872e.gif",
    },
    {
      name: "Albedo",
      anime: "Overlord",
      description:
        "Albedo (アルベド) is the Overseer of the Guardians of the Great Tomb of Nazarick. She is in charge of the general management and supervises the activities of the seven Floor Guardians, meaning that she ranks above the other NPCs in Nazarick.",
      // src: "https://www-s.mlo.me/upco/v/tb2015/tb201510/tb20151019/9aaf766b-c541-4d25-bedd-139c393184f0.jpg",
      src:
        "https://i.pinimg.com/originals/47/c1/d0/47c1d033740908d9d21dbe7327413512.gif",
    },
    {
      name: "Irina Shidou",
      anime: "High School DxD",
      description:
        "Irina Shidou is one of the many female protagonists of High School DxD and the childhood friend of Issei Hyoudou.",
      src:
        "http://pa1.narvii.com/6501/045158e68e3ff8a3ce942ae5a1aeaac73e854928_00.gif",
    },
    {
      name: "Rick Astley",
      anime: "Rick Roll",
      description:
        "Never gonna give you up! Never gonna let you down! Never gonna run around and desert you! Never gonna make you cry! Never gonna say goodbye! Never gonna tell a lie and hurt you!",
      src:
        "https://i.pinimg.com/originals/88/82/bc/8882bcf327896ab79fb97e85ae63a002.gif",
    },
  ];

  return {
    ...characters[Math.floor(Math.random() * characters.length)],
    ratings: {
      positive: Math.floor(Math.random() * 500),
      negative: Math.floor(Math.random() * 500),
    },
    _id: i,
  };
};

export const requests = {
  LIST_ALL: async () => new Array(32).fill(0).map(dummyData),
};
