const tvWatched = [
    {
        id: "85922",
        title: "Space Force",
        poster: "https://image.tmdb.org/t/p/w200/zgu3p4NvisS8CI68cUfBKbvAvu8.jpg",
        rating: 1,
        review: "This show has long episode's that go nowhere. Each episode is 10 minutes too long.  But the worst thing about the show is that it burned a good idea. A lot of money on screen that amounts to nothing. In fact this would have been better if it had a very small budget, like the early season's of modern Doctor Who."
    },
    {
        id: "100698",
        title: "Tiger King: Murder, Mayhem and Madness",
        poster: "https://image.tmdb.org/t/p/w200/pmjYMCnSwndlEpiFZhhOWSWmUsu.jpg",
        rating: 3,
        review: "A fun watch where all the characters are bad people. Perhaps 2 episodes too long. Certainly didn't need a after show."
    },
    {
        id: "83631",
        title: "What We Do in the Shadows",
        poster: "https://image.tmdb.org/t/p/w200/aEwa2kqu5XORbmMwdhEHufODcIr.jpg",
        rating: 4,
        review: "Season 2 was just as good as the first. A lot more Colin Robinson which is always a good thing.  The best part of the season was the debut of \"Jackie Daytona\". Guillermo wonders off only to save the day. I can't wait for season 3.  "
    },
    {
        id: "93219",
        title: "The Movies That Made Us",
        poster: "https://image.tmdb.org/t/p/w200/kowlD5nELdhoJcQY6J8JZUTeNXN.jpg",
        rating: 3,
        review: "A nice little show that benefits from not having commercials. This is the kinda show that 20 years ago would be on cable jammed with ads. I really like Die Hard and Home Alone and I'll watch a second season."
    },
    {
        id: "688",
        title: "The West Wing",
        poster: "https://image.tmdb.org/t/p/w200/rMdRbtqJPIO6d71JD7bOwTl8105.jpg",
        rating: 4,
        review: "The first four seasons are the greatest four season's of any show ever. Then Sorkin gets booted and the show becomes a lesser version. The Zoe kidnapping being a word for word rip from the earlier Bartlet lecture is unforgivable. The last 2 seasons are very good. "
    },
    {
        id: "74204",
        title: "Big Mouth",
        poster: "https://image.tmdb.org/t/p/w200/h6InpGTYbu03b6iVsnniVPqPfIw.jpg",
        rating: 3,
        review: "The first 2 seasons are really funny. The third season wasn't up to par. This show could really use a break. The episodes are coming out too fast and it's losing quality. "
    },
    {
        id: "2316",
        title: "The Office",
        poster: "https://image.tmdb.org/t/p/w200/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
        rating: 4,
        review: "The show gets better with age. FYI Pam isn't a nice person. My only problems are: The first season is the same as the British version. And as soon as Michael Scott left the show almost became unwatchable."
    },
    {
        id: "59659",
        title: "Halt and Catch Fire",
        poster: "https://image.tmdb.org/t/p/w200/l4qvJ0lq59wR3ODX42DxBVFGoxx.jpg",
        rating: 5,
        review: "Cheers isn't about a bar. This show isn't about the tech industry. It's all about characters. When one of the character dies it's one of the saddest, and beautiful 2 episodes in all of television. Wildly underrated.  If this show was on HBO and not AMC people would still be talking about it. "
    },
    {
        id: "59717",
        title: "Comedians in Cars Getting Coffee",
        poster: "https://image.tmdb.org/t/p/w200/xvQ0jJmrYjxjPMEHP4e8IYIjojF.jpg",
        rating: 3,
        review: "A fun show that really depends on who the guest is. The episodes with Jerry's friends are 1000% better than the rest. The best episode is the one with Garry Shandling. "
    },
    {
        id: "66732",
        title: "Stranger Things",
        poster: "https://image.tmdb.org/t/p/w200/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
        rating: 4,
        review: "Probably Netflix's best show. Yes it's retroporn. But as a kid in the 80's I love it. The last season was very emotional and I still want to see more. I really hope that the end it too early as apposed to too late. I've had to bail on a few Netflix show's that lost direction.  "
    },
    {
        id: "2693",
        title: "Extras",
        poster: "https://image.tmdb.org/t/p/w200/zV4Xpdkk6IrGk2mnhrKdtQOHj4I.jpg",
        rating: 4,
        review: "My favorite Ricky Gervais show. The friendship of Maggie and Andy as they struggle to get work as extras. The show has some of the best cameos. What happens when one of them hits it big... "
    },
    {
        id: "88728",
        title: "I Think You Should Leave with Tim Robinson",
        poster: "https://image.tmdb.org/t/p/w200/m4iNYM0ZaaH10Qzebd9dwSa6Zy6.jpg",
        rating: 4,
        review: "If you took Tim & Eric down a notch and turned up SNL, this is what you'd get. Highly quotable and memorable. This is the only sketch show that matter right now."
    },
    {
        id: "62560",
        title: "Mr. Robot",
        poster: "https://image.tmdb.org/t/p/w200//oKIBhzZzDX07SoE2bOLhq2EE8rf.jpg",
        rating: 5,
        review: "Mr Robot keeps you on your feet. What is real and what is in Elliot's head? Christian Slater is perfect as the father/imaginary instigator. I'm waiting for the final season to hit Prime."
    },
    {
        id: "67744",
        title: "Mindhunter",
        poster: "https://image.tmdb.org/t/p/w200/fbKE87mojpIETWepSbD5Qt741fp.jpg",
        rating: 5,
        review: "The fist season laid such a great foundation. In season 2 it was a rouges gallery. Casting has been great for this show. Dead-on. I really like the main storyline in Atlanta. Not sure the storyline with Bill's son worked."
    },
    {
        id: "63351",
        title: "Narcos",
        poster: "https://image.tmdb.org/t/p/w200/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
        rating: 4,
        review: "I haven't watched Mexico yet. The Escobar story was great. Wagner Moura overpowered the entire show, when Escobar dies he left a sizable hole in the show. The Cali season was a hair lesser. Despite what IMBB say Pedro Pascal is know for this! "
    },
    {
        id: "1436",
        title: "Justified",
        poster: "https://image.tmdb.org/t/p/w200/aVYuGDlOZMCRt89fAnHTYgk3BMr.jpg",
        rating: 5,
        review: "A wild cast of character's. Raylan Givens isn't even the most interesting. Walter Goggins wins every scene he's in, and the Ava Crowder character hold your attention. Call back's to classic crime stories of the past. A big nod to The Friends of Eddie Coyle in one of the episodes."
    },
    {
        id: "4546",
        title: "Curb Your Enthusiasm",
        poster: "https://image.tmdb.org/t/p/w200/kWQDOnLs5DK0ta8xQZLsaienIHp.jpg",
        rating: 4,
        review: "The show is still really funny. But its not as great as it once was. It's a lot more cringe. It's a 20 year old show so it's probably more that I've moved on. For me It's become akin to the last year of Seinfeld."
    },
    {
        id: "1621",
        title: "Boardwalk Empire",
        poster: "https://image.tmdb.org/t/p/w200/kL6SqlVPpfAof2nQbh1VxkUuXBQ.jpg",
        rating: 4,
        review: "In 100 years it's funny to see that not much has changed. It was fun to see the embryo of Murder Inc. Also you see Arnold Rothstein as more than the guy who fixed the World Series. Stephen Graham IS the definitive Al Capone. I wonder how much of the ending was a direct result of the Sopranos blowback. "
    },
    {
        id: "65495",
        title: "Atlanta",
        poster: "https://image.tmdb.org/t/p/w200/xVmzrYFAtKzqfbweGM8KSgOiEvT.jpg",
        rating: 4,
        review: "When someone leave's a creative show because they're too creative, you need to follow along. This show has very memorable and poignant single episodes. And Teddy Perkins !! "
    },
    {
        id: "15621",
        title: "The Newsroom",
        poster: "https://image.tmdb.org/t/p/w200/oRt7aL1D4WZhqqOLpgh9KGODjQK.jpg",
        rating: 4,
        review: "A show that was cut way too short. My second favorite Sorkin show. Sometimes though Sorkin goes to the well too often. There are many instances of rehash from his other work.  "
    },
    {
        id: "61859",
        title: "The Night Manager",
        poster: "https://image.tmdb.org/t/p/w200/hdCC5N42cXERbzIn6ED7oqTKtkq.jpg",
        rating: 4,
        review: "I'm in on any adaptation of John le Carré. Tom Hiddleston and Hugh Laurie going toe to toe. A very thrilling watch thats on high end of le John le Carré adaptation's. "
    },
]

