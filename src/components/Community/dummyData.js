export const Users = [
  {
    id: 1,
    profilePicture: "assets/person/1.jpeg",
    username: "Safak Kocaoglu",
    occupation: "Software Engineer",
    age: 30,
    livingPlace: "New York City, USA",
    joinedIn: "2020-05-15"
  },
  {
    id: 2,
    profilePicture: "assets/person/2.jpeg",
    username: "Janell Shrum",
    occupation: "Graphic Designer",
    age: 28,
    livingPlace: "Los Angeles, USA",
    joinedIn: "2019-11-20"
  },
  {
    id: 3,
    profilePicture: "assets/person/3.jpeg",
    username: "Alex Durden",
    occupation: "Marketing Manager",
    age: 35,
    livingPlace: "Chicago, USA",
    joinedIn: "2021-02-10"
  },
  {
    id: 4,
    profilePicture: "assets/person/4.jpeg",
    username: "Dora Hawks",
    occupation: "Teacher",
    age: 40,
    livingPlace: "Houston, USA",
    joinedIn: "2018-09-05"
  },
  {
    id: 5,
    profilePicture: "assets/person/5.jpeg",
    username: "Thomas Holden",
    occupation: "Financial Analyst",
    age: 32,
    livingPlace: "San Francisco, USA",
    joinedIn: "2022-03-01"
  },
  {
    id: 6,
    profilePicture: "assets/person/6.jpeg",
    username: "Shirley Beauchamp",
    occupation: "Nurse",
    age: 45,
    livingPlace: "Miami, USA",
    joinedIn: "2017-07-12"
  },
  {
    id: 7,
    profilePicture: "assets/person/7.jpeg",
    username: "Travis Bennett",
    occupation: "Lawyer",
    age: 38,
    livingPlace: "Boston, USA",
    joinedIn: "2020-08-22"
  },
  {
    id: 8,
    profilePicture: "assets/person/8.jpeg",
    username: "Kristen Thomas",
    occupation: "Writer",
    age: 29,
    livingPlace: "Seattle, USA",
    joinedIn: "2019-04-18"
  },
  {
    id: 9,
    profilePicture: "assets/person/9.jpeg",
    username: "Gary Duty",
    occupation: "Chef",
    age: 36,
    livingPlace: "Austin, USA",
    joinedIn: "2023-01-10"
  },
  {
    id: 10,
    profilePicture: "assets/person/10.jpeg",
    username: "Safak Kocaoglu",
    occupation: "Data Scientist",
    age: 33,
    livingPlace: "Denver, USA",
    joinedIn: "2021-11-30"
  }
];

  
  export const Posts = [
    {
      id: 1,
      photo: "assets/post/3.jpeg",
      title: "Apple and Google's AI: Who pays whom?",
      desc: "The uncertainty over whether Apple might pay to license AI from Google, or whether the latter might instead subsidize its programs on Apple’s iPhone, shows just how the “Gen AI” craze is playing havoc with business models.",
      date: "5 mins ago",
      userId: 1,
      like: 32,
      comment: 9,
    },
    {
      id: 2,
      photo: "assets/post/3.jpeg",
      title: "Looking into Abacus Life - ABL",
      desc: "Hey everyone - Was checking out ABL as they were brought up in discord recently so i went over a press release and saw that: \n Abacus Life, Inc. (NASDAQ: ABL) is rebranding its technology division to ABL Tech, signaling a strategic move towards innovation. \n ABL Tech will offer a range of tech-driven solutions, including mortality verification using AI, valuation services, and a blockchain-powered marketplace. \nLed by CEO Jay Jackson and Vice President Vincent Pellegrino, ABL Tech aims to pioneer transformative change in pension risk management and simplify pensions through innovative data solutions. \nThey are also announcing Q4 results on Thursday, March 21, 2024 so im going to stay tuned for that but in the meantime how does everyone feel about this. Cheers guys.",
      date: "15 mins ago",
      userId: 2,
      like: 2,
      comment: 1,
    },
    {
      id: 3,
      title: "Tesla (TSLA): 10-K Analysis (2023 Fiscal Year)",
      desc: `Based on the information provided in the 10-K report, here are the good, bad, and ugly aspects of the company: 
      Good: 
      Strong revenue growth: Tesla reported total revenues of $96.77 billion in 2023, representing an increase of $15.31 billion (19%) compared to the previous year. 
      Profitability: The company achieved a net income of $14.97 billion in 2023, a favorable change of $2.44 billion compared to 2022. 
      Expanding product lineup: Tesla introduced the Cybertruck, a full-size electric pickup truck, in November 2023, and has plans for additional vehicle models, including a next-generation platform. 
      Vertical integration: Tesla is focused on vertically integrating its operations, including developing and manufacturing its own battery cells, to improve efficiency and reduce costs. 
      Technological advancements: The company continues to invest in research and development, particularly in areas such as artificial intelligence, self-driving capabilities, and battery technology. 
      Bad: 
      Supply chain constraints: Tesla has faced challenges in securing adequate supplies of components and raw materials, which could impact production and profitability. 
      Competition: The electric vehicle market is becoming increasingly competitive, with established automakers and new entrants introducing their own electric vehicle models. 
      Regulatory risks: Tesla's operations are subject to various government regulations and incentives, which can change and impact demand for their products. 
      Dependence on key personnel: The company's success is heavily dependent on the leadership and vision of Elon Musk, the CEO, and other key executives. 
      Litigation risks: Tesla is involved in various legal proceedings and investigations, which could result in significant liabilities and reputational damage. `,       
      photo: "assets/post/3.jpeg",
      date: "1 hour ago",
      userId: 3,
      like: 61,
      comment: 2,
    },
    {
      id: 4,
      photo: "assets/post/4.jpeg",
    title: "What do you think of this portfolio?",
    desc: `Rolls Royce, fiverr, sofi, whirlpool, Netflix, baker Hughes, flux power, fubotv, disney, PayPal, tesla, alibaba, Shopify, Starbucks, Roku, alphabet, Microsoft, amazon.
            All have similar ish investments. Rolls Royce has a huge position of 17% though because of gains.`,
    date: "4 hours ago",
    userId: 2,
    like: 7,
    comment: 3,
    },
   
  ];

  export const Stocks = [
    {
      id: 1,
      name: "Apple Inc. (AAPL)",
      price: "141.86",
      priceChange: "(+1.63%)",
      discussedFrequency: "45%", // Adjusted frequency
    },
    {
      id: 2,
      name: "Amazon.com Inc. (AMZN)",
      price: "3,097.53",
      priceChange: "(-1.14%)", // Negative value
      discussedFrequency: "20%", // Adjusted frequency
    },
    {
      id: 3,
      name: "Alphabet Inc. (GOOGL)",
      price: "2,866.74",
      priceChange: "(+1.20%)",
      discussedFrequency: "15%", // Adjusted frequency
    },
    {
      id: 4,
      name: "Tesla Inc. (TSLA)",
      price: "707.64",
      priceChange: "(-2.11%)", // Negative value
      discussedFrequency: "10%", // Adjusted frequency
    },
    {
      id: 5,
      name: "Microsoft Corporation (MSFT)",
      price: "331.85",
      priceChange: "(+0.92%)",
      discussedFrequency: "5%", // Adjusted frequency
    },
    {
      id: 6,
      name: "Meta Platforms, Inc. (META)",
      price: "227.15",
      priceChange: "(+1.79%)",
      discussedFrequency: "3%", // Adjusted frequency
    },
    {
      id: 7,
      name: "NVIDIA Corporation (NVDA)",
      price: "307.15",
      priceChange: "(-2.31%)", // Negative value
      discussedFrequency: "1%", // Adjusted frequency
    },
    {
      id: 8,
      name: "Netflix, Inc. (NFLX)",
      price: "409.88",
      priceChange: "(+1.45%)",
      discussedFrequency: "1%", // Adjusted frequency
    },
    {
      id: 9,
      name: "Facebook, Inc. (FB)",
      price: "206.92",
      priceChange: "(+2.06%)",
      discussedFrequency: "0.5%", // Adjusted frequency
    },
    {
      id: 10,
      name: "Visa Inc. (V)",
      price: "205.81",
      priceChange: "(-1.17%)", // Negative value
      discussedFrequency: "0.5%", // Adjusted frequency
    },
  ];
  
  
  export const groups = [
    {
      name: 'Day Traders Community',
      cover: 'day_traders_cover.jpg',
      members: 2800,
      created: 'February 2021',
      description: 'Join us for real-time discussions on day trading strategies and tips.',
    },
    {
      name: 'Penny Stock Investors Club',
      cover: 'penny_stocks_cover.jpg',
      members: 2100,
      created: 'July 2020',
      description: 'A community dedicated to the discussion and analysis of penny stocks.',
    },
    {
      name: 'Options Trading Forum',
      cover: 'options_trading_cover.jpg',
      members: 3200,
      created: 'October 2019',
      description: 'Discuss options trading strategies, news, and opportunities with fellow traders.',
    },
    {
      name: 'Dividend Investing Group',
      cover: 'dividend_investing_cover.jpg',
      members: 1800,
      created: 'December 2018',
      description: 'Join us to learn and discuss strategies for building a dividend-based portfolio.',
    },
    {
      name: 'Technical Analysis Club',
      cover: 'technical_analysis_cover.jpg',
      members: 2500,
      created: 'March 2020',
      description: 'A community focused on technical analysis techniques for stock trading.',
    },
    {
      name: 'Biotech Stocks Discussion',
      cover: 'biotech_stocks_cover.jpg',
      members: 1500,
      created: 'August 2019',
      description: 'Discuss the latest developments and trends in the biotech sector.',
    },
    {
      name: 'Value Investing Forum',
      cover: 'value_investing_cover.jpg',
      members: 3000,
      created: 'January 2018',
      description: 'Join us to discuss the principles and strategies of value investing.',
    },
    {
      name: 'Futures Market Traders',
      cover: 'futures_market_cover.jpg',
      members: 2200,
      created: 'June 2020',
      description: 'A community for traders interested in futures markets and commodities.',
    },
    {
      name: 'Economic News Analysis Group',
      cover: 'economic_news_cover.jpg',
      members: 2600,
      created: 'September 2019',
      description: 'Stay updated on economic news and discuss its impact on stock markets.',
    },
    {
      name: 'REITs (Real Estate Investment Trusts) Club',
      cover: 'reits_cover.jpg',
      members: 1900,
      created: 'May 2018',
      description: 'Discuss investment opportunities and strategies in the REITs market.',
    },
    // Add more groups here
  ];
  
  