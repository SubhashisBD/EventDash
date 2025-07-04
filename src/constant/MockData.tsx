export interface EventData {
  Id: number;
  EventTitle: string;
  Date: string;
  Location: string;
  BriefShortDescription: string;
  BriefLongDescription: string;
  Time: string;
  Age: string;
  Language: string;
  Theme: string;
  Type1: string;
  Type2: string;
  PosterPath: string;
  BackDropPath: string;
  Promoted: string;
  Price: string;
}

const MockData: EventData[] = [
  {
    Id: 1,
    EventTitle: "Bismil Ki Mehfil",
    Price: "799",
    Date: "12th July 2025",
    Location: "Delhi",
    BriefShortDescription: "India’s biggest Sufi sensation, Bismil, returns to his hometown for a night that promises to be nothing short of legendary.",
    BriefLongDescription:
      "India’s biggest Sufi sensation, Bismil, returns to his hometown for a night that promises to be nothing short of legendary from intimate gatherings to sold-out arenas across India and the globe. Now, he’s coming full circle with a stadium show that’s set to be the grandest Sufi event ever witnessed on Indian soil.Bismil Ki Mehfil is more than a concert — it’s a soulful experience. A transcendental journey where music becomes prayer, devotion becomes rhythm, and the audience becomes part of something eternal. From powerful renditions of iconic Sufi anthems to stirring original compositions that move hearts across generations, this night will echo in your soul long after the music fades.",
    Time: "6:00",
    Age: "8yrs +",
    Language: "Hindi",
    Theme: "Bollywood, Sufi",
    Type1: "Concerts",
    Type2: "Music Shows",
    PosterPath:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-bismil-ki-mehfil-2025-delhi-0-2025-4-24-t-10-34-13.jpg",
    BackDropPath:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMiBKdWw%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00443289-fskubzkwsa-portrait.jpg",
    Promoted: "True",
  },
  {
    Id: 2,
    EventTitle: "Jazbaa Ft Rekha Bhardwaj Live in Concert",
    Price: "899",
    Date: "27th July 2025",
    Location: "Kolkata",
    BriefShortDescription:
      "A Sufi, Bollywood, and Ghazal singer, Rekha Bhardwaj",
    BriefLongDescription:
      "A Sufi, Bollywood, and Ghazal singer, Rekha Bhardwaj, a National Award  Winning Singer & Bollywood star, has become known throughout the industry for her unique voice which has seen her contribute to the soundtracks of numerous films. Having made her singing debut in 1997, Bhardwaj has collaborated with some of the biggest names in Bollywood music. Creating some of the most memorable and famous songs in recent history Tere Ishq Mein, Kabira, and Namak along with a special bandish in Raag Puriya.",
    Time: "7:00",
    Age: "3yrs +",
    Language: "Hindi",
    Theme: "Bollywood, Sufi, Ghazal",
    Type1: "Concerts",
    Type2: "Music Shows",
    PosterPath:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-jazbaa-ft-rekha-bhardwaj-live-in-concert-0-2025-6-24-t-6-4-21.jpg",
    BackDropPath:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBKdWw%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415475-cbhzytkzkx-portrait.jpg",
    Promoted: "True",
  },
  {
    Id: 3,
    EventTitle: "Dating Game Show by Vivek Samtani",
    Price: "499",
    Date: "9th July 2025",
    Location: "Gurugram",
    BriefShortDescription:
      "Hey this is a game show where it is all about HOW TO impress someone.",
    BriefLongDescription:
      "Dating game show by Vivek Samtani & Pranav Sharma.Hey this is a game show where it is all about HOW TO impress someone.Contestants would be blind folded and at a time 3 people would try to impress them with their pickup lines or questions Guest panel would be there for the judgments and fun banter ",
    Time: "6:00",
    Age: "18yrs +",
    Language: "Hindi,English",
    Theme: "COmedy",
    Type1: "Stand Up Comedy",
    Type2: "Comedy Shows",
    PosterPath:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-dating-game-show-by-vivek-samtani-0-2024-12-1-t-13-26-25.jpg",
    BackDropPath:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCA5IEp1bA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00412450-zzjtmfhzzu-portrait.jpg",
    Promoted: "True",
  },
  {
    Id: 4,
    EventTitle: "Jo Bolta Hai Wahi Hota Hai",
    Price: "999",
    Date: "27th July 2025",
    Location: "Chennai",
    BriefShortDescription:
      "Harsh will leave you in splits with his typical rough demeanour and leave you craving for more.",
    BriefLongDescription:
      "It takes exemplary courage to sit in the first two rows of a Harsh Gujral`s show because he will get you with his highly witty yet charming style.He has been known to find humour in some of the most regular life situations. He has average north Indian looks and height but he believes that the phrase tall dark and handsome was coined only for him.Harsh will leave you in splits with his typical rough demeanour and leave you craving for more.",
    Time: "6:00",
    Age: "18yrs +",
    Language: "Hindi,English",
    Theme: "Comedy",
    Type1: "Stand Up Comedy",
    Type2: "Comedy Shows",
    PosterPath:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-jo-bolta-hai-wahi-hota-hai-ft-harsh-gujral-delhi-0-2025-6-9-t-9-27-54.jpg",
    BackDropPath:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBKdWw%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00404471-plptcayjaq-portrait.jpg",
    Promoted: "True",
  },
  {
    Id: 5,
    EventTitle: "Kisi Ko Batana Mat By Anubhav Singh Bassi",
    Price: "999",
    Date: "2nd August 2025",
    Location: "Chandigarh",
    BriefShortDescription:
      "A memefest is about to begin …but, kisi ko batana mat that we let the secret out of the bag!",
    BriefLongDescription:
      "A memefest is about to begin but, kisi ko batana mat that we let the secret out of the bag!.The star of Indian stand-up Anubhav Singh Bassi is back with all new quirks and wackiest new punchlines for his India Tour ‘Kisi Ko Batana Mat’ in your city. Get ready to rediscover your appetite for stand-up, as Bassi is all equipped with a killer strategy featuring brand new jokes, hilarious wisecracks, side-splitting humour, and a killer content that'll surely leave you in stitches. ",
    Time: "5:00",
    Age: "16yrs +",
    Language: "Hindi",
    Theme: "Comedy",
    Type1: "Stand Up Comedy",
    Type2: "Comedy Shows",
    PosterPath:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kisi-ko-batana-mat-by-anubhav-singh-bassi-delhi-0-2025-3-9-t-9-45-32.jpg",
    BackDropPath:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyIEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00383732-mlgxqtbqst-portrait.jpg",
    Promoted: "True",
  },
  {
    Id: 6,
    EventTitle: "Bismil Ki Mehfil 2025",
    Price: "499",
    Date: "6th July 2025",
    Location: "Delhi",
    BriefShortDescription:
      "We’re so excited to bring you Swiftchella — a brand new Taylor-themed night with Cruel Summer vibes, glitter, friendship bracelets, and back-to-back hits from every era 🎶✨",
    BriefLongDescription:
      "Swifties, this one’s for you 💖 .We’re so excited to bring you Swiftchella — a brand new Taylor-themed night with Cruel Summer vibes, glitter, friendship bracelets, and back-to-back hits from every era 🎶✨.It’s your chance to dress up, sing your heart out, and dance with a room full of people who feel like a mirrorball  too. 🌸",
    Time: "4:00",
    Age: "All age groups",
    Language: "English",
    Theme: "EDM, Pop",
    Type1: "Concerts",
    Type2: "Music Shows",
    PosterPath:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-swiftchella-a-taylor-swift-themed-fan-party-0-2025-4-8-t-4-22-3.jpg",
    BackDropPath:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA2IEp1bA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00441036-fngblacddj-portrait.jpg",
    Promoted: "True",
  },
  {
    Id: 8,
    EventTitle: "Bhuwin Experience",
    Price: "999",
    Date: "23th August 2025",
    Location: "Mumbai",
    BriefShortDescription:
      "Step into a world where music isn’t just heard—it’s felt. The Bhuwin Experience is more than a concert; it’s an intimate journey through sound, emotions, and live-looping magic.",
    BriefLongDescription:
      "Ever feel like life is moving too fast, pulling you in a hundred directions? While we won’t promise a spiritual awakening, we can guarantee a moment to pause, breathe, and groove. Bhuwin Khursija, a master of live looping, crafts melodies that resonate with the soul, blending Sufi, Qawwali, and Bollywood influences into a unique sonic experience.🎶 Soulful Sounds: Lose yourself in Bhuwin’s original compositions and mesmerizing vocals.🔄 Live Looping Magic: Watch music build, layer by layer, in real time.💫 A Vibe Like No Other: This isn’t just a gig—it’s an experience that words and videos can’t capture.",
    Time: "4:00",
    Age: "12yrs +",
    Language: "Hindi",
    Theme: "Acoustic, Indie, Sufi",
    Type1: "Concerts",
    Type2: "Music Shows",
    PosterPath:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-bhuwin-experience-0-2025-3-17-t-10-50-55.jpg",
    BackDropPath:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMyBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00438419-sdzbmngnlj-portrait.jpg",
    Promoted: "True",
  },
  
  {
    Id: 9,
    EventTitle: "Maharashtra Times Presents - SwaraMalhar",
    Price: "499",
    Date: "27th July 2025",
    Location: "Pune",
    BriefShortDescription:
      "SwaraMalhar is an exclusive festival of the rare Malhaar Ragas, which are rendered only during the rains. This event is a Musical prayer to God for Rain.",
    BriefLongDescription:
      "SwaraMalhar is an exclusive festival of the rare Malhaar Ragas, which are rendered only during the rains. This event is a Musical prayer to God for Rain. All the Audience will have the privilege to listen to the Malhaar Ragas such as Miyan Malhaar, Gaud Malhaar, Megh, Megh  Malhaar, Sur Malhaar and many more.",
    Time: "6:30",
    Age: "8yrs +",
    Language: "Marathi, Hindi",
    Theme: "Classical, Semi-Classical",
    Type1: "Concerts",
    Type2: "Music Shows",
    PosterPath:
      "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-maharashtra-times-presents-swaramalhar-0-2025-7-2-t-10-35-32.jpg",
    BackDropPath:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBKdWw%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00448001-lbmtunyxuy-portrait.jpg",
    Promoted: "True",
  },
];

export default MockData;