const tvWatching = [
    {
        id: "18347",
        title: "Community",
        poster: "https://image.tmdb.org/t/p/w200/3KUjDt8XY7w2Ku70UE0SECmv1zP.jpg",
        rating: 4,
        review: "A really fun and imaginative show. Like almost every comedy show on NBC at the time, it never saw its full potential due to NBC's upper management.  "
    },
    
    {
        id: "1438",
        title: "The Wire",
        poster: "https://image.tmdb.org/t/p/w200/4lbclFySvugI51fwsyxBTOm4DqK.jpg",
        rating: 5,
        review: "One of the greatest show's of all time. It rewards repeated viewing. I don't hate the second season like most people seem to. "
    },
    {
        id: "69740",
        title: "Ozark",
        poster: "https://image.tmdb.org/t/p/w200/oy7Peo5iFIt9sNM59lN6csbJeX2.jpg",
        rating: 4,
        review: "A really good show where the couple seem like they enjoy digging a deeper hole rather than ever getting out. I'm close to the beginning of the 3rd season. "
    },
    {
        id: "1915a",
        title: "The Larry Sanders Show",
        poster: "https://image.tmdb.org/t/p/w200/qMRVylcs6y2naOp7s6RIawELTAL.jpg",
        rating: 5,
        review: "Meta before meta. Such a perfect show that was so far ahead of it's time. Hank Kingsley is one of the greatest characters in TV history. It pairs well with Seinfeld and the Bill Carter books The Late Shift and The War for Late Night. "
    },
    {
        id: "60625",
        title: "Rick and Morty",
        poster: "https://image.tmdb.org/t/p/w200/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg",
        rating: 4,
        review: "The only animated show that I watch. I'm watching for the 4th season to show up on streaming. The Ricklantis Mixup is one of the best single episodes of a show to come out.  "
    },
    {
        id: "2710",
        title: "It's Always Sunny in Philadelphia",
        poster: "https://image.tmdb.org/t/p/w200/xX3vAWdCb828T48HM9OvvD0p4PC.jpg",
        rating: 3,
        review: "Now the show is more hit or miss. I still like when a new season shows up on streaming but I now pick and choose rather than bingeing. "
    },
    {
        id: "1406",
        title: "Deadwood",
        poster: "https://image.tmdb.org/t/p/w200/4Yp35DVbVOAWkfQUIQ7pbh3u0aN.jpg",
        rating: 4,
        review: "I'm somewhere in the first season. Haven't yet ventured back. But So far its a good, well acted show."
    },
    {
        id: "1426",
        title: "Luther",
        poster: "https://image.tmdb.org/t/p/w200/hDxOMX8zzH1FiqKWVBzNaYGBkle.jpg",
        rating: 4,
        review: "A very good detective show that probably works so well because the seasons are short. There are some pretty intense scenes in this show. The chemistry between Luther and Alice Morgan is arresting. "
    },
    {
        id: "73375",
        title: "Tom Clancy's  Jack Ryan",
        poster: "https://image.tmdb.org/t/p/w200/1raUrQr8Y2tSYjTDbk8wfWGKTmX.jpg",
        rating: 3,
        review: "I love everything Jack Ryan so I was onboard. Ive become bogged down in the middle of season one though."
    },
    {
        id: "60694",
        title: "Last Week Tonight with John Oliver",
        poster: "https://image.tmdb.org/t/p/w200/hUpW9ZakeKpgIzvkck2T59RCHcH.jpg",
        rating: 3,
        review: "It's a fun if not infuriating watch. The number of researchers that they must employ. The best parts are And Now This or when John wastes HBO's money on something strange. "
    },
   
]

