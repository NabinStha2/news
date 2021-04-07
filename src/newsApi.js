const newsArticles = [
  {
    source: {
      id: 0,
      name: "BBC News",
    },
    author: "BBC News",
    title: "Australia and New Zealand to start quarantinefree travel",
    description:
      "Both nations have contained Covid outbreaks and sustained very low or nearzero infection rates.",
    url: "http://www.bbc.co.uk/news/worldaustralia56645990",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/12E70/production/_117742477_lockdown.png",
    publishedAt: "20210406T05:07:27.1713437Z",
    content:
      "image captionAustralians will now able to take holidays in New Zealand\r\nAustralian and New Zealand residents will be able to travel between the two nations without having to quarantine from 19 April.… [+1385 chars]",
  },
  {
    source: {
      id: 2,
      name: "BBC News",
    },
    author: "BBC News",
    title: "Hunter Biden on addiction: My life is not a tabloid",
    description:
      "The US president's son talks to the BBC about addiction, grief and his scrutinised work in Ukraine.",
    url: "http://www.bbc.co.uk/news/worlduscanada56641577",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/56C7/production/_117851222_gettyimages12295207061.jpg",
    publishedAt: "20210406T05:07:23.2973074Z",
    content:
      'media captionHunter Biden says his father "saved" him several times when he was in a dark place with addiction battle\r\nHunter Biden, the son of US President Joe Biden, has reflected on his public str… [+4155 chars]',
  },
  {
    source: {
      id: 3,
      name: "BBC News",
    },
    author: "BBC News",
    title: "Tokyo Olympics: North Korea to skip Games over Covid19 fears",
    description:
      "The announcement puts an end to Seoul's hopes of using the Games to engage with Pyongyang.",
    url: "http://www.bbc.co.uk/news/worldasia56645611",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/DD8B/production/_117851765_olympic.jpg",
    publishedAt: "20210406T03:52:21.1163767Z",
    content:
      "image captionThe Tokyo Olympics will not see North Korea participating\r\nNorth Korea has announced it will not take part in the Tokyo Olympics this year, saying the decision is to protect its athletes… [+2196 chars]",
  },
  {
    source: {
      id: 4,
      name: "BBC News",
    },
    author: "BBC News",
    title: "Janet Yellen pledges greater US international cooperation",
    description:
      "Janet Yellen signals global cooperation is back on the agenda for world's biggest economy.",
    url: "http://www.bbc.co.uk/news/business56635894",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/135D3/production/_117851397_gettyimages1158939913.jpg",
    publishedAt: "20210406T02:52:20.1320492Z",
    content:
      'image copyrightGetty Images\r\nimage captionThe US "isolated ourselves and retreated from the international order that we created," Janet Yellen said\r\nUS Treasury Secretary Janet Yellen has signalled a… [+2394 chars]',
  },
  {
    source: {
      id: 5,
      name: "BBC News",
    },
    author: "BBC News",
    title: "The Nazi concentration camp falling into ruin",
    description:
      "There are concerns that historical evidence will be lost if Terezin's buildings are not maintained.",
    url: "http://www.bbc.co.uk/news/worldeurope56596351",
    urlToImage: "https://ichef.bbci.co.uk/images/ic/400xn/p09ct7qy.jpg",
    publishedAt: "20210405T23:52:20.065129Z",
    content:
      "The Czech town of Terezin Theresienstadt in German is best known as the site of a Nazi concentration camp and ghetto during World War Two.\r\nBut many of the buildings that once housed tens of thousand… [+159 chars]",
  },
  {
    source: {
      id: 6,
      name: "BBC News",
    },
    author: "BBC News",
    title: "Jordan's Prince Hamzah pledges allegiance to king after mediation",
    description:
      "Prince Hamzah issues a statement hours after mediation saying he is committed to the constitution.",
    url: "http://www.bbc.co.uk/news/worldmiddleeast56644578",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/7245/production/_117835292_p09cpc4y.jpg",
    publishedAt: "20210405T23:37:19.426775Z",
    content:
      "media captionPrince Hamzah bin Hussein says his internet and phone lines have been cut\r\nThe former crown prince of Jordan has pledged allegiance to King Abdullah, two days after he said he was placed… [+4913 chars]",
  },
  {
    source: {
      id: 7,
      name: "BBC News",
    },
    author: "BBC News",
    title: "What to know about the Matt Gaetz controversy",
    description:
      "The story includes allegations and counterallegations of extortion, fraud and sex trafficking.",
    url: "http://www.bbc.co.uk/news/worlduscanada56608178",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/12236/production/_117849247_gettyimages1210610071.jpg",
    publishedAt: "20210405T22:22:23.8193202Z",
    content:
      "Anthony ZurcherNorth America reporter@awzurcheron Twitter\r\nimage copyrightGetty Images\r\nMatt Gaetz, a rising star in the Republican Party known for his flashy lifestyle and frequent flirtations with … [+9722 chars]",
  },
  {
    source: {
      id: 8,
      name: "BBC News",
    },
    author: "BBC News",
    title: "More than 1,800 prisoners escape in Nigeria",
    description:
      "Six prisoners have reportedly returned while 35 had refused to escape in the attack by gunmen.",
    url: "http://www.bbc.co.uk/news/worldafrica56644577",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/AC0C/production/_117844044_8c9b0beebcdb434cb81931a185a9c688.jpg",
    publishedAt: "20210405T21:52:25.1693305Z",
    content:
      "image captionPolice have accused the banned separatist group, the Indigenous People of Biafra, of carrying out the attack\r\nMore than 1,800 inmates have escaped from a prison in Nigeria after it was a… [+1512 chars]",
  },
  {
    source: {
      id: 9,
      name: "BBC News",
    },
    author: "BBC News",
    title: "Harvey Weinstein appeals against conviction for sex crimes",
    description:
      "The former film producer was found guilty of two sex crimes in February 2020 and jailed for 23 years.",
    url: "http://www.bbc.co.uk/news/worlduscanada56642644",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/164A9/production/_117850319_0653725581.jpg",
    publishedAt: "20210405T20:52:17.0045156Z",
    content:
      "Lawyers for disgraced American film producer Harvey Weinstein have launched an appeal against his conviction for rape and sexual assault.\r\nWeinstein, 69, was convicted in New York City in February 20… [+691 chars]",
  },
  {
    source: {
      id: 10,
      name: "BBC News",
    },
    author: "BBC News",
    title: "Derek Chauvin trial: Rare testimony from Minneapolis police chief",
    description:
      "In a rare move, the Minneapolis police chief is giving evidence at the trial of a former officer.",
    url: "http://www.bbc.co.uk/news/worlduscanada56642582",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/1623C/production/_117848609_medariaarradondo.jpg",
    publishedAt: "20210405T19:07:23.57093Z",
    content:
      "image copyrightGetty Images\r\nThe Minneapolis police chief who criticised Derek Chauvin over the death of George Floyd has begun his testimony in the former officer's murder trial.\r\nDays after Mr Floy… [+3983 chars]",
  },
];

const articles = [
  {
    source: {
      id: 11,
      name: "CNBC",
    },
    author: "Elliot Smith",
    title:
      "Credit Suisse takes $4.7 billion hit from Archegos hedge fund scandal; execs step down  CNBC",
    description:
      "Investment Bank CEO Brian Chin and Chief Risk and Compliance Officer Lara Warner will step down from their roles with immediate effect.",
    url:
      "https://www.cnbc.com/2021/04/06/creditsuissecutsdividendonhitfromhedgefundscandalinvestmentbankheadandchiefriskofficerstepdown.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/105154457Credit_Suisse_.jpg?v=1571403193",
    publishedAt: "20210406T05:16:00Z",
    content:
      "Credit Suisse on Tuesday announced several highlevel staff departures and proposed a cut to its dividend as it weighs heavy losses from the Archegos Capital saga.\r\nThe Swiss lender now expects a fir… [+2707 chars]",
  },
  {
    source: {
      id: 12,
      name: "Benzinga",
    },
    author: "Madhukumar Warrier",
    title:
      "Tim Cook Says He Has 'Great Admiration And Respect' For Tesla As He Drops Hints On Apple Car  Benzinga",
    description:
      "Apple Inc. (NASDAQ: AAPL) CEO Tim Cook has dropped a few hints about work on the muchanticipated Apple Car and said he has great “admiration and ...",
    url:
      "https://www.benzinga.com/news/21/04/20492920/timcooksayshehasgreatadmirationandrespectforteslaashedropshintsonapplecar",
    urlToImage:
      "https://cdn.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/andywangnfw2a9jgbswunsplash_1.jpg",
    publishedAt: "20210406T04:29:10Z",
    content:
      "Apple Inc. (NASDAQ: AAPL) CEO Tim Cook has dropped a few hints about work on the muchanticipated Apple Car and said he has great “admiration and respect” for Tesla Inc. (NASDAQ: TSLA).\r\nWhat Happene… [+2014 chars]",
  },
  {
    source: {
      id: 13,
      name: "Google News",
    },
    author: null,
    title:
      "Dow Futures: Stock Market Rally Hits Record Highs As Tesla Surges; 3 Tech Giants Break Out  Investor's Business Daily",
    description: null,
    url:
      "https://news.google.com/__i/rss/rd/articles/CBMinQFodHRwczovL3d3dy5pbnZlc3RvcnMuY29tL21hcmtldC10cmVuZC9zdG9jay1tYXJrZXQtdG9kYXkvZG93LWpvbmVzLWZ1dHVyZXMtc3RvY2stbWFya2V0LXJhbGx5LW5ldy1oaWdocy10ZXNsYS1zdG9jay10ZWNoLWdpYW50cy1hbHBoYWJldC1mYWNlYm9vay1taWNyb3NvZnQv0gEA?oc=5",
    urlToImage: null,
    publishedAt: "20210406T04:03:00Z",
    content: null,
  },
  {
    source: {
      id: 14,
      name: "CNN",
    },
    author: null,
    title: "Filmmaker says he potentially uncovered man behind QAnon  CNN ",
    description:
      "CNN's Anderson Cooper speaks to director Cullen Hoback about his HBO documentary series \"Q: Into The Storm\" on potentially uncovering QAnon. HBO is a part of CNN's parent company WarnerMedia.",
    url:
      "https://www.cnn.com/videos/media/2021/04/06/qanonidentityhbofilmmakerac360vpx.cnn",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/210405211207qanonintothestormfilmmakersplitsupertease.jpg",
    publishedAt: "20210406T02:43:00Z",
    content: null,
  },
  {
    source: {
      id: 15,
      name: "fox8.com",
    },
    author: "Nexstar Media Wire",
    title:
      "533 million Facebook users were hacked; find out if you were one of them  WJW FOX 8 News Cleveland",
    description:
      "More than 533 million Facebook users were hacked and their private data released to a hacking forum, multiple reports indicate.",
    url:
      "https://fox8.com/news/533millionfacebookuserswerehackedfindoutifyouwereoneofthem/",
    urlToImage:
      "https://fox8.com/wpcontent/uploads/sites/12/2021/04/Facebook.jpg?w=1280",
    publishedAt: "20210406T01:22:06Z",
    content:
      "(NEXSTAR) – More than 533 million Facebook users were hacked and their private data released to a hacking forum, multiple reports indicate. \r\nAccording to Business Insider, which verified several of … [+1935 chars]",
  },
  {
    source: {
      id: 16,
      name: "BuzzFeed News",
    },
    author: "Katie Notopoulos",
    title:
      "RIP Yahoo Answers, It Died As It Lived: Needlessly and Stupidly  BuzzFeed News",
    description: "We will never find out how babby was formed.",
    url: "https://www.buzzfeednews.com/article/katienotopoulos/ripyahooanswers",
    urlToImage:
      "https://md.buzzfeed.com/buzzfeedstatichttps://md.buzzfeed.com/buzzfeedstatic/static/202104/6/1/enhanced/2a50fc7f1020/original11132161767236321.jpg?crop=990:518;0,71",
    publishedAt: "20210406T01:18:00Z",
    content:
      "Yahoo Answers will be shutting down forever, per an announcement on its site, as first reported by the Verge. Final questions can be submitted until April 20, and the entire site will be scorched fro… [+3173 chars]",
  },
  {
    source: {
      id: 17,
      name: "CNBC",
    },
    author: "Lucy Handley",
    title:
      "Goldman Sachs picks Tesla and 5 other stocks to play the electric vehicle boom  CNBC",
    description:
      "Goldman Sachs listed automaker Tesla as well as related EV industries including battery firms as buyrated stocks that are likely to capitalize on the boom.",
    url:
      "https://www.cnbc.com/2021/04/06/investingideasgoldmanpicksteslaandotherelectricvehiclestocks.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/1068627931617287647973gettyimages1297139597vcg111314122432.jpeg?v=1617288338",
    publishedAt: "20210406T01:17:00Z",
    content:
      "Wall Street bank Goldman Sachs has named its top electric vehicle (EV) stocks as demand for this new type of auto booms.\r\nAnalysts led by Sharmini Chetwode listed automaker Tesla along with five othe… [+281 chars]",
  },
  {
    source: {
      id: 18,
      name: "Fox News",
    },
    author: "Louis Casiano",
    title:
      "Family kicked off Spirit flight for toddler not wearing mask over seizure concerns, mom says  Fox News",
    description:
      "A New Jersey couple temporarily forced to deplane a Spirit Airlines flight departing Orlando, Fla., for Atlantic City accused the budget carrier of lying when it said they  and not their young child  refused to obey a federal mask mandate.",
    url:
      "https://www.foxnews.com/us/spiritairlinesflightdeplanedaftermaskincident",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2019/11/SpiritAirlinesIstock.jpg",
    publishedAt: "20210406T01:15:56Z",
    content:
      "EXCLUSIVE: A New Jersey couple temporarily forced to deplane a Spirit Airlines flight departing Orlando, Fla., for Atlantic City accused the budget carrier of lying when it said they  and not their… [+4532 chars]",
  },
  {
    source: {
      id: 19,
      name: "Benzinga",
    },
    author: "Shivdeep Dhaliwal",
    title: "What Is Going On With Plug Power Stock?  Benzinga",
    description:
      "Plug Power Inc (NASDAQ: PLUG) shares closed over 5% lower in the regular session Monday.\nWhat Happened: The shares fell despite an announcement on the day ...",
    url:
      "https://www.benzinga.com/news/21/04/20492540/whatisgoingonwithplugpowerstock",
    urlToImage:
      "https://cdn.benzinga.com/files/imagecache/og_image_social_share_1200x630/images/story/2012/plug_power_0_7_0_0.jpeg",
    publishedAt: "20210406T01:11:00Z",
    content:
      "Plug Power Inc (NASDAQ: PLUG) shares closed over 5% lower in the regular session Monday.\r\nWhat Happened: The shares fell despite an announcement on the day that the company was partnering with Chart … [+1771 chars]",
  },
  {
    source: {
      id: 20,
      name: "The Hill",
    },
    author: "Joseph Choi",
    title:
      "Walgreens changing vaccine schedule after giving customers extra week between doses | TheHill  The Hill",
    description:
      "Walgreens will begin scheduling doses of the Pfizer coronavirus v...",
    url:
      "https://thehill.com/businessalobbying/businessalobbying/546595walgreenschangingvaccinescheduleaftergiving",
    urlToImage:
      "https://thehill.com/sites/default/files/article_images/taxwalgreens_1.jpg",
    publishedAt: "20210406T00:57:07Z",
    content:
      "Walgreens will begin scheduling doses of the Pfizer coronavirus vaccine three weeks apart, as is recommended by the Centers for Disease Control and Prevention (CDC), following complaints from custome… [+1386 chars]",
  },
  {
    source: {
      id: 21,
      name: "The Verge",
    },
    author: "Ian Carlos Campbell",
    title:
      "The US government will pay you up to $500,000 to design a less annoying face mask  The Verge",
    description:
      "The government has announced a competition to build a better face mask with a total prize of $500,000 at stake. Winners are supposed to address common mask complaints like that the fog glasses or are painful to wear.",
    url:
      "https://www.theverge.com/2021/4/5/22368676/covid19governmentbettermaskcontest500kprizecdc",
    urlToImage:
      "https://cdn.voxcdn.com/thumbor/RiDIM37oKBRG159NDlM8QcwAdwY=/0x146:2040x1214/fitin/1200x630/cdn.voxcdn.com/uploads/chorus_asset/file/19981039/acastro_200512_1777_faceMask_0002.0.jpg",
    publishedAt: "20210406T00:45:55Z",
    content:
      "Imagine a future with a mask you forget youre wearing\r\nIllustration by Alex Castro / The Verge\r\nOver a year into the pandemic, weve seen a wide variety of masks, from totally unsafe fashion pieces, t… [+3233 chars]",
  },
  {
    source: {
      id: 22,
      name: "CNN",
    },
    author:
      'By <a href="/profiles/ivanakottasova">Ivana Kottasová</a>, <a href="/profiles/benwestcott">Ben Westcott</a>, <a href="/profiles/brettmckeehan">Brett McKeehan</a>, Melissa Macaya, <a href="/profiles/melissamahtani">Melissa Mahtani</a> and Mike Hayes, CNN',
    title:
      "The latest on the coronavirus pandemic and vaccines: Live updates  CNN",
    description:
      "The coronavirus pandemic has brought countries to a standstill. Meanwhile, vaccinations have already started in some countries as cases continue to rise. Follow here for the latest.",
    url:
      "https://www.cnn.com/world/livenews/coronaviruspandemicvaccineupdates040521/index.html",
    urlToImage:
      "https://dynaimage.cdn.cnn.com/cnn/digitalimages/org/ba94b00bfb4e41a08c8b9036dd72e351.jpg",
    publishedAt: "20210405T23:58:00Z",
    content:
      "India recorded 103,558 new Covid19 cases on Monday, its highest singleday rise in infections so far in the pandemic.\r\nThe number of new daily cases in India has risen steadily since March 10, with … [+965 chars]",
  },
  {
    source: {
      id: 23,
      name: "The Verge",
    },
    author: "Jay Peters",
    title:
      "Clubhouse’s new direct payments let you toss a coin to creators, and they get 100 percent  The Verge",
    description:
      "Social audio app Clubhouse will let all users pay other creators starting Monday, and Clubhouse says it won’t take a cut of payments. Not everyone will be able to receive payments just yet, though; that’s rolling out in waves.",
    url:
      "https://www.theverge.com/2021/4/5/22368929/clubhousedirectpaymentscreatorsstripe",
    urlToImage:
      "https://cdn.voxcdn.com/thumbor/CHFSUfGmwE5JvqebORAQPjoVhA=/0x588:8192x4877/fitin/1200x630/cdn.voxcdn.com/uploads/chorus_asset/file/22369250/1231631217.jpg",
    publishedAt: "20210405T23:25:33Z",
    content:
      "Receiving payments is rolling out in waves, however\r\nPhoto by Jaap Arriens/NurPhoto via Getty Images\r\nSocial audio app Clubhouse will let all users pay other creators starting Monday. Its the first m… [+1248 chars]",
  },
  {
    source: {
      id: 24,
      name: "CNBC",
    },
    author: "Tyler Clifford",
    title:
      "Cramer's lightning round: Fastly has room to run to the upside  CNBC",
    description:
      "\"Mad Money\" host Jim Cramer rings the lightning round bell, which means he's giving his answers to callers' stock questions at rapid speed.",
    url:
      "https://www.cnbc.com/2021/04/05/cramerslightningroundfastlyhasroomtoruntotheupside.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/1020791281539342565979105501689.jpg?v=1539342593",
    publishedAt: "20210405T23:23:00Z",
    content:
      "Fastly: \"I like it, but it's caught up in the Zoom, Peloton, you know it's caught up in the Zscaler. It's regarded as a highmultiple stock, but I wouldn't sell it here. I think this one has room to … [+754 chars]",
  },
  {
    source: {
      id: 25,
      name: "WDSU New Orleans",
    },
    author: "Greg LaRose",
    title:
      "Louisiana pays out $405 million in unemployment benefits to ineligible recipients  WDSU New Orleans",
    description:
      "The payments were made to 97,585 people who should have received them, according to the Legislative Auditor.",
    url:
      "https://www.wdsu.com/article/louisianapaysoutdollar405millioninunemploymentbenefitstoineligiblerecipients/36026409",
    urlToImage:
      "https://kubrick.htvapps.com/htvprodmedia.s3.amazonaws.com/images/moneypile1501692138.jpg?crop=1.00xw:0.752xh;0,0&resize=1200:*",
    publishedAt: "20210405T23:17:00Z",
    content:
      "NEW ORLEANS —More than $405 million in unemployment benefits were given to ineligible recipients in Louisiana between January and September 2020, according to the Legislative Auditor. The money went … [+4269 chars]",
  },
  {
    source: {
      id: 26,
      name: "Hawaii News Now",
    },
    author: "Dillon Ancheta",
    title:
      "Blangiardi says he’s ‘dead set against’ rolling Oahu back to Tier 2  Hawaii News Now",
    description:
      "Under the city's current tier system, Oahu would move back a tier as early as this week and reinstate a host of restrictions.",
    url:
      "https://www.hawaiinewsnow.com/2021/04/05/mayorblangiardisayshesdeadsetagainstrollingoahubacktier/",
    urlToImage:
      "https://www.hawaiinewsnow.com/resizer/Z5KKXdGFcUxBcRMqqNGXIj7qKc=/1200x0/cloudfrontuseast1.images.arcpublishing.com/raycom/KDVCMXIQIZDNBDGU7NELZQECNU.jpg",
    publishedAt: "20210405T23:15:00Z",
    content:
      "HONOLULU, Hawaii (HawaiiNewsNow)  Under current reopening guidelines, the city is on track to roll back to Tier 2 on Wednesday.\r\nBut Honolulu Mayor Rick Blangiardi says that is the absolute last thi… [+2536 chars]",
  },
  {
    source: {
      id: 27,
      name: "The Washington Post",
    },
    author: "Elahe Izadi, Sarah Ellison",
    title:
      "The battle for Tribune: Inside the campaign to find new owners for a legendary group of newspapers  The Washington Post",
    description:
      "It started with a group of reporters who decided to do everything they could to avoid a hedgefund takeover.",
    url:
      "https://www.washingtonpost.com/lifestyle/media/thebattlefortribuneinsidethecampaigntofindnewownersforalegendarygroupofnewspapers/2021/04/05/84e45cc6925311ebbb495cb2a95f4cec_story.html",
    urlToImage:
      "https://www.washingtonpost.com/wpapps/imrs.php?src=https://arcanglerfishwashpostprodwashpost.s3.amazonaws.com/public/HUO5UYUWGAI6XFRLPDA5QIUIDE.jpg&w=1440",
    publishedAt: "20210405T23:12:00Z",
    content:
      "That meeting over coffee with Ted Venetoulis a former Baltimore County executive who unofficially advised Marylands largest private foundation launched what would become the Save Our Sun campaign.\r\nI… [+9823 chars]",
  },
  {
    source: {
      id: 28,
      name: "Bangor Daily News",
    },
    author: "Rosemary Lausier",
    title: "Internet restored after Spectrum outage  Bangor Daily News",
    description:
      "Spectrum services have been restored to northern New England after an internet outage affected a large part of the state Monday evening.",
    url:
      "http://bangordailynews.com/2021/04/05/news/spectrumreportingstatewideinternetoutage/",
    urlToImage:
      "https://i0.wp.com/bdndata.s3.amazonaws.com/uploads/2020/10/CharterSpectrumWirelessService.jpg?fit=1024%2C680&ssl=1",
    publishedAt: "20210405T22:23:00Z",
    content:
      "PORTLAND Spectrum services have been restored to northern New England after an internet outage affected a large part of the state Monday evening. \r\nSpectrum had identified two separate fiber breaks i… [+601 chars]",
  },
  {
    source: {
      id: 29,
      name: "Google News",
    },
    author: null,
    title:
      "Grayscale says it's committed to launching bitcoin ETF  CNBC Television",
    description: null,
    url:
      "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9SHV5Rl8tTDJXcHfSAQA?oc=5",
    urlToImage: null,
    publishedAt: "20210405T22:17:05Z",
    content: null,
  },
  {
    source: {
      id: 30,
      name: "San Francisco Chronicle",
    },
    author: "Roland Li",
    title:
      "Salesforce paid no federal income tax in 2020 despite $2.6 billion in profit  San Francisco Chronicle",
    description:
      "San Francisco’s largest private employer was among 55 major U.S. companies that owed...",
    url:
      "https://www.sfchronicle.com/business/article/Salesforcepaidnofederalincometaxin202016078479.php",
    urlToImage: "https://s.hdnux.com/photos/73/40/05/15597927/9/rawImage.jpg",
    publishedAt: "20210405T22:13:48Z",
    content:
      "Salesforce, San Francisco’s largest private employer, was among 55 major U.S. companies that paid no federal income taxes in 2020, according to a new report.The cloud computing giant had $2.6 billion… [+2013 chars]",
  },
];