const handshakeFiveTv = [
    {
        id: "1398",
        title: "The Sopranos",
        poster: "https://image.tmdb.org/t/p/w200/6nNZnnUkXcI3DvdrkclulanYXzg.jpg",
        rating: 5,
        review: "It one of the greatest shows of all time that changed television forever. I never hated the ending and it is even better when bingeing the final season. The worst thing that Sopranos did was create a spit last season were HBO tries to milk it as much as they can. HBO still does this today and it hurts show that are saddled with this device. "
    },
    {
        id: "1915",
        title: "The Larry Sanders Show",
        poster: "https://image.tmdb.org/t/p/w200/qMRVylcs6y2naOp7s6RIawELTAL.jpg",
        rating: 5,
        review: "Meta before meta. Such a perfect show that was so far ahead of it's time. Hank Kingsley is one of the greatest characters in TV history. It pairs well with Seinfeld and the Bill Carter books The Late Shift and The War for Late Night. "
    },
    {
        id: "1400",
        title: "Seinfeld",
        poster: "https://image.tmdb.org/t/p/w200/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg",
        rating: 5,
        review: "I'm never going to not love this show. The last season is soft and more like Looney Toons. Plus a lot of actors double dip. Some characters are played by new actors.  The last episode is just not good. But It's still the greatest sitcom ever. Check out the podcast SeinCast."
    },
    {
        id: "1918",
        title: "The Twilight Zone",
        poster: "https://image.tmdb.org/t/p/w200/s6YY9noG1vPDs59ajkEWXBb1fpk.jpg",
        rating: 5,
        review: "Some of the greatest scifi stories of all time, acted but a who's who of character actors. The episodes are just a powerful now as they were 60 years ago. My personal favorite is Time Enough at Last."
    },
    {
        id: "46533",
        title: "The Americans",
        poster: "https://image.tmdb.org/t/p/w200/qB7WPVQnmODg2mZ1xUmPOrCa0wL.jpg",
        rating: 5,
        review: "My favorite show of the 10's. A perfect television spy thriller set in the 80's, with a great cast. Just a thrilling show to watch. How can you not be hooked after the first episode? "
    }
   
]

// let tvWatched = tvWatch.reverse().slice() 
//  tvWatched = tvWatch.slice(10) 




export {tvWatched, tvWatching, handshakeFiveTv}