const sportsNewsArticles = [
  {
    id: 71506,
    pid: 7,
    seo:
      "rumour-has-it-de-gea-to-leave-united-as-his-representatives-explore-their-options-7-29x3i40dcd4n13wp4iudaq39z",
    tit:
      "Rumour Has It: De Gea to leave United as his representatives explore their options",
    des:
      "David de Gea's representatives are already sounding out potential buyers as the Spaniard prepares to leave Old Trafford.",
    con:
      "<p>David de Gea's future at Manchester United has been the topic of conversation for months.</p><p>The situation has become muddied in recent weeks during the Spaniard's period of paternity leave but De Gea is back in England and playing second fiddle to Dean Henderson.</p><p>De Gea has been at Old Trafford since 2011 but United manager Ole Gunnar Solskjaer has started Henderson for seven games in a row.</p><p>TOP STORY – DE GEA TO EXIT UNITED</p><p>De Gea's representatives are already sounding out potential buyers and he is set to leave Manchester United this off-season, according to the Daily Mail.</p><p>The 30-year-old is contracted with the Red Devils although no transfer fee has been mentioned yet.</p><p>The report claims Real Madrid, Paris Saint-Germain and Atletico Madrid are potentially interested clubs.</p><p>ROUND-UP</p><p>- ESPN reports Barcelona will continue to pursue Borussia Dortmund's Erling Haaland but a source has said a deal will be \"very difficult\".</p><p>- Tottenham defender Juan Foyth is on loan at Villarreal this season and the Spanish club want to sign him permanently for less than the €15.3million (£13m) option fee, according to Football Insider.</p><p>- Jerome Boateng will leave Bayern Munich as a free agent at the end of this season with the club opting not to offer him a new contract, reports Kicker.</p><p>- Sky Sports are claiming that Zlatan Ibrahimovic is ready to ink a one-year extension with Milan.</p>",
    pub: 1617691206,
    tst: "c1m04highhqg8nv5flo0",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/rumour-has-it-de-gea-to-leave-united-as-his-representatives-explore-their-options-7-29x3i40dcd4n13wp4iudaq39z.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/rumour-has-it-de-gea-to-leave-united-as-his-representatives-explore-their-options-7-29x3i40dcd4n13wp4iudaq39z.jpg",
    cap: "Manchester United goalkeeper David de Gea",
    aut: "Ben Somerford",
    ava: "",
  },
  {
    id: 71502,
    pid: 7,
    seo: "ronald-koeman-el-clasico-7-nyyp0wqt9kkczanr7dtkhgbq",
    tit: "Koeman: Saturday's Clasico is more important than usual",
    des:
      "Barcelona and Real Madrid are both closing on LaLiga leaders Atletico Madrid with nine games to play ahead of Saturday's Clasico.",
    con:
      '<p>Barcelona coach Ronald Koeman admitted the upcoming El Clasico is bigger than normal with the LaLiga title on the line.</p><p>The Catalans moved within one point of leaders Atletico Madrid with Monday\'s 1-0 win over Real Valladolid, with third-placed Real Madrid a further two points back.</p><p>Atletico have dropped points in five of their past eight league fixtures, including Sunday\'s 1-0 loss to Sevilla, opening the door in the title race.</p><p>Barcelona make the trip to the capital to play Madrid on Saturday, while Atletico meet fifth-placed Real Betis.</p><p>"I think the Clasico is always important," Koeman said.</p><p>"Of course, it\'s maybe more important now because of the situation in the league, where we and Real Madrid are fighting against Atletico Madrid to win the title this season.</p><p>"Of course, it\'s an important game with two big, big teams in the world and of course it\'s an important result for us to get more possibilities to win the title."</p><p>Barcelona will enter the El Clasico in excellent league form, having won their past six LaLiga matches and going unbeaten across 19 matches.</p><p>Madrid are unbeaten in their past nine in the league and have won their past three LaLiga matches.</p><p>"It was really important to win tonight after the results in the league, to be more close to Atletico at one point now," Koeman added. "But also Madrid is close to them and will be really emotional until the end of the season.</p><p>"The team is working good. We\'re confident we can win the title but as we saw today, every game is difficult."</p>',
    pub: 1617673560,
    tst: "c1lrqm2ghhqg8nv5flng",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/ronald-koeman-el-clasico-7-nyyp0wqt9kkczanr7dtkhgbq.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/ronald-koeman-el-clasico-7-nyyp0wqt9kkczanr7dtkhgbq.jpg",
    cap: "Barcelona head coach Ronald Koeman",
    aut: "Ben Somerford",
    ava: "",
  },
  {
    id: 71501,
    pid: 7,
    seo:
      "hes-made-a-big-difference-moyes-hails-lingard-impact-7-1w8jnt7o5gz991or9r4to3z3q6",
    tit: "'He's made a big difference': Moyes hails Lingard impact",
    des:
      "Jesse Lingard has scored six goals and provided three assists since debuting for West Ham on loan from Manchester United in February.",
    con:
      '<p>West Ham United coach David Moyes has heaped praise on Jesse Lingard who has been involved in more Premier League goals than any other player since his Hammers debut.</p><p>Lingard scored West Ham\'s opening goal in Monday\'s 3-2 win away to Wolverhampton which sees Moyes\' side move above Chelsea in fourth spot.</p><p>The on-loan Manchester United winger has scored six goals and provided three assists since debuting for the Hammers on February 3.</p><p>"We were worried about their speed, when you think about the speed Adama Traore’s got and Pedro Neto’s got, so we had a real concern about them, but I’ve got to say Jesse’s speed was there too," Moyes said.</p><p>"He showed a bit of old-fashioned dribbling and used his speed to get away from people.</p><p>"I said to him at the end that he’s made a big difference and I don’t give praise too easily, but I certainly gave it to Jesse tonight."</p><p>The 28-year-old winger is enjoying near career-best form having fallen out of favour at Old Trafford in recent seasons.</p><p>"It’s just consistency behind my form I think," Lingard said.</p><p>"Obviously I hadn’t played much for the past two years, so to be playing week-in, week-out and keeping up this form is great, but the team have helped me tremendously."</p>',
    pub: 1617665277,
    tst: "c1lppvaghhqg8nv5flm0",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/hes-made-a-big-difference-moyes-hails-lingard-impact-7-1w8jnt7o5gz991or9r4to3z3q6.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/hes-made-a-big-difference-moyes-hails-lingard-impact-7-1w8jnt7o5gz991or9r4to3z3q6.jpg",
    cap: "Moyes Lingard",
    aut: "Ben Somerford",
    ava: "",
  },
  {
    id: 71500,
    pid: 7,
    seo:
      "koeman-barcelona-had-to-suffer-to-beat-valladolid-7-16cxqju3cq7631ikl79uiiyczm",
    tit: "Koeman: Barcelona had to suffer to beat Valladolid",
    des:
      "Barcelona were not at their best against Valladolid but their character pleased head coach Ronald Koeman.",
    con:
      '<p>Barcelona showed they knew how to suffer in order to beat Real Valladolid, much to the satisfaction of boss Ronald Koeman.</p><p>Ousmane Dembele\'s 90th-minute strike gave the Blaugrana a 1-0 victory over their relegation-threatened opponents at Camp Nou, cutting the gap to leaders Atletico Madrid to a solitary point.</p><p>Real Madrid are up next in El Clasico this weekend, with a thrilling three-way title battle looking set to go to the wire.</p><p>If any team looks capable of pulling clear it is Barca, who have won 13 and drawn one in LaLiga in 2021, although they were far from their fluent best for long periods on Monday – something Koeman acknowledged.</p><p>"You have to know how to suffer in all the games, we knew how to do it. So yes, we deserved to win," he told reporters.</p><p>"It is true that we have not been at the level of the last games , but it is normal that sometimes games like this happen.</p><p>"I think we lacked a bit of freshness, it could be because of the international break. So yes, we are now able to win our games and be champions."</p><p>That Barca\'s title destiny is now in their hands owes much to France winger Dembele, who is enjoying his most consistent run of form and fitness since a big-money 2017 switch from Borussia Dortmund in 2017.</p><p>"Of course he is an important player, he has shown it today with his game, he has given us the points," Koeman said.</p><p>"His form this year is very good. Physically he has improved a lot and that has been the key to his consistency.</p><p>"I would like him to stay with us."</p><p>After the match, Barcelona announced Philippe Coutinho has undergone a successful meniscus procedure.</p><p>The playmaker has not featured in 2021 due to his knee injury.</p>',
    pub: 1617663358,
    tst: "c1lpavighhqg8nv5flj0",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/koeman-barcelona-had-to-suffer-to-beat-valladolid-7-16cxqju3cq7631ikl79uiiyczm.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/koeman-barcelona-had-to-suffer-to-beat-valladolid-7-16cxqju3cq7631ikl79uiiyczm.jpg",
    cap: "Ronald Koeman during Barcelona's win over Valladolid",
    aut: "Dom Farrell",
    ava: "",
  },
  {
    id: 71499,
    pid: 7,
    seo:
      "barca-ousmane-dembele-benefits-of-hard-toil-clement-lenglet-7-1dkm5y21ncn8q1aor73c6wlrh7",
    tit: "Barca hero Dembele reaping the benefits of hard toil, says Lenglet",
    des:
      "Barcelona winger Ousmane Dembele has struggled for form and fitness over recent seasons but stepped up against Real Valladolid.",
    con:
      "<p>Ousmane Dembele's struggles for fitness and form at Barcelona are deservedly coming right at the perfect time, according to team-mate Clement Lenglet.</p><p>Barca looked set to be held to a frustrating 0-0 draw at home to Real Valladolid on Monday before Dembele volleyed a 90th-minute winner – victory closing Ronald Koeman's side to within a point of leaders Atletico Madrid with nine games of the LaLiga season remaining.</p><p>Since moving to Camp Nou from Borussia Dortmund for an initial €105million in 2017, the 23-year-old France winger has been beset by injury problems.</p><p>But Dembele has become an increasingly integral member of Koeman's team since the turn of the year, forming a fruitful attacking alliance with Lionel Messi and Antoine Griezmann.</p><p>Griezmann was substituted against Valladolid and Messi was frustrated by former team-mate Jordi Masip in the visitors' goal, leaving Dembele to step forward as the hero.</p><p>\"It doesn't surprise me,\" Lenglet told LaLiga TV. \"He couldn't play a lot of games because of injuries and now it looks like everything is calm in that respect.</p><p>\"When he is physically well he's a very good dribbler, he's got two good feet, a lot of speed. He gives us a lot.</p><p>\"I'm very happy for him because he's worked hard for this and he deserves it.\"</p><p>Dembele was also involved in the game's other key moment, when Valladolid midfielder Oscar Plano was sent off for bring him down in the 79th minute.</p><p>Although Plano's challenge was unquestionably cynical, the red card came as a surprise to his team-mates.</p><p>Nevertheless, Lenglet felt the punishment fitted the crime.</p><p>\"The red card was [decided] very quick,\" he said. \"Ousmane took a very hard foul from behind, that's why the ref sanctioned him in that way.</p><p>\"I think the card is deserved because of the foul from behind.\"</p><p>Next up for Barcelona is a crunch Clasico clash at Real Madrid on Saturday, with their bitter rivals two points behind them in third as an intriguing title race reaches boiling point.</p><p>\"It's proved this league is very difficult. We’ve got to fight to win every game,\" Lenglet added.</p><p>\"It's the fruit of our hard work these results. We've worked very hard in these last few months, things are going better for us but there's a long way to go.\"</p>",
    pub: 1617660415,
    tst: "c1lojvqghhqg8nv5flig",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/barca-ousmane-dembele-benefits-of-hard-toil-clement-lenglet-7-1dkm5y21ncn8q1aor73c6wlrh7.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/barca-ousmane-dembele-benefits-of-hard-toil-clement-lenglet-7-1dkm5y21ncn8q1aor73c6wlrh7.jpg",
    cap: "Ousmane Dembele scored late on to sink Real Valladolid",
    aut: "Dom Farrell",
    ava: "",
  },
  {
    id: 71496,
    pid: 7,
    seo:
      "barcelona-1-0-real-valladolid-last-gasp-dembele-winner-laliga-title-race-7-1mbe08g2j6c6l1fmlvzwk0c1lh",
    tit:
      "Barcelona 1-0 Real Valladolid: Last-gasp Dembele leaves Barca breathing down Atleti's necks",
    des:
      "Lionel Messi and his Barcelona team-mates looked like being frustrated against Real Valladolid but Ousmane Dembele had other ideas.",
    con:
      "<p>Ousmane Dembele thumped in a 90th-minute winner as Barcelona beat Real Valladolid 1-0 and cut Atletico Madrid's advantage at the top of LaLiga to a solitary point.</p><p>Ronald Koeman's resurgent side had won their previous five top-flight matches but were short of their best for much of the first half, with Kenan Kodro hitting the crossbar for Valladolid.</p><p>Lionel Messi and his team-mates tried to crank through the gears in the second half but struggled to find a breakthrough, even after Oscar Plano was sent off 11 minutes from time for a cynical foul on Dembele.</p><p>The France winger would have the final word, swiping home on the volley after Ronald Araujo made a nuisance of himself on the end of Frenkie de Jong's cross - setting up next weekend's pivotal Clasico showdown perfectly.</p><p>Barcelona goalkeeper Marc-Andre ter Stegen was back in action for the first time since Germany's humiliating 2-1 defeat to North Macedonia and he was relieved to see Kodro's header cannon to safety off the bar.</p><p>Messi won a free-kick in the 15th minute and clipped wide but the visitors continued to acquit themselves well.</p><p>Roque Mesa grazed the top of the netting with a speculative strike before Barca let the playmaker run unchallenged for around 30 yards to blast over.</p><p>Barcelona belatedly found some rhythm before the interval and Pedri linked up nicely with Messi to fire in a rasping low drive that Jordi Masip tipped against the right post.</p><p>Koeman's front three were all involved before the hour – Messi releasing Dembele to draw a brilliant low stop from Masip, with Antoine Griezmann sending an improvised diving header wide on the rebound.</p><p>Jordi Alba survived appeals for a penalty after the ball flicked off his hand inside the Barca box and Plano sliced wide on another threatening break.</p><p>A yellow card would arguably have been suffice for Plano's petulance and Valladolid buckled at the last in what felt like a huge moment in the title race.</p><p>What does it mean? Barca on the march at the right time </p><p>Koeman's side have now won 13 and drawn one of their 14 LaLiga games in 2021. Atletico, beaten 1-0 at Sevilla on Sunday, find their form heading in the opposite direction and if Barca can beat Real Madrid – Zinedine Zidane's men are two points behind them in third – then they will certainly carry the look of champions.</p><p>Masip comes out on top against Messi </p><p>Barcelona's near-failure to record a sixth consecutive LaLiga victory owed much to Masip. A product of La Masia, the keeper made nine saves and operated in assured fashion throughout the 90 minutes – countless hours facing down Messi on the training ground over more than a decade undoubtedly coming in handy. He will have been devastated to see Dembele's close-range effort skim off his boot and in, but should hold his head high.</p><p>Griezmann unable to continue goal rush </p><p>Griezmann had been enjoying arguably his most consistent run of form in a Barcelona shirt before the international break as he netted in the resounding wins over Huesca and Real Sociedad. Two goals in three outings for France followed but he was kept on the margins by an energetic Valladolid side.</p><p>Koeman replaced the forward in the 64th minute, by which time he had been booked and sent both his attempts on goal off target.</p><p>What's next </p><p>Valladolid host Europa League quarter-finalists Granada on Sunday, a day on from Barcelona's vital Clasico encounter in the Spanish capital.</p>",
    pub: 1617656582,
    tst: "c1lnm1ighhqg8nv5flgg",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/barcelona-1-0-real-valladolid-last-gasp-dembele-winner-laliga-title-race-7-1mbe08g2j6c6l1fmlvzwk0c1lh.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/barcelona-1-0-real-valladolid-last-gasp-dembele-winner-laliga-title-race-7-1mbe08g2j6c6l1fmlvzwk0c1lh.jpg",
    cap: "Ousmane Dembele celebrates his winner against Real Valladolid",
    aut: "Dom Farrell",
    ava: "",
  },
  {
    id: 71493,
    pid: 7,
    seo:
      "jurgen-klopp-says-liverpool-not-on-revenge-tour-as-they-prepare-to-face-real-madrid-in-champions-league-quarter-finals-7-zczc2w87rne61metjfsie6umw",
    tit:
      "Klopp insists Liverpool are 'not on a revenge tour' ahead of Real Madrid showdown",
    des:
      "Liverpool boss Jurgen Klopp will not use his side's 2018 Champions League final loss to Real Madrid as extra motivation in Tuesday's clash.",
    con:
      '<p>Jurgen Klopp insists revenge is not on Liverpool\'s mind ahead of their Champions League quarter-final first leg against Real Madrid.</p><p>Tuesday\'s showdown at the Santiago Bernabeu will be the first since the sides met in an eventful 2018 final, which Madrid won 3-1 to lift the trophy for a third season running.</p><p>Liverpool put that loss in Kiev behind them the following season by beating Tottenham in the final and are in the hunt for a seventh triumph in the competition this time around.</p><p>And with nearly three years having past since Gareth Bale scored twice to down Liverpool, Klopp says both he and his squad have drawn a line under the defeat.</p><p>"We are not on a revenge tour here. Life is like this. I don\'t believe too much in revenge, but it would be nice to get through," he said at Monday\'s pre-match news conference.</p><p>"We feel in a good moment in the Premier League. Now we hope to keep that momentum. That would be very helpful.</p><p>"Our motivation is at the highest level because it is the Champions League and we want to go to the next round, it has nothing to do with 2018.</p><p>"But when we got the draw, because it is the first time that we played them since then, I remembered the game."</p><p>One of the big talking points in that game was Sergio Ramos\' early challenge on Mohamed Salah that forced the Egypt forward off injured.</p><p>Klopp added: "I said it after that game if someone asked me in a press conference maybe a month later if I would invite Sergio Ramos to my 60th birthday party I would say no.</p><p>"Now, I would think about it. It\'s not because he\'s a great footballer but I said I didn\'t like what happened that night, for us it was a strange night.</p><p>"It was long ago and so I can\'t get that feeling of anger back so I don\'t even try. What I try is to prepare my team for tomorrow to show how good we are as a football team."</p><p>Klopp has won each of his last five games in the quarter-final stage of the Champions League, including all four at this stage while in charge of Liverpool.</p><p>The German has been touted as a future head coach of Madrid, but he joked the weather is the only thing he would regret if he never goes on to manage the LaLiga giants.</p><p>"I said if I had at the end of my career only three clubs which would be Mainz, Borussia Dortmund and Liverpool then it\'s not too bad," he said. "I would not regret it</p><p>"But when I came out the plane today I regret already that we don\'t live here because the weather is so much better here! We were freezing. I have a gilet with me so you are blessed. We do it the hard way."</p><p>Asked which Spanish club his management style would best suit, Klopp said: "I would fit all of them. The only problem I have is my Spanish is really bad!</p><p>"You wouldn\'t enjoy having me in Spain with broken Spanish. All the clubs have great managers. Real Mallorca would be nice!"</p><p>Diogo Jota scored twice as a second-half substitute in Liverpool\'s 3-0 league win at Arsenal on Saturday and is vying for a place in the starting line-up on Tuesday.</p><p>That would likely mean Roberto Firmino making way, though Klopp has not ruled out starting both players alongside Salah and Sadio Mane in an all-star front four.</p><p>"There will be a moment when we give it a try. Will that be tomorrow? We will see. You will have to wait.</p><p>"Did [Zinedine] Zinedine say anything about line-ups? But it looked good at Arsenal, no? It looked good at Man City, too."</p><p>Jota missed three months of the season with a knee injury but has now regained full fitness and has netted in four successive games for Liverpool and Portugal.</p><p>He previously spent two years on Atletico Madrid\'s books without playing a game, but the 24-year-old is not using his links to Real\'s city rivals as extra motivation.</p><p>"I signed for Atletico, but I didn\'t play any official games, so for me obviously I knew they are a rival but I didn\'t have time to feel that rivalry," he said.</p><p>"I am just focused on winning the game for Liverpool and nothing more.</p><p>"Obviously I\'m scoring a good amount of goals. That\'s what I want to do; help the team in the rest of the season. I don\'t mind if I don’t score as long as the team wins.</p><p>"It will take a lot to beat Madrid. They are the team with the most titles in this competition, so they are used to the knockout stages and we are going to need to be at our best."</p><p>Liverpool have lost each of their last three games against Madrid in the Champions League - only against Benfica between 1984 and 2010 have they lost four in a row against an opponent across all European competitions.</p>',
    pub: 1617650929,
    tst: "c1lm9saghhqg8nv5flmg",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/jurgen-klopp-says-liverpool-not-on-revenge-tour-as-they-prepare-to-face-real-madrid-in-champions-league-quarter-finals-7-zczc2w87rne61metjfsie6umw.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/jurgen-klopp-says-liverpool-not-on-revenge-tour-as-they-prepare-to-face-real-madrid-in-champions-league-quarter-finals-7-zczc2w87rne61metjfsie6umw.jpg",
    cap: "Jurgen Klopp's Liverpool face Real Madrid on Tuesday",
    aut: "Daniel Lewis",
    ava: "",
  },
  {
    id: 71494,
    pid: 7,
    seo: "west-ham-confirm-declan-rice-knee-injury-7-aytu0a8lk2x41rr1x7qel77s7",
    tit: "West Ham confirm Rice injury blow",
    des:
      "Declan Rice is undergoing rehabilitation after sustaining knee ligament damage during England's victory over Poalnd.",
    con:
      "<p>West Ham have confirmed midfielder Declan Rice is facing a spell on the sidelines with a knee injury.</p><p>Rice could reportedly be ruled out for around a month due to the lateral knee ligament damage he suffered in England's 2-1 World Cup qualifying win over Poland at Wembley last Wednesday.</p><p>The loss of the inspirational Rice is a big blow to the Hammers' hopes of securing a Champions League spot, while England boss Gareth Southgate will be hoping he makes a full recovery in time for Euro 2020, which begins in June.</p><p>Rice said: \"I'm of course disappointed to have picked up this injury but I'm in good spirits, have started my rehab already and hope to be back on the pitch with the lads soon.</p><p>\"While I'm not able to be out there, I'll be giving everything I can to work towards that and supporting the team as we look to continue our very positive season.\"</p><p>West Ham boss David Moyes said: \"It is disappointing. We knew after the England game that he wasn't going to be available but anyway we move on. We have been over the disappointment of that feeling.</p><p>\"It gives other people opportunities and that's what squads are for and hopefully we have got the squad to deal with it.</p><p>\"We know we're missing a good player but the team has been playing really well this year.\"</p><p>West Ham started Monday's Premier League clash with Wolves knowing a win would put them fourth in the table.</p>",
    pub: 1617650697,
    tst: "c1lm82aghhqg8nv5flf0",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/west-ham-confirm-declan-rice-knee-injury-7-aytu0a8lk2x41rr1x7qel77s7.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/west-ham-confirm-declan-rice-knee-injury-7-aytu0a8lk2x41rr1x7qel77s7.jpg",
    cap: "West Ham midfielder Declan Rice",
    aut: "Peter Thompson",
    ava: "",
  },
  {
    id: 71492,
    pid: 7,
    seo:
      "kane-eyes-cole-feat-mourinho-dreaming-of-man-utd-record-premier-league-weekends-quirky-facts-7-qk0gmssb6ik81svlge3qhjuxn",
    tit:
      "Kane eyes Cole feat, Mourinho dreaming of Man Utd record - the Premier League weekend's quirky facts",
    des:
      "Harry Kane was left with mixed feelings this weekend, while Manchester United continued their habit of coming from behind.",
    con:
      "<p>With the Premier League back following the international break, in many ways it was essentially business as usual.</p><p>Manchester United were underwhelming but came from behind yet again, while Harry Kane provided his customary reminder that he's probably a bit too good for Tottenham – or this Tottenham, at the very least.</p><p>Liverpool showed signs of having their mojo back in a 3-0 win at Arsenal that was inspired by Diogo Jota, though Manchester City moved another step closer to taking the Reds' crown.</p><p>At the other end of the table, Sheffield United – who have long looked doomed – are closing in on a Premier League record… Not that it's one they'll want to brag about.</p><p>Using Opta data, we look at some of the more quirky facts from the weekend's top-flight action…</p><p>Diogo's Jota lot going for him</p><p>How much better off Liverpool would be now had Jota not missed a large chunk of the season is impossible to know, but it's a fair assumption they'd be in a stronger position than they are.</p><p>The Portugal international returned following a three-month absence in March, scoring the winner against former club Wolves before then netting thrice for his country during the international break.</p><p>He was held back at the Emirates Stadium on Saturday but yet again proved he doesn't need long to make an impact, his brace helping secure a 3-0 win over Arsenal – it was 0-0 when he entered the pitch around the hour mark.</p><p>Those goals took him to eight in the Premier League this season from 730 minutes, meaning he boasts comfortably the best minutes-per-goal record (91) among players to have scored at least once this term. The next best is Gareth Bale with five from 561 minutes (one every 112 mins).</p><p>His 4.7 xG overperformance suggests either his form is not sustainable or he's developing into an elite-level chance-taker – hopefully an injury-free 2021-22 will unveil the truth.</p><p>Kane eyes Cole feat</p><p>While 2020-21 has been rather hit-and-miss for Tottenham, the same cannot be said for Kane.</p><p>The England captain is enjoying another stellar season but, perhaps more pertinently, he seems to have added another string to his bow when it comes to setting up team-mates.</p><p>With that in mind, his brace at the weekend means he now tops both the Premier League goalscoring (19) and assist (13) charts. He probably won't match his personal best of 30 goals for a single season, but in terms of goal involvements he's only four adrift of the 36 he managed in 2016-17 (29 goals, seven assists).</p><p>Therefore he's in with a great shout of being only the second player in Premier League history to finish a season with the most goals and assists.</p><p>Andy Cole is the only player to lead both outright at the end of a season, accomplishing the feat in 1993-94 when he netted 34 times and set up another 13 – this was before the competition changed from a 42-game season to 38.</p><p>Mourinho and Spurs dreaming of Man United's comeback record</p><p>It was just another weekend of Manchester United coming from behind to snatch a win and Tottenham throwing away a lead.</p><p>United netted twice in the second half to cancel out Danny Welbeck's opener for Brighton and Hove Albion, clinching a 2-1 win at Old Trafford thanks to goals from Marcus Rashford and Mason Greenwood.</p><p>It means they have gained 25 points from losing positions in the Premier League this term, a figure only ever bettered three times – West Brom (27) in 2010-11, United themselves (29) in 2012-13 and Newcastle United (34) in 2001-02.</p><p>It's been a different story for Tottenham this season, however, as they've not been able to hold on to leads – Newcastle rescuing a 2-2 draw against them on Sunday being the latest example, with the Magpies' xG of four being their highest figure since 2016-17.</p><p>They've now dropped 11 points due to goals conceded in the final 10 minutes of games, the worst record in the Premier League this term, and failed to win the six league games in which they've led at half-time. That's also a league-wide high.</p><p>As for Jose Mourinho, the 15 points he's seen Spurs surrender from winning positions in 2020-21 is already a joint-worst for him in a Premier League season.</p><p>Sheffield United on course for worst ever Premier League season</p><p>Okay, admittedly this one does depend on how you quantify \"worst\".</p><p>After all, Derby County hold the record for the fewest points ever won in a single Premier League season when they amassed just 11 in 2007-08, and Sheffield United already have three more.</p><p>However, Derby's 29 defeats equated to 76.3 per cent of their 38 matches, which along with Sunderland two years earlier, is the biggest proportion of losses in a solitary campaign.</p><p>Following the Blades' 2-1 loss at Leeds United on Saturday, they have lost 80 per cent of their matches this term (25 in total).</p><p>Given their form until now, few would be surprised to see them set a new Premier League record of 30 defeats.</p>",
    pub: 1617647450,
    tst: "c1llemighhqg8nv5fld0",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/kane-eyes-cole-feat-mourinho-dreaming-of-man-utd-record-premier-league-weekends-quirky-facts-7-qk0gmssb6ik81svlge3qhjuxn.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/kane-eyes-cole-feat-mourinho-dreaming-of-man-utd-record-premier-league-weekends-quirky-facts-7-qk0gmssb6ik81svlge3qhjuxn.jpg",
    cap:
      "Harry Kane netted two more goals at the weekend, but it wasn't enough for Spurs",
    aut: "Ryan Benson",
    ava: "",
  },
  {
    id: 71491,
    pid: 7,
    seo:
      "erling-haaland-unaffected-transfer-circus-borussia-dortmund-man-city-7-fani0xcqij9t17c85any6zplr",
    tit:
      "Haaland unaffected by transfer circus as Dortmund prepare for Man City",
    des:
      "Borussia Dortmund's dwindling form is of more concern to Edin Terzic than the futures of Erling Haaland and Jadon Sancho.",
    con:
      "<p>Erling Haaland remains content amid swirling transfer rumours ahead of Borussia Dortmund's Champions League showdown with Manchester City.</p><p>Premier League leaders City are one of a host of clubs to have been linked with the 20-year-old Norway striker.</p><p>Speculation over a blockbuster close-season transfer mounted during the international break when Haaland's agent, Mino Raiola, accompanied his father – and former City player – Alf-Inge on trips to Madrid and Barcelona.</p><p>Speaking on the eve of Tuesday's quarter-final clash at the Etihad Stadium, Dortmund interim boss Edin Terzic insisted such matters could not be ones to cause him too much concern.</p><p>\"It has no impact on me because I can't stop Mino Raiola and Alfie Haaland from travelling. It's up to them, they're grown-ups and they can choose whatever they want to do,\" he said.</p><p>\"I just can have an impact on Erling and we are happy to have him in our team.</p><p>\"He's been back with us since last Thursday, when he came back from the Norway national team</p><p>\"The feeling we had from the start was that he was very happy to see us and we're very happy to have him around.</p><p>\"He's a lovely guy, his qualities are well known all over the world and we are proud and happy he's part of our team.\"</p><p>Haaland has scored 33 goals in 32 club appearances across all competitions this season, although he will not have Jadon Sancho to provide service in the first leg.</p><p>Former City youngster Sancho has remained in Germany for treatment on a thigh problem and Terzic conceded next week's second leg could also come too soon for the England winger – another presumed transfer target for some of Europe's big hitters.</p><p>\"He started with a bit of running for the last couple of days and we hope that it won't take a long time to get back to team training, but he won't be ready for the next week, let's say,\" Terzic said.</p><p>“For the future it's hard to tell. First of all, we still have seven games left in the Bundesliga to qualify for the Champions League.</p><p>\"Of course it's a bit difficult now at the minute, but it's still possible. We're going to try our best to make it possible and then at the end of the season we'll see what's going to happen next.\"</p><p>Dortmund's dwindling domestic form – a 2-1 defeat to Eintracht Frankfurt last time out left them seven points behind their weekend opponents in the Bundesliga's final Champions League qualification spot – has left them with nowhere to hide from criticism and Terzic was in no mood to unduly protect his players.</p><p>\"We are disappointed with the performance and Saturday's result. The criticism has been justified,\" he added.</p><p>\"We've shown before we can do better and the task now is to face that criticism, to accept it and show a reaction on the pitch.</p><p>\"We have to prove we don't give up and show our quality and potential again. We are responsible for showing that.</p><p>\"We haven't been able to over the last weeks and that's why the criticism is justified.\"</p>",
    pub: 1617646828,
    tst: "c1ll9r2ghhqg8nv5flcg",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/erling-haaland-unaffected-transfer-circus-borussia-dortmund-man-city-7-fani0xcqij9t17c85any6zplr.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/erling-haaland-unaffected-transfer-circus-borussia-dortmund-man-city-7-fani0xcqij9t17c85any6zplr.jpg",
    cap: "Borussia Dortmund striker Erling Haaland",
    aut: "Dom Farrell",
    ava: "",
  },
  {
    id: 71490,
    pid: 7,
    seo:
      "erling-haaland-ruben-dias-battle-will-be-key-in-man-city-v-dortmund-says-wright-phillips-7-mlted83vsvxc1nj6x95y41ros",
    tit:
      "Haaland-Dias battle will be key in Man City v Dortmund, says Wright-Phillips",
    des:
      "Erling Haaland has been linked to Manchester City but first he will try to wreck their Champions League hopes, with Ruben Dias in his way.",
    con:
      '<p>Manchester City and Borussia Dortmund\'s keenly anticipated Champions League quarter-final could hinge on the battle between Erling Haaland and Ruben Dias.</p><p>That is the view of former City favourite Shaun Wright-Phillips, who anticipates an intriguing contest due to the attacking firepower boasted by both sides.</p><p>Norway youngster Haaland has rattled home a remarkable 33 goals in 32 appearances across all competitions this season, averaging a goal every 82.8 minutes thanks to a shot conversion rate of 31.4 per cent.</p><p>The 20-year-old has also supplied seven assists, although he will be faced with one of Europe\'s most formidable centre-backs in Dias.</p><p>If speculation proves accurate, Haaland might replace the Portugal defender as City\'s record signing at the end of the campaign but Dias\' impact has been undeniably transformative since his arrival from Benfica last September.</p><p>City have won 31 of the 39 games in which Dias has played, losing only two and conceding 18 goals – an average of 0.5 per game.</p><p>"It\'s going to be hard, it\'s going to be a great battle for me between [Haaland] and Dias," Wright-Phillips, who played alongside Haaland\'s father Alf-Inge during his time at City, told Stats Perform.</p><p>"Dias doesn\'t like to lose, let alone concede goals – he hates that as well so it will be a good competition.</p><p>"And it stands out to be a good game, with the firepower and the way Dortmund play, and the way City play.</p><p>"So it’s going to be a good footballing match and I am looking forward and am very excited to see it myself."</p><p>Another intriguing battle that fans will be denied is a face off between England youngsters Phil Foden and Jadon Sancho in each team\'s creative departments.</p><p>Foden and Sancho were team-mates in City\'s youth team before the latter moved to Dortmund in 2017, where he has scarcely looked back.</p><p>Remaining with his boyhood club, Foden had to bide his time among a talent-stacked squad but has established himself as a key man for both Pep Guardiola and England boss Gareth Southgate this season.</p><p>However, a thigh injury means Sancho will miss out on a return to the Etihad Stadium on Tuesday and faces a race to be fit for next week\'s return at Signal Iduna Park.</p><p>"It would be great to see them both on the field. But they’re very different players," Wright-Phillips said.</p><p>"Although [Foden] does go and dribble past people, he’s got a very good eye in seeing passes, linking up play and he presses harder.</p><p>"I think Sancho is a very, very good player as well but he\'s more of a dribbler, committing players, taking them on, putting the ball into the box and also scoring goals."</p><p>Along with Liverpool, who take on 13-time winners Real Madrid this week, Chelsea – another of Wright-Phillips\' former clubs – complete a trio of Premier League sides in the last eight.</p><p>Thomas Tuchel\'s men saw off Atletico Madrid in impressive fashion in the previous round, although they must bounce back from a shock 5-2 weekend loss to relegation-threatened West Brom before taking on Porto.</p><p>"As we know it’s one of the toughest competitions," Wright-Phillips added. "And on the few times City have been on a run in it, they have not had the rub of the green.</p><p>"And Chelsea had been playing well with their defensive record, also. I would be happy if it was an all-England final, so I\'ll be supporting all English teams in Europe."</p>',
    pub: 1617642490,
    tst: "c1lk7uighhqg8nv5fldg",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/erling-haaland-ruben-dias-battle-will-be-key-in-man-city-v-dortmund-says-wright-phillips-7-mlted83vsvxc1nj6x95y41ros.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/erling-haaland-ruben-dias-battle-will-be-key-in-man-city-v-dortmund-says-wright-phillips-7-mlted83vsvxc1nj6x95y41ros.jpg",
    cap: "Erling Haaland and Ruben Dias will face off on Tuesday",
    aut: "Dom Farrell",
    ava: "",
  },
  {
    id: 71489,
    pid: 7,
    seo:
      "mouctar-diakhaby-subjected-to-extremely-serious-racial-insult-claims-valencia-president-7-1njw0jeaorjel1mwedfn63e5pl",
    tit:
      "Diakhaby was subjected to an 'extremely serious racial insult', claims Valencia president",
    des:
      "LaLiga must change their rules to better protect players subjected to racist abuse, says Valencia president Anil Murthy.",
    con:
      '<p>Valencia president Anil Murthy has called on LaLiga to do more in the fight against racism after Mouctar Diakhaby was subjected to what he described as an "extremely serious racial insult" against Cadiz.</p><p>The top-flight meeting on Sunday – which finished 2-1 to Cadiz – was stopped for 20 minutes after Valencia\'s players left the field following an altercation between Diakhaby and Cadiz defender Juan Cala.</p><p>Valencia\'s players subsequently walked off the pitch, before returning to the field without Diakhaby, who asked to be taken off.</p><p>After the match had restarted, Valencia tweeted their version of events, stating Diakhaby had suffered a "racist insult".</p><p>Cadiz issued a statement following the game, insisting any form of racism was not tolerated.</p><p>They also added they had no doubts over the honesty of their squad, with Cala having been picked up by television cameras pleading his innocence during the game.</p><p>Cadiz coach Alvaro Cervera said: "I saw the same as you did. They left the field alongside the referee because they said that Cala had insulted one of their players.</p><p>"Cala says that at no point did he insult the opposition player."</p><p>Cadiz confirmed on Monday that Cala would address the media on the subject after training on Tuesday.</p><p>Speaking alongside Diakhaby in a video posted on Valencia\'s official website, Murthy said: "Yesterday, in our game against Cadiz, we witnessed a flagrant incident of racism.</p><p>"There is no other way to describe it. Our player, Mouctar Diakhaby, was the recipient of an extremely serious racial insult by Juan Cala.</p><p>"Although Cala may deny it, we believe Mouctar completely. This type of behaviour should not be tolerated in football and in society in general, and we at Valencia condemn racism in any form. We fully support our player.</p><p>"There should be no doubt that Valencia will defend Mouctar Diakhaby to the fullest, and fight to ensure that such lamentable events are not repeated."</p><p>Valencia captain Jose Luis Gaya said the team had been told they would be penalised if they did not return to finish the game – a claim backed up by head coach Javi Gracia.</p><p>Murthy described Sunday\'s incident as a "step back in the fight against racism" and has demanded LaLiga change the rules to better protect those who suffer racist abuse.</p><p>"We spoke with LaLiga this morning to encourage them to also see their investigation through to the end," he added. "This incident cannot be left behind, and cannot be repeated with any other player for any other team.</p><p>"We are saddened that, following the incident, there was no reaction to stop the game, and that it was our players who were the ones to leave the field of play. There cannot be a lack of action in light of these types of situations.</p><p>"From now on, we would like to see some kind of reaction to change these protocols, in order to protect those who are vulnerable. If we don\'t change this, then it will give a bad example to everybody.</p><p>"We are proud of the reaction from our team, and we still do not understand why Diakhaby, the recipient of this racial insult, received a yellow card.</p><p>"We also do not understand why the players had to return to the pitch due to the regulations not protecting the victims and the team in such cases.</p><p>"This must change. Changes have been made in other leagues, and now the same must be done in Spain.</p><p>"We cannot turn a blind eye to something as serious as racism. It is time for a change, and Valencia will go all the way in our support of our player and the fight against racism. A step back in the fight against racism was taken yesterday."</p>',
    pub: 1617639337,
    tst: "c1ljfaaghhqg8nv5fln0",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/mouctar-diakhaby-subjected-to-extremely-serious-racial-insult-claims-valencia-president-7-1njw0jeaorjel1mwedfn63e5pl.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/mouctar-diakhaby-subjected-to-extremely-serious-racial-insult-claims-valencia-president-7-1njw0jeaorjel1mwedfn63e5pl.jpg",
    cap: "Valencia defender Mouctar Diakhaby",
    aut: "Guy Atkinson",
    ava: "",
  },
  {
    id: 71488,
    pid: 7,
    seo:
      "real-madrid-defender-nacho-fernandez-monitoring-sergio-ramos-situation-before-making-contract-decision-7-1m4epszlwyh6a108p7okul6spz",
    tit:
      "Madrid defender Nacho monitoring Ramos situation before making contract decision",
    des:
      "Real Madrid skipper Sergio Ramos is deliberating over a new deal and his decision could directly impact whether Nacho Fernandez stays.",
    con:
      '<p>Real Madrid defender Nacho Fernandez has suggested he will wait to see if Sergio Ramos signs a new contract before deciding whether to also agree fresh terms.</p><p>Long-serving centre-back Ramos is due to be out of contract at the Santiago Bernabeu at the end of the campaign, while Nacho has another season to run on his deal.</p><p>Madrid have been in talks with Ramos over extending his stay, but head coach Zinedine Zidane recently admitted he is unsure if the Spain international will put pen to paper.</p><p>Nacho\'s own future is far from certain and the 31-year-old, who has become a regular for Zidane, will see what Madrid\'s plans are before making a decision on whether to commit.</p><p>"Of course, whether Madrid renew Ramos, or sign a central defender or two, are decisions that influence my future," he said at a pre-match news conference on Monday.</p><p>"It\'s normal, everything affects [the situation]. I will look at it, analyse it and talk with my club and my family.</p><p>"I have spoken with the club. I have this season left and one more. I will make the best decision for myself after speaking with my club."</p><p>Ramos has not been included in Madrid\'s 21-man squad for Tuesday\'s Champions League quarter-final first leg against Liverpool due to a calf injury sustained on international duty.</p><p>He has spent the past 16 seasons with Los Blancos but has been strongly linked with a free transfer to Paris Saint-Germain at the end of the campaign.</p><p>"The best thing for him is that he stays," Nacho said. "As a team-mate, a friend and a Madridista, I can only say that the best thing for the club is that he stays.</p><p>"Sergio is feeling down because he is our captain and will not be present during a key period of games."</p><p>Nacho has featured 21 times for Madrid in all competitions this term and started both legs of the 4-1 aggregate win over Atalanta in the Champions League round of 16.</p><p>He leads the way for Madrid defenders to have played at least six times in LaLiga this season in terms of interceptions per 90 minutes (1.68), while only Raphael Varane (0.56) averages more blocks than Nacho (0.45).</p><p>"This may be the best period of my career," he said. "I have the confidence that I have never previously felt.</p><p>"This is a dream and I hope the confidence lasts, which is what a player always wants."</p><p>Madrid have won their last three meetings with Liverpool, most recently prevailing 3-1 in the Champions League final three years ago when Nacho was introduced as a first-half substitute.</p><p>Liverpool won their only previous two-legged European knockout tie with Madrid 5-0 on aggregate in the 2008-09 last 16, however, and Nacho is expecting a tightly-fought contest this time around.</p><p>"Since our previous meeting we have lost Cristiano [Ronaldo] and they have become champions themselves. But there is not that much difference between the sides," he said.</p><p>"We enter the tie in a very good way. We are focused on our job."</p>',
    pub: 1617636394,
    tst: "c1lioaighhqg8nv5flb0",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/real-madrid-defender-nacho-fernandez-monitoring-sergio-ramos-situation-before-making-contract-decision-7-1m4epszlwyh6a108p7okul6spz.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/real-madrid-defender-nacho-fernandez-monitoring-sergio-ramos-situation-before-making-contract-decision-7-1m4epszlwyh6a108p7okul6spz.jpg",
    cap:
      "Nacho Fernandez has a little over a year to run on his Real Madrid contract",
    aut: "Daniel Lewis",
    ava: "",
  },
  {
    id: 71486,
    pid: 7,
    seo:
      "pep-guardiola-blind-guy-would-realise-erling-haaland-quality-ahead-man-city-borussia-dortmund-champions-league-tie-7-eoep1fgov5es1sexe7x9kh2r4",
    tit:
      "A blind guy would realise Haaland's quality – Guardiola primed for Dortmund showdown",
    des:
      "Manchester City face Borussia Dortmund on Tuesday, with Pep Guardiola fully aware of the threat posed by Erling Haaland.",
    con:
      "<p>Pep Guardiola is primed for Manchester City's showdown with Erling Haaland and Borussia Dortmund, suggesting even a blind person could see the Norwegian's talents.</p><p>City host Dortmund in the first leg of their Champions League quarter-final on Tuesday, with Haaland unsurprisingly one of the main topics of conversation.</p><p>The Norway star has been in lethal form ever since joining Dortmund in January 2020 and boasts a remarkable haul of 10 goals in six Champions League outings this term, including two in each of their meetings with Sevilla in the last round as the German's narrowly progressed 5-4 on aggregate.</p><p>Since then, reports linking Haaland with Europe's biggest clubs have been frequent, as Barcelona and Real Madrid seemingly positioned themselves as interested parties following meetings with his agent Mino Raiola.</p><p>While City – whom his father Alf-Inge Haaland played for – have been rather more coy on the matter, few strikers have been focused on as much as Haaland with respect to potential replacements for Sergio Aguero following last week's announcement of his end-of-season departure.</p><p>After all, in the spell since Haaland scored a 23-minute hat-trick on his Dortmund debut, his 49 goals across all competitions has been bettered by only Robert Lewandowski (67) and Cristiano Ronaldo (52) among players in the top five leagues. City's leading scorers in the same period are Raheem Sterling (24) and Gabriel Jesus (22).</p><p>Guardiola appreciates Haaland is a fine talent, though he would not be lured into making any grand statements about a potential future for him at City.</p><p>When asked if Haaland was the sort of player who could command a transfer few of over £100million, Guardiola said: \"I don't know, it's a question for Dortmund, his agent.</p><p>\"I understand completely why people ask about Haaland, of course he's an exceptional striker, but it's not appropriate for me to talk about a player for another club.</p><p>\"All I can say is he's an exceptional striker. The numbers speak for themselves. A fantastic player, that's all.\"</p><p>On those \"numbers\", Guardiola was pressed for an opinion on how City might be able to stop Haaland, given his conversion rate of 33.6 per cent is better than any other player in the top five leagues with 20 goals or more since his Dortmund bow.</p><p>For comparison, Bayern Munich's Lewandowski – widely regarded as the best striker around – has converted 27.8 per cent of his chances over the same period.</p><p>\"The striker who scores goals, they are going to score when they are in our box,\" Guardiola continued. \"If they're far away from our box, they have fewer chances. It's a question of mathematics.</p><p>\"Not just Haaland. [Jamie] Vardy, [Sadio] Mane, Aguero, all the strikers, they want to be there [in the box] as much as possible. This is the best way is to avoid [conceding].</p><p>\"In that age to score that amount of goals is not easy to find in the past, honestly, so I think he's 20 – the numbers speak for themselves.</p><p>\"He can score right [foot], left, on the counter-attack, in the box when you dominate, headers. He's a fantastic striker, everyone knows it.</p><p>\"A blind guy could realise he's a great striker. It is not necessary to be a manager to realise that.\"</p><p>Keeping Haaland quiet will surely go a long way to ensuring City finally get past the quarter-finals, having been knocked out at this stage in each of the past three seasons, losing four of their five games at this point.</p>",
    pub: 1617632117,
    tst: "c1lhmtaghhqg8nv5fle0",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/pep-guardiola-blind-guy-would-realise-erling-haaland-quality-ahead-man-city-borussia-dortmund-champions-league-tie-7-eoep1fgov5es1sexe7x9kh2r4.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/pep-guardiola-blind-guy-would-realise-erling-haaland-quality-ahead-man-city-borussia-dortmund-champions-league-tie-7-eoep1fgov5es1sexe7x9kh2r4.jpg",
    cap: "Borussia Dortmund striker Erling Haaland",
    aut: "Ryan Benson",
    ava: "",
  },
  {
    id: 71487,
    pid: 7,
    seo:
      "real-madrid-confirm-eden-hazard-absence-for-liverpool-champions-league-first-leg-7-16wlw624e9g071ouztq7oc5n4v",
    tit: "Madrid confirm Hazard absence for Liverpool first leg",
    des:
      "Real Madrid will once again be without Eden Hazard for their Champions League tie against Liverpool as he recovers from injury.",
    con:
      "<p>Eden Hazard has not been included in Real Madrid's 21-man squad for Tuesday's Champions League quarter-final first leg against Liverpool.</p><p>The Belgium international has been plagued by injuries during his first two seasons in Madrid, restricting him to just 36 appearances and 29 starts across all competitions.</p><p>Hazard missed Los Blancos' last-16 second leg against Atalanta with a damaged hip flexor and played no part for Belgium in their three World Cup qualifiers at the end of March.</p><p>Madrid coach Zinedine Zidane had increased hope of a midweek return following Saturday's win over Eibar but said on Monday he would not select the winger unless he could prove he was 100 per cent fit.</p><p>And Madrid subsequently confirmed Hazard will play no part against the Premier League champions, having been omitted from the squad for the game at the Santiago Bernabeu.</p><p>Captain Sergio Ramos' absence had already been all but confirmed after he sustained a calf injury on international duty with Spain last week.</p><p>Madrid have lost seven of the 10 Champions League games Ramos has missed since the end of 2017-18 when they were last crowned European champions.</p><p>Fellow defender Dani Carvajal also remains out, but midfielder Federico Valverde has recovered from a muscular injury that kept him out of the Eibar game.</p><p>Tuesday's clash will be the first between Madrid and Liverpool since the 2018 final, which Los Blancos won 3-1 to seal a third successive Champions League trophy.</p>",
    pub: 1617631839,
    tst: "c1lhknqghhqg8nv5fla0",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/real-madrid-confirm-eden-hazard-absence-for-liverpool-champions-league-first-leg-7-16wlw624e9g071ouztq7oc5n4v.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/real-madrid-confirm-eden-hazard-absence-for-liverpool-champions-league-first-leg-7-16wlw624e9g071ouztq7oc5n4v.jpg",
    cap: "Eden Hazard has been ruled out of Real Madrid's clash with Liverpool",
    aut: "Daniel Lewis",
    ava: "",
  },
  {
    id: 71484,
    pid: 7,
    seo:
      "eden-hazard-not-rushed-back-for-real-madrid-champions-league-clash-with-liverpool-insists-zinedine-zidane-7-12e8drj2mouaz1gf8sz6gzgam1",
    tit:
      "Hazard will not be rushed back for Madrid's clash with Liverpool, insists Zidane",
    des:
      "Zinedine Zidane has no intention of playing Eden Hazard against Liverpool if the Belgian cannot prove he is not 100 per cent fit.",
    con:
      '<p>Eden Hazard will not be rushed back for Real Madrid\'s Champions League quarter-final first leg against Liverpool on Tuesday, insists Zinedine Zidane.</p><p>Hazard has been plagued by injuries since joining Madrid from Chelsea for €100million in June 2019.</p><p>He has made just 36 appearances and 29 starts across all competitions in that time, scoring only four times.</p><p>The 30-year-old returned from injury in March but then missed the Champions League last-16 second leg against Atalanta with a damaged hip flexor – a development Zidane described as "inexplicable".</p><p>That injury kept him out of the Belgium squad for the recent international break and Zidane says he has no intention of playing Hazard against Premier League champions Liverpool if he is not 100 per cent fit.</p><p>"Eden has to be calm," the Madrid boss told a media conference on Monday. "We never risk the return of a player if he is not well.</p><p>"We will do things little by little and we will see when he will be with us. At the moment it is like that.</p><p>"I need all my players to be available and fit. I like my players to be fit and in good health. I don\'t like seeing players out injured. We have had a lot of players out injured this season.</p><p>"I hope to have Eden back soon. I hope to have a fully fit squad come the end of the season."</p><p>Tuesday\'s clash will be the first between the sides since the 2018 final, which Madrid won 3-1 to seal a third consecutive Champions League trophy.</p><p>Los Blancos have won the first leg in eight of their last nine Champions League knockout ties, while they have claimed victories in their last three matches against the Reds in the competition.</p><p>Liverpool boss Jurgen Klopp, however, has won each of his last five games at the quarter-final stage of the Champions League, including all four of his games at this stage while in charge of the Reds.</p><p>Zidane is an admirer of what Klopp has achieved at Anfield, but says he is not interested in copying the German\'s methods.</p><p>"Klopp is a great manager, he has been coaching for a long time," he added. "He\'s got a great CV and has done superbly at Liverpool.</p><p>"I don\'t have to look at what he does and copy him. Everyone has their way of going about things but I look at all the managers.</p><p>"I looked and learned when I was going to be a manager and, of course, I analysed Klopp."</p><p>Liverpool will need to be particularly wary of Madrid talisman Karim Benzema, who has scored four goals in his three Champions League appearances against them.</p><p>He is level with Didier Drogba as the player to have scored the most against the Reds in the competition.</p><p>Benzema should lead the line on Tuesday and Zidane has attributed his success to the understanding he has developed with his team-mates.</p><p>"All the players who are here know how to play and have earned the right to be in this squad, they are the best," he explained. "They all understand Karim well and Karim the others. There is a lot of chemistry between them."</p>',
    pub: 1617627356,
    tst: "c1lghn2ghhqg8nv5fli0",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/eden-hazard-not-rushed-back-for-real-madrid-champions-league-clash-with-liverpool-insists-zinedine-zidane-7-12e8drj2mouaz1gf8sz6gzgam1.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/eden-hazard-not-rushed-back-for-real-madrid-champions-league-clash-with-liverpool-insists-zinedine-zidane-7-12e8drj2mouaz1gf8sz6gzgam1.jpg",
    cap: "Eden Hazard of Real Madrid",
    aut: "Guy Atkinson",
    ava: "",
  },
  {
    id: 71483,
    pid: 7,
    seo:
      "real-madrid-v-liverpool-modric-journey-flop-to-ballon-dor-winner-inspiration-for-thiago-7-ccwj50a7v7sb1juf791u0dnc2",
    tit:
      "Real Madrid v Liverpool: Modric's journey from 'flop of the season' to Ballon d'Or winner an example for Thiago",
    des:
      "Thiago Alcantara has not had the easiest of debut seasons at Liverpool, but Luka Modric proves perceptions can change over time.",
    con:
      "<p>It was hardly the sort of entrance that said \"I'm here to save the day\". Luka Modric was still putting his headband on as he rather leisurely entered the Old Trafford pitch just a few moments after Nani's controversial sending off in the Champions League last-16 second leg between Manchester United and Real Madrid.</p><p>Los Blancos were down 2-1 on aggregate after a Sergio Ramos own goal had put United in the driving seat a short while earlier, but with the hosts a man light, Jose Mourinho sent Modric on as Madrid looked to suffocate Alex Ferguson's men.</p><p>Alongside Xabi Alonso, Modric was swiftly into the thick of it as Madrid tried to pull United this way and that, and he soon took matters into his own hands with Kaka, Mesut Ozil, Gonzalo Higuain and Cristiano Ronaldo unable to break through.</p><p>Allowed space just outside the United area, Modric's motioning for a shot lured Michael Carrick out of position and the Croatian easily breezed past him before lashing an unstoppable effort in off the right-hand post just seven minutes after coming on.</p><p>It was only his second goal for the club, but as it spurred Madrid on to seal a 2-1 win and a spot in the next round thanks, Modric has regarded that match as the turning point in his career at the Santiago Bernabeu.</p><p>A perfect storm </p><p>It's easy to forget how disappointing Modric's first season at Madrid was deemed to be. After all, before Christmas, he was voted as the worst signing of the campaign in a Marca poll, beating Alex Song of Barcelona to top the charts.</p><p>Two years Modric's junior, Song has been playing his football in Djibouti this season; Modric remains, at the ripe old age of 35, arguably the finest midfielder in Spain.</p><p>There are certainly comparisons to be made with Thiago Alcantara's first season in England, with Liverpool struggling to even maintain a challenge for the top four, let alone defend their title.</p><p>Thiago was seen as the missing piece of the puzzle, the sort of central midfielder that balanced flair with genuine playmaking abilities, unlike anyone already in the squad. It was said his arrival would enable to Liverpool to play with greater flexibility, but the reality has been a little different.</p><p>Teams are playing deeper against Liverpool, as evidenced by the fact their shots outside the area per game is up from 4.6 per game to 5.2, while they are being allowed 190.4 passes in the final third each match, up from 180.9. Opponents are more confident they can keep Liverpool out if they defend deep.</p><p>Of course, Liverpool's issues this term are plentiful – injuries have been particularly frequent, and Thiago himself has lost a significant chunk of the season in this regard.</p><p>But even when he has been fit, it's difficult to say the Spain international has transformed the Reds. In fact, they have a better league win percentage (57.1) when he doesn't play than when he does (37.5), while they tend to score more goals (2.4 per game, compared to 1.1 when he is playing).</p><p>One theory for Thiago's struggles has been his apparent lack of comfort with Liverpool's intense pressing style, but the data suggests that to be a red herring.</p><p>Granted, Liverpool do engage in 18.9 pressed sequences – instances where the opposition have three or fewer passes in a move, which ends within 40 metres of their own goal – per game, with their total of 567 the most in the Premier League this term.</p><p>But Bayern averaged 16.9 per game in 2019-20 and led the way in the Bundesliga in this regard. Meanwhile, they allowed 9.8 opposition passes per defensive action, with Liverpool's PPDA this term 10.7, showing the Bayern side Thiago played in wasn't too dissimilar.</p><p>So, why would Liverpool's off-the-ball intensity impact him so much? It seems far more likely the issue is simply that he's in the middle of a perfect storm of settling into new surroundings and a new team during an injury crisis that has impacted him as well.</p><p>Changing perception </p><p>Fans can forget that players are people first and foremost. Upheaval off the pitch can have a demonstrable effect on it – of course it can, just like life at home can impact the job performance of average Joe.</p><p>This was a key element for Modric, who explained how he found it difficult to settle in initially at Real Madrid, not only because as a club they are an entirely different beast to Tottenham but also as he didn't have a pre-season and gaining fitness was always likely to be a struggle when playing catch-up.</p><p>As for fan expectations, perhaps there was also a degree of misunderstanding from Madrid supporters. Maybe they were initially expecting something more than Modric.</p><p>After all, in his final season at Spurs, Modric was a key creator. His 96 key passes in 2011-12 was bettered by only two midfielders in the Premier League (David Silva – 104, Juan Mata – 103), evidence that much of the creative burden was on his shoulders.</p><p>So, perhaps the fact his creative ingenuity wasn't being so frequently displayed at Madrid coloured opinion.</p><p>Granted, his 17 key passes in 13 league appearances between the start of the season and January 1 left a lot to be desired, but his end-of-season record of 56 was the third-highest in the Madrid squad.</p><p>Time, patience and trust were seemingly key to Modric establishing himself, but to suggest he's played the same way at Madrid as in his best season at Spurs would be incorrect – the closest he's ever got to that 96 key passes haul since was 61 in 2015-16.</p><p>In fact, when you consider a whole range of his key metrics such as passes, pass completion, chance creation, touches of the ball and defensive areas, there hasn't been drastic fluctuation between 2012-13 and now.</p><p>Certainly, his 62.6 successful passes per 90 is up from 55 in 2012-13, while his touches have improved from 80 to 86.7, but those differences certainly aren't major. The fact is his figures have been pretty steady throughout his time in LaLiga.</p><p>But at 35, he has still played in 28 of Madrid's 29 league matches this term. He's arguably more important to them than ever before.</p><p>Coming back from being a target of ridicule to becoming a club great and winning the Ballon d'Or speaks to Modric's attitude and talent, but also serves as inspiration for Thiago.</p><p>While the Spaniard has not had to contend with quite the same level of criticism, there are certainly those unconvinced by him.</p><p>With a full pre-season under his belt and allowed to gel into a settled team that isn't constantly being chopped and changed due to injuries, Thiago can surely enjoy a sparkling second season at Liverpool. After all, the data proves the Reds' pressing shouldn't be a long-term issue for him given how Bayern played.</p><p>A 25-yard strike of his own against Manchester United would go down very well right now, although a similarly decisive impact against Madrid would surely be a nice compromise for the Barcelona product.</p>",
    pub: 1617623932,
    tst: "c1lfmv2ghhqg8nv5flag",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/real-madrid-v-liverpool-modric-journey-flop-to-ballon-dor-winner-inspiration-for-thiago-7-ccwj50a7v7sb1juf791u0dnc2.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/real-madrid-v-liverpool-modric-journey-flop-to-ballon-dor-winner-inspiration-for-thiago-7-ccwj50a7v7sb1juf791u0dnc2.jpg",
    cap:
      "Thiago Alcantara's had a tricky first season at Liverpool - Luka Modric knows what that's like, having struggled initially at Real Madrid",
    aut: "Ryan Benson",
    ava: "",
  },
  {
    id: 71481,
    pid: 7,
    seo:
      "cadiz-juan-cala-face-media-racism-allegations-tuesday-valencia-mouctar-diakhaby-7-glr0h4ntedsj1ehv3teodfwpq",
    tit:
      "Cadiz defender Cala to face media after Diakhaby's racism allegations",
    des:
      'Cadiz defender Juan Cala will address the media after Valencia\'s Mouctar Diakhaby said he suffered a "racist insult" on Sunday.',
    con:
      "<p>Juan Cala will speak to the media on Tuesday following allegations of racism by Valencia's Mouctar Diakhaby, his club Cadiz have confirmed.</p><p>Sunday's LaLiga meeting between the sides – which finished 2-1 to Cadiz – was stopped for 20 minutes after Valencia's players left the field following an altercation between Diakhaby and Cala.</p><p>Gabriel Paulista and Kevin Gameiro attempted to defuse the situation before Diakhaby explained his version of events to referee David Medie Jimenez.</p><p>Valencia's players subsequently walked off the pitch, before returning to the field without Diakhaby, who asked to be taken off.</p><p>After the match had restarted, Valencia tweeted their version of events, stating Diakhaby had suffered a \"racist insult\".</p><p>Following the game, Cadiz issued a statement on their club website, insisting any form of racism was not tolerated.</p><p>However, they also added they had no doubts over the honesty of their squad, with Cala having been picked up by television cameras pleading his innocence during the game.</p><p>Posting on their official Twitter account on Monday, Cadiz confirmed Cala will address the media following training on Tuesday.</p>",
    pub: 1617620890,
    tst: "c1lev6ighhqg8nv5fl70",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/cadiz-juan-cala-face-media-racism-allegations-tuesday-valencia-mouctar-diakhaby-7-glr0h4ntedsj1ehv3teodfwpq.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/cadiz-juan-cala-face-media-racism-allegations-tuesday-valencia-mouctar-diakhaby-7-glr0h4ntedsj1ehv3teodfwpq.jpg",
    cap:
      "Cadiz's Juan Cala will speak to the media on Tuesday following racism allegations",
    aut: "Guy Atkinson",
    ava: "",
  },
  {
    id: 71482,
    pid: 7,
    seo:
      "youssoufa-moukoko-record-breaking-season-ended-abruptly-by-injury-7-19n9wq5zsdaqe1qr4cuixvdbad",
    tit: "Moukoko's record-breaking season ended abruptly by injury",
    des:
      "Borussia Dortmund announced Youssoufa Moukoko will play no further part this season due to an injury sustained on international duty.",
    con:
      "<p>Youssoufa Moukoko's record-breaking season is over after suffering ligament damage in his foot, Borussia Dortmund have confirmed.</p><p>Moukoko became the youngest player in the Bundesliga's history last November when making his debut the day after his 16th birthday.</p><p>The Germany youth international had long been considered a big prospect at Dortmund, having set a number of records in the club's academy despite generally playing several age groups up.</p><p>Even before he turned 16, Moukoko was training with the first-team and he soon followed up his Bundesliga record by also becoming the Champions League's youngest-ever player (16 years, 18 days).</p><p>Edin Terzic handed him a first Bundesliga start after replacing the sacked Lucien Favre, and he subsequently became the German top-flight's youngest scorer a few days later in a 2-1 defeat to Union Berlin.</p><p>He is by far the most junior player to have featured across Europe's top five leagues this term (16y, 136d) – Tottenham's Dane Scarlett is the second youngest (17y, 12d).</p><p>There are also only four players who are still teenagers that have bettered his haul of three league goals – Florian Wirtz and Ansu Fati have four, Bukayo Saka has five and Arnaud Kalimuendo is out in front on six.</p><p>But Moukoko will not be adding any more to his tally this term, owing to a foot injury.</p><p>A brief statement released on Twitter read: \"Youssoufa Moukoko is out for the rest of the season with a ligament injury in his foot.</p><p>\"Get well soon, boy!\"</p><p>Moukoko suffered the injury ahead of Germany's European Under-21 Championship group stage match against Hungary.</p><p>While it was initially thought the issue would only keep him out of Germany's following two games, it turned out to be rather more serious.</p><p>Dortmund look likely to miss out on Champions League football next season, with BVB fifth on 43 points, trailing Eintracht Frankfurt by seven points with as many matches left.</p>",
    pub: 1617620623,
    tst: "c1let3qghhqg8nv5fl7g",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/youssoufa-moukoko-record-breaking-season-ended-abruptly-by-injury-7-19n9wq5zsdaqe1qr4cuixvdbad.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/youssoufa-moukoko-record-breaking-season-ended-abruptly-by-injury-7-19n9wq5zsdaqe1qr4cuixvdbad.jpg",
    cap: "Youssoufa Moukoko's season is over",
    aut: "Ryan Benson",
    ava: "",
  },
  {
    id: 71480,
    pid: 7,
    seo:
      "borussia-dortmund-no-alternative-erling-haaland-would-listen-exceptional-jadon-sancho-offer-watzke-7-g75now3d0aqh11zemobxulm7d",
    tit:
      "Dortmund have 'no alternative' to Haaland, would listen to 'exceptional' Sancho offer – Watzke",
    des:
      "Hans-Joachim Watzke says Borussia Dortmund are not prepared to think about a possible future without Erling Haaland in it.",
    con:
      '<p>Borussia Dortmund do not have an "alternative plan" should Erling Haaland leave the club, but they would listen to an "exceptional" offer for Jadon Sancho, according to managing director Hans-Joachim Watzke.</p><p>Norway international Haaland is in high demand after netting 49 goals in 50 appearances for Dortmund, attracting interest from the likes of Barcelona, Real Madrid, Paris Saint-Germain, Manchester City and Manchester United.</p><p>He has scored 21 goals in 22 Bundesliga games this term, adding another 10 from six games in the Champions League, a competition in which he tops the scoring charts.</p><p>Haaland\'s agent, Mino Raiola, is reported to have been in contact with a number of clubs as speculation over the 20-year-old\'s future grows.</p><p>But, according to Watzke, the Bundesliga outfit are not prepared to envisage life without him.</p><p>"We do not have a parallel plan," he told Goal. "We will discuss this in peace with Erling, his father and his advisor Mino Raiola.</p><p>"We also want him to be happy to stay with us, to score goals for BVB next year with conviction. There is no alternative plan."</p><p>Another player heavily linked with a move away from the club is England international Sancho.</p><p>Manchester United were reported to be close to a deal for the 21-year-old before the start of the 2020-21 season, but Sancho stayed in Germany.</p><p>He has played 31 games across all competitions this term, scoring 12 goals.</p><p>While Watzke expects a quiet off-season following the turmoil inflicted by the coronavirus pandemic, he said the club would not dismiss a significant bid for Sancho.</p><p>Asked what the likelihood of Haaland and Sancho both playing for Dortmund next season is, Watzke responded: "I\'m not getting involved in probabilities, it\'s no good.</p><p>"Jadon Sancho has been with us much longer than Erling Haaland. We\'ll have to speak to Jadon, too. If there is an exceptional offer, we will discuss it with the player and the agent, as always.</p><p>"Nonetheless, I am very sure that the transfer market will only run to a very limited extent this summer. Especially with the really big clubs, you can see what kind of wounds coronavirus has inflicted. They are not small ones that heal within two weeks."</p><p>Dortmund travel to Manchester City for the first leg of their Champions League quarter-final clash on Tuesday.</p>',
    pub: 1617620185,
    tst: "c1lepmaghhqg8nv5fl6g",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/borussia-dortmund-no-alternative-erling-haaland-would-listen-exceptional-jadon-sancho-offer-watzke-7-g75now3d0aqh11zemobxulm7d.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/borussia-dortmund-no-alternative-erling-haaland-would-listen-exceptional-jadon-sancho-offer-watzke-7-g75now3d0aqh11zemobxulm7d.jpg",
    cap: "Borussia Dortmund pair Erling Haaland (l) and Jadon Sancho celebrate",
    aut: "Guy Atkinson",
    ava: "",
  },
  {
    id: 71479,
    pid: 7,
    seo:
      "pep-guardiola-number-nine-erling-haaland-audition-man-city-borussia-dortmund-7-16jjwkxtmm6zy11n8t573ldsbg",
    tit:
      "Guardiola's next number nine? Haaland set to audition for football's toughest gig",
    des:
      "Erling Haaland is rumoured to be Manchester City's top target to replace Sergio Aguero but being Pep Guardiola's striker can be hard work.",
    con:
      "<p>The first time Pep Guardiola was drawn to face a Bundesliga team in the Champions League as Manchester City manager, the match was postponed after a torrential pre-match downpour soaked the Etihad Stadium.</p><p>Twenty-four hours later, Borussia Monchengladbach were swatted aside 4-0 but there were some other, more incongruous storm clouds hovering.</p><p>Sergio Aguero scored a hat-trick, already his second of the campaign to move on to nine goals in his first five outings under Guardiola.  A brace that weekend at Swansea City took him to 11 in six, but his manager was not completely satisfied with the bigger picture.</p><p>\"Sergio just has a talent to score goals that is natural, I cannot teach him that,\" Guardiola said.</p><p>\"What I can tell him is there is a team behind him that is going to help him. I want to convince him to help them and, if it happens in that way, he's going to score a lot of goals.\"</p><p>Those fraught moments in Guardiola and Aguero's early relationship at City, one that looked to be hurtling towards an early end when Gabriel Jesus arrived in January 2017 and displaced the Argentina striker from the starting line-up, were long forgotten in the glowing tributes paid last week.</p><p>Aguero will leave City when his contract expires in June as the club's all-time record goalscorer and the top scoring overseas player in Premier League history.</p><p>Bundesliga opponents are back on the agenda this week, with Borussia Dortmund in town for the first leg of a Champions League quarter-final. Erling Haaland, presumed by many to be Aguero's most suitable heir, will be the focus of much pre-match attention.</p><p>Should City emerge from the pack of European heavyweights to claim Haaland's signature, the experience of Guardiola's previous centre forwards – from those who eventually thrived like Aguero, to those who fell by the wayside – suggest there would be plenty of hard work ahead for the Norwegian youngster.</p><p>False nines and harsh truths</p><p>Guardiola's most celebrated innovation during his trophy-laden stint in charge of Barcelona was Lionel Messi's deployment as a false nine, helping Aguero's compatriot to flourish into he world's finest player.</p><p>However, more traditional centre-forwards experienced collateral damage. Samuel Eto'o and Thierry Henry flanked Messi in the 2009 Champions League final triumph over Manchester United. A year later they had both left Camp Nou, as had Zlatan Ibrahimovic after a year under Guardiola most notable for his string of subsequent withering comments about the Catalan tactician.</p><p>If the assumption was these supreme strikers were simply victims of playing second fiddle to Guardiola's star pupil, his stint at Bayern Munich suggested something more baked in to his football philosophy that meant centre forwards would adapt to the coach and not the other way around.</p><p>After a season under Guardiola in 2013-14, Mario Mandzukic stomped off to Atletico Madrid and accused the coach of a lack of respect. Robert Lewandowski took his place but the returns that now make the Poland superstar the most feared number nine in Europe were not immediately forthcoming.</p><p>A haul of 17 Bundesliga goals in 2014-15 was way below the levels he would go on to set. The breakout moment of his Bayern career came in September 2015, when he ravenously rattled home five goals in a mind-boggling nine minutes against Wolfsburg. An often-forgotten plot point of those Lewandowski heroics is they came as a substitute. Guardiola had started Mario Gotze, Thomas Muller and Douglas Costa in the sort of fluid forward line that did for the likes of Ibrahimovic and Mandzukic.</p><p>Since August 2011 – the month of Aguero's City debut and the first season Lewandowski was a regular starter at Dortmund - only Messi (483) and Cristiano Ronaldo (460) have scored more goals across all competitions among players from the top five European leagues than Bayern's star striker.</p><p>Lewandowski (380) is the only other player above 300, with Aguero seventh overall (257) behind Luis Suarez (295), Edinson Cavani (278) and Pierre-Emerick Aubameyang (264).</p><p>If Haaland were to link up with Guardiola, history suggests these are the sort of levels he will have to hit. The signs of the past 18 months point promisingly in that direction.</p><p>The boy wonder</p><p>There were echoes of Lewandowski's Wolfsburg heroics – and, for that matter, Aguero's \"anything you can do…\" efforts of five goals in 20 minutes against Newcastle United a month later – in Haaland's sensational Bundesliga debut last January 18.</p><p>The 20-year-old came on as a second-half substitute and fired a 23-minute hat-trick to inspire Dortmund's 5-3 win over Augsburg.</p><p>In the spell from that game onwards, Haaland has 49 goals in all competitions, a haul only bettered across the top five leagues by Lewandowski (67) and Ronaldo (52). Despite being in contention for four major honours this term, City's leading scorers during the same period are Raheem Sterling and Jesus, with 24 and 22 respectively.</p><p>It seems Haaland would offer an obvious uplift, thanks in large part to his remarkable efficiency in front of goal. At Dortmund, he boasts a shot conversion rate of 33.6 per cent – better than any other player with 20 or more goals during this time.</p><p>For context, Lewandowski is back on 27.8 per cent and Romelu Lukaku and Andre Silva – each speculated alternatives should City be unable to land Haaland – convert just under a quarter of their attempts with 23.7 and 24.5 per cent respectively. Jesus (17.5) and Sterling (16.9) are about half as reliable as the man they will face this week.</p><p>A look at Haaland's expected goals (xG) figures for this season suggests judicious shot selection is a key part of his lethal makeup.</p><p>In the Bundesliga and Champions League combined, he has 29 non-penalty goals from 93 shots that have a cumulative xG value of 21.2.</p><p>By way of comparison, in 2018-19 – the campaign that will stand as his last truly great one in City colour – Aguero scored 24 times from open play in the Premier League and Champions League, outperforming an xG of 20.6 accumulated from 144 attempts.</p><p>Haaland's efficiency is again illustrated but a higher xG figure from 51 fewer efforts shows he is coldly selective when it comes to taking on shots, usually only pulling the trigger when a clear opportunity presents itself and to great success.</p><p>The speculative strike is not something he has a need to call upon too often, which holds an obvious appeal for a coach like Guardiola, who places such an emphasis on his team controlling every aspect of matches.</p><p>Attackers going rogue and firing off shots from all over the place is not high on the list of things he enjoys to see, placing a big tick next to Haaland.</p><p>Running and pressing until the end</p><p>Kevin De Bruyne's midfield masterclass to inspire a 2-0 weekend win at Leicester City was something of an archetype for what is required from City's big hitters.</p><p>Along with moments of high artistry such as his immaculate throughball to make Jesus' game-sealing goal possible, the Belgium international regained possession 14 times and contested 20 duels.</p><p>\"This is one of our identities. When the most talented players in the world are able to do this kind of job,\" Guardiola said.</p><p>\"There is no negotiation on this. You can play really badly but in terms of running and pressing for your team-mates until the end, we have to do it. Do it for your mates, because in the next action your mates are going to do it for you.</p><p>\"We cannot deny that in the five years we were together the players we had run and fight every single game. That is one of the things I am proud of the most.\"</p><p>So, how would Haaland shape up to this non-negotiable part of the job description?</p><p>In 2020-21, the Dortmund centre-forward has won possession in the final third 31 times, made 65 recoveries overall, nine interceptions and contested 195 duels.</p><p>Even taking into account a BVB playing style that can be more chaotic than Guardiola's finely grooved City, these efforts stack up well compared to peak Aguero.</p><p>Only once under Guardiola has he won back the ball deep in opposition territory more frequently – 33 times in 2018-19, when he made his sole foray into double figures for interceptions (13) during the Catalan's tenure.</p><p>Aguero made 122 recoveries and contested 481 duels during Guardiola's first season at the helm in 2016-17, when City were some distance from their present model of efficient dominance. His recoveries/duels returns of 86 and 310 and 89 and 325 during the subsequent back-to-back Premier League triumphs are more in line with where Haaland might be at the end of the current campaign.</p><p>This begins to demonstrate that Guardiola's running and pressing until the end is not quite as advertised. Much as with Haaland's shot selection, there is an emphasis on picking your moments to lay down maximum effort. His is not the Heavy Metal Football under which the Dortmund of a previous era thrived, more Post-Rock Football laced with frequent and precise tempo changes.</p><p>In his final two seasons under Manuel Pellegrini, when City's sole major honour was the 2015-16 EFL Cup, Aguero won back possession in the final third 35 and 40 times – returns never bettered in the Guardiola era despite an improvement in his work off the ball being rightly lauded. A total of 126 recoveries in 2015-16 is one he has not topped, while 24 interceptions back in 2011-12 showed Roberto Mancini benefitting from the youthful enthusiasm of his record signing.</p><p>The idea that Guardiola strikers have to run themselves into the ground for scant reward is a horror story Mino Raiola might try to spin for his new favourite client. But Aguero's experience shows it is more of a \"you scratch my back, I'll scratch yours\" relationship.</p><p>In 2018-19, he averaged 8.15 touches in the opposition box per 90 minutes. This figure increased to 9.08 last season, one only bettered by 9.99 in 2013-14 during his City career. During Pellegrini's final year in charge, Aguero's touches in the area were down to 6.67 per game.</p><p>Taking some time to adapt to Guardiola's methods is neither unusual nor limited to strikers, with Joao Cancelo and Rodri's second-season improvements this time around standing as the latest examples.</p><p>If Haaland became a blockbuster signing, there is no reason to think his rewards would be anything other than plentiful after a period of assimilation. For the next week or so, however, Guardiola's only concern will be keeping his precocious talents under wraps.</p>",
    pub: 1617617488,
    tst: "c1le4k2ghhqg8nv5fl60",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/pep-guardiola-number-nine-erling-haaland-audition-man-city-borussia-dortmund-7-16jjwkxtmm6zy11n8t573ldsbg.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/pep-guardiola-number-nine-erling-haaland-audition-man-city-borussia-dortmund-7-16jjwkxtmm6zy11n8t573ldsbg.jpg",
    cap: "Borussia Dortmund striker Erling Haaland",
    aut: "Dom Farrell",
    ava: "",
  },
  {
    id: 71477,
    pid: 7,
    seo:
      "alessandro-florenzi-psg-star-to-miss-bayern-munich-game-positive-covid-19-test-7-1of54sqduah9u1ozwaq2zsyhv3",
    tit: "PSG's Florenzi to miss Bayern game after positive COVID-19 test",
    des:
      "After missing Saturday's game with Lille, Alessandro Florenzi is set for a period of isolation due to coronavirus.",
    con:
      "<p>Alessandro Florenzi will miss the first leg of Paris Saint-Germain's Champions League quarter-final clash with Bayern Munich this week after testing positive for COVID-19.</p><p>The full-back follows PSG team-mate and compatriot Marco Verratti in testing positive for the virus after returning from international duty with Italy.</p><p>Both players missed their side's damaging 1-0 Ligue 1 defeat to Lille on Saturday and will be absent for the trip to Bayern on Wednesday, too. The second leg takes place on April 13.</p><p>A statement released by the club on Monday read: \"Following the last Sars-Cov2 PCR test, Alessandro Florenzi is confirmed positive.</p><p>\"He will therefore respect isolation and is subject to the appropriate health protocol. As a reminder, the player had been in isolation for a few days as a precaution.\"</p><p>Florenzi has made 29 appearances in all competitions this season, scoring two goals for Mauricio Pochettino's side.</p><p>The former Roma man is the latest confirmed case connected to the Azzurri squad. The Italian Football Federation (FIGC) announced last Wednesday that four staff members had isolated away from the group following testing carried out prior to the midweek fixture against Lithuania.</p><p>Juventus revealed on Thursday that Leonardo Bonucci had also returned a positive result upon returning to his club, while Sassuolo took the preventative step of leaving out their Italy players for the game against Roma on Saturday.</p>",
    pub: 1617612254,
    tst: "c1lcrnighhqg8nv5fl40",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/alessandro-florenzi-psg-star-to-miss-bayern-munich-game-positive-covid-19-test-7-1of54sqduah9u1ozwaq2zsyhv3.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/alessandro-florenzi-psg-star-to-miss-bayern-munich-game-positive-covid-19-test-7-1of54sqduah9u1ozwaq2zsyhv3.jpg",
    cap:
      "PSG full-back Alessandro Florenzi will miss the Champions League quarter-final first leg against Bayern Munich",
    aut: "Guy Atkinson",
    ava: "",
  },
  {
    id: 71473,
    pid: 7,
    seo:
      "rumour-has-it-lukaku-barcelona-inter-cristiano-ronaldo-juventus-7-1cglo33ya0yuk12piflmfdbdin",
    tit:
      "Rumour Has It: Lukaku to Barcelona? Ronaldo keen to see out Juve contract",
    des: "Could Romelu Lukaku leaving Inter for LaLiga giants Barcelona?",
    con:
      "<p>Romelu Lukaku has starred for Inter since arriving from Manchester United in 2019.</p><p>Lukaku is spearheading Inter's quest for a Serie A title, with Antonio Conte's side clear atop the table.</p><p>His exploits, however, have not gone unnoticed in Europe.</p><p>TOP STORY – LUKAKU HAPPY AT INTER </p><p>Inter star Romelu Lukaku is flattered by Barcelona's interest but is not looking to leave the Nerazzurri, according to Mundo Deportivo.</p><p>Lukaku has been linked with Barca, Real Madrid and former club Chelsea following his exploits for Inter, who are closing in on the Scudetto.</p><p>But Lukaku is happy at Inter, with the Belgium international only possibly leaving San Siro should the Italian powerhouse seek to raise funds.</p><p>ROUND-UP </p><p>- Tuttosport reports Cristiano Ronaldo wants to see out his Juventus contract, which runs until June 2022. Ronaldo has been tipped to leave Turin, where Juve are struggling under Andrea Pirlo this season. Former clubs Madrid and United have emerged as possible destinations, as well as Paris Saint-Germain. However, Ronaldo is keen to continue at the club, should they qualify for the Champions League.</p><p>- PSG star Kylian Mbappe remains a priority signing for Madrid, claims Diario AS. Mbappe has been a long-term target in the Spanish capital, though the economic fallout following the coronavirus pandemic appears to have derailed Madrid's pursuit. But Los Blancos – also linked with in-demand Borussia Dortmund sensation Erling Haaland – are still determined to prise Mbappe from Paris.</p><p>- Record reports United are ready to make a move for Sporting CP star Nuno Mendes, who has also been linked with Manchester City and Liverpool. United could reportedly use Alex Telles in a deal to sign the Portuguese full-back.</p><p>- Milan captain Alessio Romagnoli is eyeing a new deal amid interest from Barca and Chelsea, according to Calciomercato. Romagnoli is contracted to the Rossoneri until 2022. Barca's reported pursuit comes as they eye the likes of Bayern Munich star David Alaba, City duo Eric Garcia and Sergio Aguero, Lyon forward Memphis Depay and Liverpool midfielder Georginio Wijnaldum.</p>",
    pub: 1617605479,
    tst: "c1lb6pqghhqg8nv5fl20",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/rumour-has-it-lukaku-barcelona-inter-cristiano-ronaldo-juventus-7-1cglo33ya0yuk12piflmfdbdin.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/rumour-has-it-lukaku-barcelona-inter-cristiano-ronaldo-juventus-7-1cglo33ya0yuk12piflmfdbdin.jpg",
    cap: "Romelu Lukaku is crucial to Inter's Scudetto hopes",
    aut: "Sacha Pisani",
    ava: "",
  },
  {
    id: 71471,
    pid: 7,
    seo:
      "psg-di-maria-messi-barcelona-transfer-news-7-6tfv7d3stssz1b070adt7mjum",
    tit: "PSG's Di Maria: Playing with Messi would be wonderful",
    des:
      "Angel Di Maria spoke about Argentina team-mate Lionel Messi, whose Barcelona future is far from certain beyond 2020-21.",
    con:
      '<p>Paris Saint-Germain attacker Angel Di Maria said it would be "wonderful" to play alongside Lionel Messi amid doubts over his Barcelona future.</p><p>Messi is out of contract at the end of the season and the superstar Barca captain has been heavily linked with Ligue 1 champions PSG and Premier League leaders Manchester City.</p><p>Barca – led by new president Joan Laporta – remain hopeful of re-signing the record six-time Ballon d\'Or winner, who has spent his entire senior career at Camp Nou.</p><p>Di Maria has played alongside Messi at international level for Argentina and the PSG star admitted he would love to join forces with his countryman at club level.</p><p>"From my whole career, from everything I\'ve seen, I think Leo is from another planet," Di Maria told beIN SPORTS. "To have him as a team-mate would be wonderful.</p><p>"But he is a Barcelona player, he has a contract. After that, we\'ll see.</p><p>"I talk a lot with him and I always tell him that the important thing is his happiness and that of his family. It\'s hard to say anything else."</p><p>Barca face Real Valladolid on Monday, with Ronald Koeman\'s men able to move within a point of LaLiga leaders Atletico Madrid.</p><p>Messi has been directly involved in 23 league goals in 2021 – 16 goals and seven assists – which is more than any other player in the top five European leagues.</p><p>The Argentinian has had a direct hand in eight goals in his last four LaLiga games against Valladolid – four goals and four assists.</p><p>Those goal involvements have helped Barca to 13 wins in their previous 14 LaLiga games against Valladolid, with the only exception being a 1-0 defeat away from home in March 2014.</p>',
    pub: 1617601584,
    tst: "c1la8c2ghhqg8nv5fkvg",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/psg-di-maria-messi-barcelona-transfer-news-7-6tfv7d3stssz1b070adt7mjum.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/psg-di-maria-messi-barcelona-transfer-news-7-6tfv7d3stssz1b070adt7mjum.jpg",
    cap: "",
    aut: "Sacha Pisani",
    ava: "",
  },
  {
    id: 71466,
    pid: 7,
    seo:
      "diego-simeone-atletico-madrid-laliga-sevilla-7-1mvb6880bfa7e1n57ghvfiftd3",
    tit:
      "Simeone not nervous but questions Atletico's intensity as LaLiga leaders slip up",
    des: "Diego Simeone discussed Atletico Madrid's loss to Sevilla on Sunday.",
    con:
      "<p>Diego Simeone said Atletico Madrid do not feel nervous after the LaLiga leaders slipped up, though he did question his team's intensity.</p><p>Atletico suffered a costly 1-0 loss to Sevilla on Sunday, which saw their lead atop the table cut to three points, though Barcelona could close to within a solitary point if they beat Real Valladolid on Monday.</p><p>Despite Jan Oblak's penalty heroics, Atletico lost to fourth-placed Sevilla in LaLiga for the first time since 2016 following Marcos Acuna's 70th-minute header.</p><p>Atletico have won just four of nine games, having threatened to run away with the LaLiga trophy earlier in the season but pressure is mounting on Simeone's side as defending champions Real Madrid and Barca close in.</p><p>\"We have to keep working hard and taking a look at what we have to improve,\" Simeone told reporters. \"We have to slightly question our intensity and we need to make sure we get back the intensity that won us so many games and prove the squad's talent and ability.</p><p>\"We have a week ahead of us now that some players, because of bookings, will not be able to play. We'll try and prepare as well as we can, and we'll keep going game by game. That won't change my mentality at all.</p><p>\"We can't accept what happened today but we also have to accept that we have to improve, and there are very negative stats at the moment.\"</p><p>Atletico have lost two out of their past seven games in LaLiga (W3 D2), as many as their previous 40 games in all competitions (W26 D12).</p><p>Simeone, though, shouldered the blame for Atletico's defeat away to Julen Lopetegui's Sevilla.</p><p>\"If I make the change at 30 minutes in, that's because myself as the manager, I made the mistake in the analysis of the game, and we wanted to try and do something else, and we tried to make as many changes as we could to make sure we push forward,\" said Simeone.</p><p>\"I think the team improved in the second half, we were much more competitive, and we improved a bit more closely as to what we can do. We knew it was a very level game, especially in the second half. We had the chance from Mario Hermoso as well as Angel Correa's chance which was very clear as well.</p><p>\"We are a side that needs to win games like this and we knew that probably, it was my mistake because I made the wrong decisions before the game so that the team felt comfortable. In the second half we just weren't close enough to what we normally play.\"</p><p>Atletico captain Koke was critical of the referee for not reviewing Acuna's goal amid claims Lucas Ocampos handled the ball at the start of the goalscoring move.</p><p>\"It was a clear handball for the goal and there was another handball [by Diego Carlos] which should have been a second yellow card,\" he said.</p><p>\"We have VAR which has to be there to help out. Today wasn't our day. On other days it has favoured us, today it didn't go our way.</p><p>\"This is a tough defeat but we tried everything. We struggled in the first half but in the second we had chances.\"</p><p>Atletico director Tomas Renones added: The handball is clear [by Ocampos] and referee should have seen it. It has hurt us, but Atletico are not going to complain, just keep working to stay top of La Liga.\"</p><p> </p>",
    pub: 1617588035,
    tst: "c1l6ugqghhqg8nv5fkt0",
    thb:
      "https://news.livescore.com/newsapi/04/soccer/thumb/diego-simeone-atletico-madrid-laliga-sevilla-7-1mvb6880bfa7e1n57ghvfiftd3.jpg",
    img:
      "https://news.livescore.com/newsapi/04/soccer/image/diego-simeone-atletico-madrid-laliga-sevilla-7-1mvb6880bfa7e1n57ghvfiftd3.jpg",
    cap: "Atletico Madrid head coach Diego Simeone",
    aut: "Sacha Pisani",
    ava: "",
  },
];

const entertainmentArticles = [
  {
    id: 692,
    name: "Vibe",
    slug: "692-vibe",
    powerstats: {
      intelligence: 50,
      strength: 10,
      speed: 17,
      durability: 30,
      power: 99,
      combat: 30,
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["157 lb", "71 kg"],
      eyeColor: "Brown",
      hairColor: "Black",
    },
    biography: {
      fullName: "Cisco Ramon",
      alterEgos: "No alter egos found.",
      aliases: ["-"],
      placeOfBirth: "-",
      firstAppearance: "The New 52: FCBD Special Edition #1",
      publisher: "DC Comics",
      alignment: "good",
    },
    work: { occupation: "-", base: "-" },
    connections: {
      groupAffiliation: "-",
      relatives: "Rapture (Armando Ramon, brother), Dante Ramon (brother)",
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/692-vibe.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/692-vibe.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/692-vibe.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/692-vibe.jpg",
    },
  },
  {
    id: 676,
    name: "Triplicate Girl",
    slug: "676-triplicate-girl",
    powerstats: {
      intelligence: 63,
      strength: 10,
      speed: 23,
      durability: 42,
      power: 44,
      combat: 42,
    },
    appearance: {
      gender: "Female",
      race: null,
      height: ["5'6", "168 cm"],
      weight: ["130 lb", "59 kg"],
      eyeColor: "Purple",
      hairColor: "Brown",
    },
    biography: {
      fullName: "Luornu Durgo",
      alterEgos: "No alter egos found.",
      aliases: ["Duo Damsel", "Una", "Triad"],
      placeOfBirth: "-",
      firstAppearance: "Teen Titans/Legion Special #1",
      publisher: "DC Comics",
      alignment: "good",
    },
    work: { occupation: "-", base: "Earth, 31st century" },
    connections: {
      groupAffiliation: "Legion of Super-Heroes",
      relatives: "-",
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/676-triplicate-girl.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/676-triplicate-girl.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/676-triplicate-girl.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/676-triplicate-girl.jpg",
    },
  },
  {
    id: 481,
    name: "Namor",
    slug: "481-namor",
    powerstats: {
      intelligence: 69,
      strength: 95,
      speed: 58,
      durability: 70,
      power: 73,
      combat: 85,
    },
    appearance: {
      gender: "Male",
      race: "Atlantean",
      height: ["6'2", "188 cm"],
      weight: ["278 lb", "125 kg"],
      eyeColor: "Grey",
      hairColor: "Black",
    },
    biography: {
      fullName: "Namor McKenzie",
      alterEgos: "No alter egos found.",
      aliases: [
        "Imperius Rex",
        "Dr. G.W. Falton",
        "Sub-Mariner",
        '"Subby"',
        "Namor the First",
        "Avenging Son",
        "Old Man",
        "Rex",
        "Joe Pierre",
        "Lord of the Seven Seas",
        "the Scion of the Deep",
        "Phoenix",
      ],
      placeOfBirth: "Atlantis",
      firstAppearance: "Motion Picture Funnies Weekly #1 (April, 1939)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation: "King of Atlantis, Adventurer; former warrior, commando, CEO",
      base:
        "Ultimate Universe; formerly New Atlantis, Utopia, San Francisco Bay, California; Atlantis; Necropolis, Wakanda; occasionally mobile",
    },
    connections: {
      groupAffiliation:
        "Cabal (founder), Invaders, Atlantis; formerly Illuminati, X-Men, Extinction Team, Phoenix Five, Defenders, Osborn's X-Men, Osborn's Cabal, Avengers, All-Winners Squad, Titans Three, Fantastic Four, Oracle Inc., Order, Deep Six (founder and leader); ally o",
      relatives:
        "Elanna (maternal ancestor), Tanas (maternal ancestor), Zartra (maternal ancestor), Orrek (maternal distant relative), Stegor (maternal ancestor), Kamuu (maternal ancestor), Harran (maternal ancestor), Kalen (maternal ancestor), Ossem (maternal ancestor), Balaal (maternal ancestor), Thallo (maternal ancestor), Immanu (maternal great-grandfather-in-law, deceased), Thakorr (maternal grandfather, deceased), Korra (maternal grandmother), Wa-Korr (grandfather-in-law, presumed deceased), Wathan (father-in-law, presumed deceased), Tom Smallwood (father-in-law), Gladys Smallwood (mother-in-law), Zarina (maternal aunt), Namora's father (uncle), Daka (maternal uncle), Brynn (aunt-by-marriage/step-grandmother), Fen (mother, deceased), Leonard McKenzie (father, deceased), Experiment N2 (clone), Lawrence McKenzie (paternal half-brother), Dorma (wife / distant cousin, deceased), Marrina (wife), three unnamed children (by Marrina), Kamar (son, deceased), Black Moray (Leon McKenzie) (paternal half-nephew), Llyron McKenzie (paternal great-nephew), Dan Smallwood (brother-in-law), Namora (maternal cousin), Beemer (maternal cousin), Bobo (maternal cousin), Byrrahna (maternal cousin), Namita (maternal cousin), Daro (maternal cousin), Dara (maternal cousin), Seth (maternal cousin), Argus (maternal cousin), Arkus (maternal cousin), Byrrah (maternal cousin), Namorita (maternal 1st cousin once removed).",
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/481-namor.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/481-namor.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/481-namor.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/481-namor.jpg",
    },
  },
  {
    id: 344,
    name: "Invisible Woman",
    slug: "344-invisible-woman",
    powerstats: {
      intelligence: 88,
      strength: 10,
      speed: 27,
      durability: 85,
      power: 93,
      combat: 56,
    },
    appearance: {
      gender: "Female",
      race: "Human / Radiation",
      height: ["5'6", "168 cm"],
      weight: ["120 lb", "54 kg"],
      eyeColor: "blue",
      hairColor: "Blond",
    },
    biography: {
      fullName: "Susan Storm Richards",
      alterEgos: "No alter egos found.",
      aliases: ["Invisible Girl"],
      placeOfBirth: "Glenville, Long Island, New York",
      firstAppearance: "FANTASTIC FOUR #1",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation:
        "Member of the Fantastic Four, financial manager for Fantastic Four Inc, occasional model and actress",
      base: "Pier Four, New York City",
    },
    connections: {
      groupAffiliation:
        "Fantastic Four, formerly; Secret Avengers, Avengers, Brides of Set, Pawns of Death",
      relatives:
        'Reed Richards (Mister Fantastic, husband), Franklin Richards (son), Valeria Richards (daughter), Johnny Storm (Human Torch, brother), Franklin Storm (father, deceased), Mary Storm (mother, deceased), Marygay Jewel Dinkins (aunt), "Bones" (cousin), Evelyn Richards (mother-in-law, deceased), Nathaniel Richards (father-in-law), Cassandra Richards (Warlord, mother-in-law, deceased), unnamed child of Nathaniel Richards (brother-in-law), Tara Richards (Huntara, sister-in-law), Kristoff Vernard (alleged brother-in-law), Lyja (sister-in-law)',
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/344-invisible-woman.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/344-invisible-woman.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/344-invisible-woman.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/344-invisible-woman.jpg",
    },
  },
  {
    id: 403,
    name: "Legion",
    slug: "403-legion",
    powerstats: {
      intelligence: 50,
      strength: 100,
      speed: 42,
      durability: 30,
      power: 100,
      combat: 75,
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["5'9", "175 cm"],
      weight: ["130 lb", "59 kg"],
      eyeColor: "Green / Blue",
      hairColor: "Black",
    },
    biography: {
      fullName: "David Haller",
      alterEgos: "No alter egos found.",
      aliases: [
        "Jack Wayne",
        "Cyndi",
        "Jemail Karami",
        "Daniel Lucas Haller",
        "Daniel Haller",
        "Rodney",
        "Ian",
        "Lucas",
        "Fanya",
        "Boris",
        "Zachary",
        "Sylvester",
        "God-Mutant",
      ],
      placeOfBirth: "Israel",
      firstAppearance: "New Mutants #25 (March, 1985)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation: "Adventurer, Student",
      base:
        "formerly Ruth Aldine's mind, Utopia, San Francisco Bay, California; Westcliffe, Colorado; \"No-Time\"; Moira MacTaggart's Mutant Research Center, Muir Island, off the coast of Scotland; Haifa; Paris, France",
    },
    connections: {
      groupAffiliation: "Formerly X-Men, Muir Island X-Men",
      relatives:
        "Charles Graymalkin (paternal collateral ancestor), Marcia Graymalkin (paternal collateral ancestor), Jonas Graymalkin (paternal collateral ancestor), Brian Xavier (paternal grandfather), Sharon Xavier (paternal grandmother), Kurt Marko (paternal step-grandfather), Cain Marko (paternal step-uncle), Cassandra Nova Xavier (paternal aunt), Charles Xavier (father), Gabrielle Haller (mother), Daniel Shomron (stepfather), Xavier Family (paternal relatives), Ruth Aldine (lover/current body)",
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/403-legion.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/403-legion.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/403-legion.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/403-legion.jpg",
    },
  },
  {
    id: 327,
    name: "Hit-Girl",
    slug: "327-hit-girl",
    powerstats: {
      intelligence: 56,
      strength: 7,
      speed: 29,
      durability: 20,
      power: 27,
      combat: 65,
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      eyeColor: "-",
      hairColor: "-",
    },
    biography: {
      fullName: "Mindy McCready",
      alterEgos: "No alter egos found.",
      aliases: ["Hit Girl", "Hitgirl"],
      placeOfBirth: "-",
      firstAppearance: "-",
      publisher: "Icon Comics",
      alignment: "good",
    },
    work: { occupation: "-", base: "-" },
    connections: { groupAffiliation: "-", relatives: "-" },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/327-hit-girl.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/327-hit-girl.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/327-hit-girl.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/327-hit-girl.jpg",
    },
  },
  {
    id: 396,
    name: "Krypto",
    slug: "396-krypto",
    powerstats: {
      intelligence: 9,
      strength: 80,
      speed: 100,
      durability: 90,
      power: 82,
      combat: 40,
    },
    appearance: {
      gender: "Male",
      race: "Kryptonian",
      height: ["0'25", "64 cm"],
      weight: ["40 lb", "18 kg"],
      eyeColor: "Blue",
      hairColor: "White",
    },
    biography: {
      fullName: "Krypto the Superdog",
      alterEgos: "No alter egos found.",
      aliases: ["-"],
      placeOfBirth: "-",
      firstAppearance: "Adventure Comics #210 (March, 1955)",
      publisher: "DC Comics",
      alignment: "good",
    },
    work: { occupation: "-", base: "Smallville, Kansas" },
    connections: { groupAffiliation: "Superman", relatives: "-" },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/396-krypto.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/396-krypto.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/396-krypto.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/396-krypto.jpg",
    },
  },
  {
    id: 201,
    name: "Daredevil",
    slug: "201-daredevil",
    powerstats: {
      intelligence: 75,
      strength: 13,
      speed: 25,
      durability: 35,
      power: 61,
      combat: 100,
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["200 lb", "90 kg"],
      eyeColor: "Blue",
      hairColor: "Red",
    },
    biography: {
      fullName: "Matt Murdock",
      alterEgos: "No alter egos found.",
      aliases: [
        "Matt",
        "Jack Batlin",
        "Kingpin of Crime",
        "Laurent LeVasseur",
        'Michael "Mike" Murdock',
        "Scarlet Swashbuckler",
        "Nameless One",
        "Kingpin of Hell's Kitchen",
        "The Man Without Fear",
        "The Guardian Devil",
        "DD",
        "Red",
        "Hornhead",
        "Cooper Peyton",
        "Captain Universe",
      ],
      placeOfBirth: "New York City, New York",
      firstAppearance: "Daredevil #1 (April, 1964)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation: "Adventurer, vigilante, Attorney at Law",
      base: "Hell's Kitchen, New York, New York, Shadowland (formerly)",
    },
    connections: {
      groupAffiliation:
        "none; Formerly: partner of Black Widow (Natasha Romanoff), Defenders, S.H.I.E.L.D., Marvel Knights, Secret Avengers (Civil War), Hand leader.",
      relatives:
        'Jonathan "Battling Jack" Murdock (Father, deceased), Maggie Murdock (aka Sister Maggie, Mother), Milla Donovan (ex-wife)',
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/201-daredevil.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/201-daredevil.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/201-daredevil.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/201-daredevil.jpg",
    },
  },
  {
    id: 107,
    name: "Black Widow",
    slug: "107-black-widow",
    powerstats: {
      intelligence: 75,
      strength: 13,
      speed: 33,
      durability: 30,
      power: 36,
      combat: 100,
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'7", "170 cm"],
      weight: ["131 lb", "59 kg"],
      eyeColor: "Green",
      hairColor: "Auburn",
    },
    biography: {
      fullName: "Natasha Romanoff",
      alterEgos: "No alter egos found.",
      aliases: [
        "Yelena Belova",
        "Natasha Romanoff",
        "Natasha",
        "Tasha",
        "Madame Natasha",
        "Nancy Rushman",
        "Laura Matthers",
        "Nadine Roman",
        '"Oktober"',
        "Black Pearl",
        "Ebon Flame",
      ],
      placeOfBirth: "-",
      firstAppearance: "Tales of Suspense #52",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation: "Adventurer, Intelligence agent, former ballerina",
      base: "Mobile",
    },
    connections: {
      groupAffiliation:
        'Secret Avengers; formerly Thunderbolts (as Yelena Belova), Nick Fury, Mighty Avengers, S.H.I.E.L.D., Avengers, Champions of Los Angeles, Lady Liberators, KGB, "Marvel Knights", partner of Daredevil, Hawkeye, Boris Turgenov, Logan',
      relatives:
        "Unnamed parents (presumed deceased); Alexi Shostakov (Red Guardian, estranged husband); Vindiktor (alleged brother, deceased)",
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/107-black-widow.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/107-black-widow.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/107-black-widow.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/107-black-widow.jpg",
    },
  },
  {
    id: 641,
    name: "Superboy",
    slug: "641-superboy",
    powerstats: {
      intelligence: 75,
      strength: 95,
      speed: 83,
      durability: 90,
      power: 95,
      combat: 60,
    },
    appearance: {
      gender: "Male",
      race: null,
      height: ["5'7", "170 cm"],
      weight: ["150 lb", "68 kg"],
      eyeColor: "Blue",
      hairColor: "Black",
    },
    biography: {
      fullName: "Kon-El / Conner Kent",
      alterEgos: "No alter egos found.",
      aliases: [
        "Experiment 13; Superman; Project: Superman; Carl Krummett; Project: Lionel Luthor; The Metropolis Kid",
        "Superman",
      ],
      placeOfBirth: "Project Cadmus cloning facility",
      firstAppearance: "Adventures of Superman #500 (June, 1993)",
      publisher: "DC Comics",
      alignment: "good",
    },
    work: {
      occupation: "-",
      base: "San Francisco; Smallville; Formerly Metropolis; Formerly Honolulu",
    },
    connections: {
      groupAffiliation:
        "Teen Titans, Legion of Super-Heroes, Team Superman; Formerly Young Justice, Project Cadmus, Ravers",
      relatives:
        "Superman (Kryptonian genetic template), Lex Luthor (Human genetic template), Match (clone)",
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/641-superboy.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/641-superboy.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/641-superboy.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/641-superboy.jpg",
    },
  },
  {
    id: 203,
    name: "Darkman",
    slug: "203-darkman",
    powerstats: {
      intelligence: 75,
      strength: 14,
      speed: 23,
      durability: 85,
      power: 12,
      combat: 28,
    },
    appearance: {
      gender: "Male",
      race: null,
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      eyeColor: "-",
      hairColor: "-",
    },
    biography: {
      fullName: "Peyton Westlake",
      alterEgos: "No alter egos found.",
      aliases: ["-"],
      placeOfBirth: "-",
      firstAppearance: "Darkman (August 24, 1990)",
      publisher: "Universal Studios",
      alignment: "good",
    },
    work: { occupation: "Scientist", base: "-" },
    connections: {
      groupAffiliation: "-",
      relatives: "Julie Hastings (girlfriend)",
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/203-darkman.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/203-darkman.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/203-darkman.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/203-darkman.jpg",
    },
  },
  {
    id: 178,
    name: "Claire Bennet",
    slug: "178-claire-bennet",
    powerstats: {
      intelligence: 38,
      strength: 9,
      speed: 12,
      durability: 100,
      power: 90,
      combat: 28,
    },
    appearance: {
      gender: "Female",
      race: null,
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      eyeColor: "Blue",
      hairColor: "Blond",
    },
    biography: {
      fullName: "Claire Bennet",
      alterEgos: "No alter egos found.",
      aliases: ["Vivian Lewis", "Claire Butler"],
      placeOfBirth: "-",
      firstAppearance: "Heroes S01E01",
      publisher: "NBC - Heroes",
      alignment: "good",
    },
    work: {
      occupation: "High school student, cheerleader",
      base: "formerly Odessa, TX, Costa Verde, CA",
    },
    connections: {
      groupAffiliation: "-",
      relatives:
        "Adoptive parents: Sandra Bennet, Noah Bennet, Biological parents: Meredith Gordon, Nathan Petrelli, Younger adoptive brother: Lyle Bennet,  Younger half brothers: Simon Petrelli, Monty Petrelli",
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/178-claire-bennet.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/178-claire-bennet.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/178-claire-bennet.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/178-claire-bennet.jpg",
    },
  },
  {
    id: 573,
    name: "Sasquatch",
    slug: "573-sasquatch",
    powerstats: {
      intelligence: 75,
      strength: 80,
      speed: 23,
      durability: 56,
      power: 15,
      combat: 42,
    },
    appearance: {
      gender: "Male",
      race: null,
      height: ["10'", "305 cm"],
      weight: ["2000 lb", "900 kg"],
      eyeColor: "Red",
      hairColor: "Orange",
    },
    biography: {
      fullName: "Walter Langkowski",
      alterEgos: "No alter egos found.",
      aliases: ["Box", "Wanda Langkowski"],
      placeOfBirth: "Edmonton, Alberta, Canada",
      firstAppearance: "-",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation:
        "Adventurer, bio-physicist, government operative; former college lecturer, professional football player",
      base: "-",
    },
    connections: {
      groupAffiliation:
        "Omega Flight; formerly Alpha Flight, Beta Flight, Gamma Flight, Howling Commandos",
      relatives:
        "Veronica Langkowsi (ex-wife), unidentified son, Lillian von Loont (Gilded Lily, great-aunt, deceased)",
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/573-sasquatch.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/573-sasquatch.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/573-sasquatch.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/573-sasquatch.jpg",
    },
  },
  {
    id: 677,
    name: "Triton",
    slug: "677-triton",
    powerstats: {
      intelligence: 56,
      strength: 63,
      speed: 50,
      durability: 65,
      power: 35,
      combat: 55,
    },
    appearance: {
      gender: "Male",
      race: "Inhuman",
      height: ["6'2", "188 cm"],
      weight: ["190 lb", "86 kg"],
      eyeColor: "Green",
      hairColor: "No Hair",
    },
    biography: {
      fullName: "Triton",
      alterEgos: "No alter egos found.",
      aliases: ["-"],
      placeOfBirth: "Island of Attilan, Atlantic Ocean",
      firstAppearance: "Fantastic Four #45 (December, 1965)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: { occupation: "-", base: "-" },
    connections: {
      groupAffiliation:
        "Inhuman Royal Family, Universal Inhumans, Royal Guard, New Inhuman Elite; formerly Shi'ar Army Elite Corps & Imperial Guard[citation needed], Namor's Deep Six",
      relatives:
        "Mander, Azur (parents, deceased), Karnak (brother, deceased), Magnar, Zeta (paternal grandparents), Kobar, La (maternal grandparents), Rynda (paternal aunt), Ambur (maternal aunt) ,Black Bolt, Maximus, Medusa, Crystal (cousins)",
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/677-triton.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/677-triton.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/677-triton.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/677-triton.jpg",
    },
  },
  {
    id: 613,
    name: "Spectre",
    slug: "613-spectre",
    powerstats: {
      intelligence: 88,
      strength: 100,
      speed: 100,
      durability: 100,
      power: 100,
      combat: 70,
    },
    appearance: {
      gender: "Male",
      race: "God / Eternal",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      eyeColor: "White",
      hairColor: "No Hair",
    },
    biography: {
      fullName: "Aztar",
      alterEgos: "Aztar",
      aliases: [
        "Spirit of Vengeance",
        "Wrath of God",
        "Spirit of Redemption",
        "Raguel",
        "James Corrigan",
        "Hal Jordan",
        "Cripus Allen",
      ],
      placeOfBirth: "-",
      firstAppearance: "More Fun Comics #52 (February, 1940)",
      publisher: "Aztar",
      alignment: "good",
    },
    work: { occupation: "-", base: "-" },
    connections: { groupAffiliation: "-", relatives: "-" },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/613-spectre.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/613-spectre.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/613-spectre.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/613-spectre.jpg",
    },
  },
  {
    id: 335,
    name: "Husk",
    slug: "335-husk",
    powerstats: {
      intelligence: 63,
      strength: 63,
      speed: 35,
      durability: 78,
      power: 48,
      combat: 64,
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'7", "170 cm"],
      weight: ["128 lb", "58 kg"],
      eyeColor: "Blue",
      hairColor: "Blond",
    },
    biography: {
      fullName: "Paige Elisabeth Guthrie",
      alterEgos: "No alter egos found.",
      aliases: ["Hayseed"],
      placeOfBirth: "Cumberland, Kentucky",
      firstAppearance: "Rom Annual #3 (November, 1984)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation: "Adventurer; formerly student, activist",
      base:
        "Base of operations unknown; formerly Xavier Institute, Salem Center, Westchester County, New York",
    },
    connections: {
      groupAffiliation: "X-Men, X-Corp, Generation X",
      relatives:
        "Thomas Zebulon Guthrie (father,deceased),Lucinda Guthrie (mother),Samuel Zachery Guthrie (brother,Cannonball),Joshua 'Jay' Guthrie (brother,Icarus),Joella Guthrie (sister),Elizabeth Guthrie (sister),Melody Guthrie (sister),Jeb Guthrie (brother),Lewis Guth",
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/335-husk.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/335-husk.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/335-husk.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/335-husk.jpg",
    },
  },
  {
    id: 577,
    name: "Scarlet Spider",
    slug: "577-scarlet-spider",
    powerstats: {
      intelligence: 75,
      strength: 53,
      speed: 60,
      durability: 74,
      power: 46,
      combat: 56,
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10'", "178 cm"],
      weight: ["165 lb", "74 kg"],
      eyeColor: "Blue",
      hairColor: "Blond",
    },
    biography: {
      fullName: "Benjamin Reilly",
      alterEgos: "Spider-Carnage",
      aliases: ["Spider-Clone", "Spider-Man"],
      placeOfBirth: "Place of birth unknown",
      firstAppearance:
        "Amazing Spider-Man # 149 (as Spider-Clone); Web of Spider-Man # 117 (as Ben Reilly)",
      publisher: "Spider-Carnage",
      alignment: "good",
    },
    work: { occupation: "Crime-fighter", base: "-" },
    connections: {
      groupAffiliation: "None; formerly New Warriors",
      relatives:
        "Peter Parker (clone of), May Parker (Aunt), Ben Parker (Uncle)",
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/577-scarlet-spider.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/577-scarlet-spider.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/577-scarlet-spider.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/577-scarlet-spider.jpg",
    },
  },
  {
    id: 484,
    name: "Namorita",
    slug: "484-namorita",
    powerstats: {
      intelligence: 50,
      strength: 72,
      speed: 47,
      durability: 70,
      power: 37,
      combat: 70,
    },
    appearance: {
      gender: "Female",
      race: null,
      height: ["5'6", "168 cm"],
      weight: ["225 lb", "101 kg"],
      eyeColor: "Blue",
      hairColor: "Blond",
    },
    biography: {
      fullName: "Namorita Prentiss",
      alterEgos: "No alter egos found.",
      aliases: ["Kymaera", "Hard"],
      placeOfBirth: "Atlantis Outskirts",
      firstAppearance: "SUB-MARINER Vol. 2 #50 (1972)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: {
      occupation: "Superhero, formerly Leader of Atlantis",
      base: "Mobile, formerly New Warriors headquarters and Atlantis",
    },
    connections: {
      groupAffiliation:
        "Formerly Council of Three, New Warriors, Fantastic Four, Soldiers of Misfortune, Water Children",
      relatives:
        "Namora (mother); Talan (father, deceased); Namor, Byrrah, Dara, Arkus (first cousins once removed); Fen (great-aunt, deceased); Thakorr (great-grandfather, deceased); Korra (great-grandmother, presumed deceased); large extended family; Betty Prentiss (legal guardian, deceased)",
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/484-namorita.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/484-namorita.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/484-namorita.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/484-namorita.jpg",
    },
  },
  {
    id: 456,
    name: "Mister Fantastic",
    slug: "456-mister-fantastic",
    powerstats: {
      intelligence: 100,
      strength: 10,
      speed: 18,
      durability: 70,
      power: 33,
      combat: 64,
    },
    appearance: {
      gender: "Male",
      race: "Human / Radiation",
      height: ["6'1", "185 cm"],
      weight: ["180 lb", "81 kg"],
      eyeColor: "Brown",
      hairColor: "Brown",
    },
    biography: {
      fullName: "Reed Richards",
      alterEgos: "No alter egos found.",
      aliases: ["Mr Fantastic"],
      placeOfBirth: "Central City, California",
      firstAppearance: "FANTASTIC FOUR #1",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    work: { occupation: "Scientist, adventurer", base: "New York City" },
    connections: {
      groupAffiliation: "Fantastic Four",
      relatives:
        "Nathaniai (father), Evelyn (mother, deceased), Susan Storm - Invisible Woman (wife), Franklin (son), Johnny Storm - Human Torch (brother-inlaw), Cassandra (stepmother, deceased), Immortus (father's descendant, see Immortus, Kang, Rama-Tut).",
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/456-mister-fantastic.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/456-mister-fantastic.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/456-mister-fantastic.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/456-mister-fantastic.jpg",
    },
  },
  {
    id: 656,
    name: "The Cape",
    slug: "656-the-cape",
    powerstats: {
      intelligence: 38,
      strength: 10,
      speed: 23,
      durability: 32,
      power: 22,
      combat: 64,
    },
    appearance: {
      gender: "Male",
      race: null,
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      eyeColor: "-",
      hairColor: "-",
    },
    biography: {
      fullName: "Vince Faraday",
      alterEgos: "No alter egos found.",
      aliases: ["Cape"],
      placeOfBirth: "-",
      firstAppearance: "The Cape S01E01 (2011)",
      publisher: null,
      alignment: "good",
    },
    work: { occupation: "-", base: "-" },
    connections: {
      groupAffiliation: "-",
      relatives: "Trip Faraday (son), Dana Thompson-Faraday (wife)",
    },
    images: {
      xs:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/656-the-cape.jpg",
      sm:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/656-the-cape.jpg",
      md:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/656-the-cape.jpg",
      lg:
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/656-the-cape.jpg",
    },
  },
];

const businessNewsArticles = [
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title: "How Mercedes-Benz Is Losing Its Prestige Image - CNBC",
    description: null,
    url:
      "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9bUVyZFZubG1FUk3SAQA?oc=5",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/1623C/production/_117848609_medariaarradondo.jpg",
    publishedAt: "2021-04-06T16:00:16Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "AnandTech",
    },
    author: "Andrei Frumusanu",
    title:
      "Intel 3rd Gen Xeon Scalable (Ice Lake SP) Review: Generationally Big, Competitively Small - AnandTech",
    description: null,
    url:
      "https://www.anandtech.com/show/16594/intel-3rd-gen-xeon-scalable-review",
    urlToImage:
      "https://images.anandtech.com/doci/16594/X-T30_DSF4435_678x452.jpg",
    publishedAt: "2021-04-06T16:00:00Z",
    content:
      "Section by Ian Cutress\r\nThe launch of Intel’s Ice Lake Xeon Scalable processors has been in the wings for a number of years. The delays to Intel’s 10nm manufacturing process have given a number of se… [+11279 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Michael Wayland",
    title:
      "GM confirms electric Chevrolet Silverado pickup to follow Hummer EV - CNBC",
    description:
      "The new Chevy Silverado EV is part of a $2.2 billion investment in a Detroit plant to produce an array of vehicles beginning later this year with a Hummer EV.",
    url:
      "https://www.cnbc.com/2021/04/06/gm-says-electric-chevrolet-silverado-pickup-to-follow-hummer-ev.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/106753319-1603234339353-Hummer_EV_screengrab.PNG?v=1603234519",
    publishedAt: "2021-04-06T16:00:00Z",
    content:
      "A sign is unveiled at General Motors Detroit-Hamtramck Assembly on Oct. 16, 2020, introducing the facility's new name: Factory Zero, Detroit-Hamtramck Assembly Center.\r\nDETROIT General Motors confirm… [+2467 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Michael Sheetz",
    title:
      "SpaceX does not plan to add 'tiered pricing' for Starlink satellite internet service, president says - CNBC",
    description:
      'SpaceX president Gwynne Shotwell does not think the company will add "tiered pricing" for its direct-to-consumer Starlink satellite internet service.',
    url:
      "https://www.cnbc.com/2021/04/06/spacexs-shotwell-no-plan-for-tiered-starlink-internet-pricing.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/103937227-GettyImages-456855070.jpg?v=1532564032",
    publishedAt: "2021-04-06T15:48:00Z",
    content:
      'SpaceX president and COO Gwynne Shotwell wants what SpaceX is doing to "reinvigorate the industry," while also getting "young children thinking about being in the space industry again."\r\nSpaceX presi… [+4229 chars]',
  },
  {
    source: {
      id: "ars-technica",
      name: "Ars Technica",
    },
    author: "Timothy B. Lee",
    title:
      "How the Supreme Court saved the software industry from API copyrights - Ars Technica",
    description:
      "The Supreme Court surprised everyone with its API copyright ruling.",
    url:
      "https://arstechnica.com/tech-policy/2021/04/how-the-supreme-court-saved-the-software-industry-from-api-copyrights/",
    urlToImage:
      "https://cdn.arstechnica.net/wp-content/uploads/2021/04/Screen-Shot-2021-04-06-at-10.13.43-AM-760x380.png",
    publishedAt: "2021-04-06T15:45:00Z",
    content:
      "Enlarge/ A lot of happy developers out there in the world today.\r\n69 with 47 posters participating, including story author\r\nView more stories\r\nGoogle and Oracle's argument before the Supreme Court la… [+11627 chars]",
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Michael Hollan",
    title:
      "Man strangles Burger King worker after arguing over mask rules: report - Fox News",
    description:
      "Violence appeared to break out from nowhere in a New Jersey Burger King.",
    url:
      "https://www.foxnews.com/food-drink/man-strangles-burger-king-worker-nj-mask-rules",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2021/04/NJ-Burger-King-mugshot.jpg",
    publishedAt: "2021-04-06T15:01:39Z",
    content:
      "Violence appeared to break out from nowhere in a New Jersey Burger King.\r\nAccording to police, a man entered the restaurant in Wayne, and assaulted a female employee. While the March 27 incident is s… [+1573 chars]",
  },
  {
    source: {
      id: null,
      name: "Jalopnik",
    },
    author: "Adam Ismail",
    title:
      "You'll Get To Drive The Toyota GR 86 In GT Sport First Later This Year - Jalopnik",
    description:
      "Earlier this week we got our first good look at the GR 86, Toyota’s take on the second generation of the rear-wheel drive, boxer-powered coupe it co-developed with Subaru. Toyota happens to share a close partnership with Gran Turismo, and the manufacturer’s G…",
    url:
      "https://jalopnik.com/youll-get-to-drive-the-toyota-gr-86-in-gt-sport-first-l-1846626350",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/okrev6zlvyfndp9halbz.jpg",
    publishedAt: "2021-04-06T14:45:00Z",
    content:
      "Earlier this week we got our first good look at the GR 86, Toyotas take on the second generation of the rear-wheel drive, boxer-powered coupe it co-developed with Subaru. Toyota happens to share a cl… [+3069 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Zacks Equity Research",
    title:
      "GameStop (GME) Set to Sell Shares, Unveils Preliminary Sales - Yahoo Finance",
    description:
      "GameStop (GME) to sell up to 3.5 million shares and utilize proceeds for business transformation. Preliminary sales number for the first nine weeks of fiscal...",
    url:
      "https://finance.yahoo.com/news/gamestop-gme-set-sell-shares-141502169.html",
    urlToImage:
      "https://s.yimg.com/uu/api/res/1.2/lq1fZJcjb4laS08q7AgfNw--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/zacks.com/c2a82bfa6f130ce1338558c4c7c8f631",
    publishedAt: "2021-04-06T14:15:02Z",
    content:
      "GameStop Corp. GME is set to cash-in on its phenomenal price surge on the bourses, triggered by the much acclaimed trading frenzy these past months. This gaming retailer will be selling up to 3.5 mil… [+4519 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Melissa Repko",
    title:
      "Consumers spent $900 billion more online in 2020. Here's who will keep the biggest gains - CNBC",
    description:
      "Grocery stores and discount stores will see the most dramatic and lasting shift to e-commerce beyond the pandemic, according to a report from Mastercard.",
    url:
      "https://www.cnbc.com/2021/04/06/consumers-spent-900-billion-more-online-in-2020-mastercard-report-says.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/106864162-1617720957399-gettyimages-1270474743-ab9i8291_20200903101351889.jpeg?v=1617721660",
    publishedAt: "2021-04-06T14:10:00Z",
    content:
      "Consumers across the globe spent $900 billion more at online retailers in 2020 compared with the prior two-year trend, according to a report released Tuesday by the Mastercard Economics Institute. \r\n… [+2797 chars]",
  },
  {
    source: {
      id: null,
      name: "Jalopnik",
    },
    author: "Erik Shilling",
    title:
      "The Auto Industry Is Once Again Begging The Government For Help - Jalopnik",
    description:
      "The auto industry is going back to the well, GM’s contempt for its dealers is plain, and Japan. All that and more in The Morning Shift for April 6, 2021.",
    url:
      "https://jalopnik.com/the-auto-industry-is-once-again-begging-the-government-1846626418",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/glgowp7jkjl8gbzfevhz.png",
    publishedAt: "2021-04-06T14:09:00Z",
    content:
      "The auto industry is going back to the well, GMs contempt for its dealers is plain, and Japan. All that and more in The Morning Shift for April 6, 2021.\r\n1st Gear: Automakers Want Joe Bidens Help\r\nAu… [+7769 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Amelia Lucas",
    title:
      "Starbucks will discontinue disposable cups in South Korea by 2025 - CNBC",
    description:
      "Starbucks has pledged to discontinue disposable cups in South Korea by 2025 as it aims to cut its global landfill waste in half by the end of the decade.",
    url:
      "https://www.cnbc.com/2021/04/06/starbucks-will-discontinue-disposable-cups-in-south-korea-by-2025.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/106864100-1617715719461-gettyimages-477092699-SKOREA_STARBUCKS.jpeg?v=1617715774",
    publishedAt: "2021-04-06T14:07:00Z",
    content:
      "Starbucks has pledged to discontinue disposable cups in South Korea by 2025 as it aims to cut its global landfill waste in half by the end of the decade.\r\nThe coffee giant has long promised to cut do… [+1301 chars]",
  },
  {
    source: {
      id: null,
      name: "Investor's Business Daily",
    },
    author: "Investor's Business Daily",
    title:
      "Dow Jones Today, Stocks Mixed, But BP Trips Oil Rally; Microsoft, Masco, GreenBox In Buy Ranges - Investor's Business Daily",
    description:
      "GreenBox, Green Brick and Illumina rose as stocks turned mixed Monday. Microsoft and Intel were among the blue chips in buy ranges on the Dow Jones today.",
    url:
      "https://www.investors.com/market-trend/stock-market-today/dow-jones-today-stock-futures-slack-europe-rallies-illumina-stock-microsoft-masco-greenbox-buy-ranges/",
    urlToImage:
      "https://www.investors.com/wp-content/uploads/2020/03/SMT0800-031120-adobe.jpg",
    publishedAt: "2021-04-06T13:56:00Z",
    content:
      "Stocks opened lower then turned mixed Tuesday, pausing after Monday's strong session. Illumina, Green Brick, Cara Therapeutics and GreenBox POS were early standouts. Goldman Sachs led the Dow Jones t… [+6201 chars]",
  },
  {
    source: {
      id: null,
      name: "KRON4",
    },
    author: "Fareeha Rehman",
    title: "Evacuation disrupts Oakland airport flights - KRON4",
    description:
      "The Oakland International Airport has closed down Terminal 1 for police activity on Monday morning.",
    url:
      "https://www.kron4.com/news/bay-area/oakland-international-airport-shuts-down-terminal-1/",
    urlToImage:
      "https://www.kron4.com/wp-content/uploads/sites/11/2021/04/snapshot-14.jpg?w=1280",
    publishedAt: "2021-04-06T13:51:46Z",
    content:
      "OAKLAND, Calif. (KRON) — A man wielding a knife at Oakland International Airport caused an evacuation in Terminal 1 for several hours on Tuesday morning.\r\nThe shut down started at 5:45 a.m. The man w… [+881 chars]",
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Jeanette Settembre",
    title:
      "Ketchup shortage hits restaurants, fast food chains across the U.S. - Fox News",
    description:
      "America’s favorite condiment is the latest shortage to hit restaurants and fast food chains as a result of high delivery demand and increased take out during the pandemic, a new report suggests.",
    url:
      "https://www.foxnews.com/food-drink/ketchup-shortage-hits-restaurants-fast-food-us",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2018/09/rtertrtert46.jpg",
    publishedAt: "2021-04-06T13:32:27Z",
    content:
      "Restaurants cant catch up with the demand for ketchup.\r\nPrices for ketchup packets have gone up 13% since January 2020, according to data from Plate IQ, a restaurant industry technology platform, as … [+2072 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      '"Clear link between AstraZeneca and rare blood clots" | DW News - DW News',
    description: null,
    url:
      "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ak9FT2dKUEpzX1HSAQA?oc=5",
    urlToImage: null,
    publishedAt: "2021-04-06T13:26:51Z",
    content: null,
  },
  {
    source: {
      id: "the-wall-street-journal",
      name: "The Wall Street Journal",
    },
    author: "Jared S. Hopkins",
    title:
      "Moderna Covid-19 Vaccine Production Pace to Increase at Contract Manufacturer Catalent - The Wall Street Journal",
    description:
      "Deal set to boost output of finished vials of the biotech’s Covid-19 shot from Catalent’s Indiana plant from next month",
    url:
      "https://www.wsj.com/articles/moderna-covid-19-vaccine-production-to-double-at-contract-manufacturer-catalent-11617703203",
    urlToImage: "https://images.wsj.net/im-320669/social",
    publishedAt: "2021-04-06T13:10:00Z",
    content:
      "Contract drug manufacturer Catalent Inc. is expanding its U.S. production of the Covid-19 vaccine from Moderna Inc., a development that could ensure the U.S. has ample supply as it ramps up vaccinati… [+849 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Jordan Valinsky, CNN Business",
    title:
      "One of the web's pioneers will be wiped from the internet in May - CNN ",
    description:
      "Yahoo Answers, a question-and-answer platform that launched more than 15 years ago and became one of the largest troves of information -- and misinformation -- on the internet, is shutting down on May 4.",
    url:
      "https://www.cnn.com/2021/04/06/tech/yahoo-answers-shutting-down-trnd/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/210406100921-yahoo-answers---stock-super-tease.jpg",
    publishedAt: "2021-04-06T13:01:00Z",
    content:
      "New York (CNN Business)Yahoo Answers, a question-and-answer platform that launched more than 15 years ago and became one of the largest troves of information -- and misinformation -- on the internet,… [+1413 chars]",
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Toussaint Campbell",
    title:
      "Bitcoin ETF coming ‘in a year or two,’ analyst says as SEC mulls applications - CNBC",
    description:
      "If the Securities and Exchange Commission approves one bitcoin ETF, it will likely approve several, says CFRA's Todd Rosenbluth.",
    url:
      "https://www.cnbc.com/2021/04/06/bitcoin-etf-coming-in-a-year-or-two-analyst-says.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/106800765-1606130262265-gettyimages-872670764-set04375-bitcoin_9nov2017_kw0618.jpeg?v=1617655844",
    publishedAt: "2021-04-06T12:56:00Z",
    content:
      "The Securities and Exchange Commission formally acknowledged a bitcoin ETF proposal from VanEck just two weeks ago, starting the countdown on its 45-day approval timeline.\r\nBut seeing a bitcoin ETF a… [+2735 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Krispy Kreme Gives Vaccinated People Free Doughnut All Year - Inside Edition",
    description: null,
    url:
      "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9cmtNMGJPQWg5eFnSAQA?oc=5",
    urlToImage: null,
    publishedAt: "2021-04-06T12:52:57Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Fox Business",
    },
    author: "Chris Jennings",
    title:
      "Today's mortgage rates continue to stick around historical lows | April 6, 2021 - Fox Business",
    description:
      "Check out the mortgage rates for April 6, 2021, which are unchanged from yesterday.",
    url: "https://www.foxbusiness.com/money/todays-mortgage-rates-april-6-2021",
    urlToImage:
      "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/10/0/0/Credible-daily-mortgage-rate-thumbnail-1186618062.jpg?ve=1&tl=1",
    publishedAt: "2021-04-06T12:40:48Z",
    content:
      "Based on data compiled by Credible Operations, Inc., NMLS Number 1681276, mortgage rates have remained unchanged since yesterday.\r\n<ul><li>30-year fixed mortgage rates: 3.125%, Unchanging</li><li>20-… [+6608 chars]",
  },
];

export {
  newsArticles,
  businessNewsArticles,
  sportsNewsArticles,
  entertainmentArticles,
  articles,
};
