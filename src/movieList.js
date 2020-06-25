const moviesWatched = [
    {
        id: "3090",
        title: "The Treasure of the Sierra Madre",
        poster: "https://image.tmdb.org/t/p/w200/qvExr87oqKHvNiFRK5VqDoZrS5D.jpg",
        rating: 5,
        review: "2 drifter team up with an ex-miner to look for gold. They find gold and trouble with bandits. Brilliant choice not to subtitle the Spanish. A mean, angry, petty Bogart in this one. "
    },
    {
        id: "1103",
        title: "Escape from New York",
        poster: "https://image.tmdb.org/t/p/w200/yreqWiQ7IOkXWVB2Tz4LJIs7xqA.jpg",
        rating: 4,
        review: "A great movie to watch after dark. Snake has to save the president or die trying. I wish that we got more Escape movies or at least a better one than LA."
    }, 
    {
        id: "11963",
        title: "Three Days of the Condor",
        poster: "https://image.tmdb.org/t/p/w200/zinwtZqdb7gnc4zMu8dfkK1fMN3.jpg",
        rating: 5,
        review: "Redford figure out a hidden message that he wasn't suppose to find and is on the run from a assassin. This and Redford in Spygame are my go to when I want to be entertained by a spy thriller. Max von Sydow speech at the end steal's the movie."
    }, 
    {
        id: "3112",
        title: "The Night of the Hunter",
        poster: "https://image.tmdb.org/t/p/w200/8Xs3TNgxdiJqUiBOpFYxF0W9yoo.jpg",
        rating: 5,
        review: "Robert Mitchum as the sinister Harry Powell. This is a better movie than Cape Fear. The black and white helps the creepiness. A must see film for people who like movies.  "
    }, 
    {
        id: "32030",
        title: "Hopscotch",
        poster: "https://image.tmdb.org/t/p/w200/7ZTasNoTehrypra0X97zh8Amk3.jpg",
        rating: 3,
        review: "They try to force Walter Matthau's character out of the CIA. So he decides to write a tell-all and leads them on a wild goose chase around the world. A really fun watch. "
    }, 
    {
        id: "341956",
        title: "The Long Good Friday",
        poster: "https://image.tmdb.org/t/p/w200/pXS667me5Jfoj1b0xuxgjEMKunF.jpg",
        rating: 5,
        review: "Maybe the best British gangster movie. Great last moment of the movie, Bob Hoskins is able to say everything with his facial expressions."
    }, 
    {
        id: "145086",
        title: "Anatomy of a Murder",
        poster: "https://image.tmdb.org/t/p/w200/lMWWs7IskGldLfwwnVxHhffsVLw.jpg",
        rating: 4,
        review: "A really good courtroom drama. Probably not for today's audiences who watch hundreds of episodes of Law and Orders. James Stewart, Ben Gazzara, Goerge C. Scott and a Duke Ellington score. Worth your time."
    }, 
    {
        id: "28528",
        title: "The Harder They Fall",
        poster: "https://image.tmdb.org/t/p/w200/9Y0wXuQdNkB0nAS87FQWU8A4WL4.jpg",
        rating: 4,
        review: "Bogart's last film, he's noticeably frail. It's an expose on the boxing industry and not much has changed. A good movie but when Hollywood shifted in the late sixties Bogart's character would have certainly been killed."
    }, 
    {
        id: "21849",
        title: "A Face in the Crowd",
        poster: "https://image.tmdb.org/t/p/w200/iKCLk4Ec6ahc7ofnGHCzm7EYjri.jpg",
        rating: 5,
        review: "Andy Griffith as the Lonesome Rhodes is brilliant. He's a bad person that only gets worse as he get more fame. Patrica Neal dotes on him up to the end. Pay close attention to everything Matthau says. A masterpiece. "
    }, 
    {
        id: "388",
        title: "Inside Man",
        poster: "https://image.tmdb.org/t/p/w200/mf4i9zZVXMmqWsEb9D0OAY7k3t.jpg",
        rating: 4,
        review: "This is a perfect Channel 11 Saturday afternoon heist movie. Very entertaining and Spike still gives you the raid that never happened."
    }, 
    {
        id: "44048",
        title: "Unstoppable",
        poster: "https://image.tmdb.org/t/p/w200/uZ1aFZA5qCBUBnmeyNAcip8oRaa.jpg",
        rating: 4,
        review: "I'm a Tony Scott fan so this is perfect for me. Denzel and Chris Pine have to stop a Runaway train headed for a population center. It's a thrill ride and it entertaining to watch. You can't eat steak everyday. "
    },
    {
        id: "449443",
        title: "Den of Thieves",
        poster: "https://image.tmdb.org/t/p/w200/AfybH6GbGFw1F9bcETe2yu25mIE.jpg",
        rating: 3,
        review: "Not the greatest heist movie but definitely intense. Nice reveal at the end. Part Heat part Usual Suspects. I would watch a sequel."
    },
    {
        id: "105",
        title: "Back to the Future",
        poster: "https://image.tmdb.org/t/p/w200/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg",
        rating: 5,
        review: "The right movie at the right time when I was the right age. Probably responsible for my love of movies. I wish the reference to the second movie wasn't there."
    }, 
    {
        id: "68718",
        title: "Django Unchained",
        poster: "https://image.tmdb.org/t/p/w200/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
        rating: 4,
        review: "Tarantino tackles slavery, a tough watch but worth it. A really good revenge film. As a straight watch it works, but here isn't a lot of hidden nuggets that reward rewatch.  "
    },
    {
        id: "69729",
        title: "Magnet of Doom",
        poster: "https://image.tmdb.org/t/p/w200/s0lLCnTNqvo10KbEFAc6neoSi7Z.jpg",
        rating: 3,
        review: "A lot of little parts that don't add up. There is also a change half way through that seems off. If you took out the scene by the river, perhaps it would be a better movie."
    },
    {
        id: "466272",
        title: "Once Upon a Time… in Hollywood",
        poster: "https://image.tmdb.org/t/p/w200/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
        rating: 5,
        review: "Imagine if someone was overwhelming know for how they were murdered and you had the power to reframe that. It took 8 other films for Tarantino tp be able to create something so great. Not his best movie, but his most mature."
    }, 
    {
        id: "78",
        title: "Blade Runner: The Final Cut",
        poster: "https://image.tmdb.org/t/p/w200/vfzE3pjE5G7G7kcZWrA3fnbZo7V.jpg",
        rating: 4,
        review: "This movie now looks amazing. When I think about watching this movie I think of the VHS quality that it's been presented. Now It looks nearly modern. Harrison Ford's voice over is unforgivable."
    },
    {
        id: "49517",
        title: "Tinker, Tailor, Soldier, Spy",
        poster: "https://image.tmdb.org/t/p/w200/hkzLFj4u6RLumrkkkWTUrFAupUN.jpg",
        rating: 4,
        review: "Nice spy thriller. Middling John le Carré though. Oldman, Firth, Graham, Cumberbatch and Hardy are great as always. "
    },
    {
        id: "28387",
        title: "Kicking and Screaming",
        poster: "https://image.tmdb.org/t/p/w200/186brkmaBmopqcM0dPs71tj9BfM.jpg",
        rating: 4,
        review: "I really love this movie now that I'm past this time in my life. The trivia, your parents as actual people, not making a choice. Then you make the choice but things don't line up. Perfect end credit song."
    }, 
    {
        id: "203",
        title: "Mean Streets",
        poster: "https://image.tmdb.org/t/p/w200/9msfwOeGc9uL1iRRTBdEf15XonC.jpg",
        rating: 4,
        review: "Everything that makes Scorsese a great director is here. It's just very raw. And because it's so raw it's better than some of his later movies that use music as a crutch. "
    },
    {
        id: "9319",
        title: "The Last Boy Scout",
        poster: "https://image.tmdb.org/t/p/w200/hAejapki8nDEHsdsoffsxETQpjZ.jpg",
        rating: 3,
        review: "Nowhere near Tony Scott or Bruce Willis' best movie. But its a fun movie. Pro Football movies start in the hole because they have to use fake team names. "
    },
    {
        id: "10729",
        title: "Quick Change",
        poster: "https://image.tmdb.org/t/p/w200/zH7tQXh1GL28EV31ErPr7Csli4D.jpg",
        rating: 3,
        review: "Fun little heist movie. A Channel 11 special. Bill Murray, Genna Davis and Randy Quaid try to escape New York after robbing a bank. Well worth your 90 minutes."
    }, 
    {
        id: "31044",
        title: "My Favorite Year",
        poster: "https://image.tmdb.org/t/p/w200/sQ5TLQ24ivOTqpUDQYd5x5m9Oz8.jpg",
        rating: 4,
        review: "A love letter to Your Show of Shows. A really sweet movie that came out on the wrong weekend.  Pairs well with the Kliph Nesteroff book The Comedians and Gilbert Gottfried's Amazing Colossal Podcast. "
    },
    {
        id: "934",
        title: "Rififi",
        poster: "https://image.tmdb.org/t/p/w200/heVdAFNZUxXVmO6jiJcEHCvI5lK.jpg",
        rating: 5,
        review: "Everything that makes a French height movie is here. A perfect robbery but it really takes off after. One hand doesn't know what the other is doing. The final drive through the city is thrilling."
    },
    {
        id: "26030",
        title: "Bob le Flambeur",
        poster: "https://image.tmdb.org/t/p/w200/zg03eDA4Z7KLU5b1zsgXhNijYWW.jpg",
        rating: 5,
        review: "A great movie with a great ending. The final casino part is just amazing. The only problem is how bad the fonts of the subtitles are. They need to be fixed. I watched on the Criterion Channel so I expect it's the best quality available. Studio Canal please fix this."
    }, 
    {
        id: "25047",
        title: "Le Deuxième Souffle",
        poster: "https://image.tmdb.org/t/p/w200/kg6c92YKzu0spxILE4EEXQxZNpT.jpg",
        rating: 5,
        review: "My favorite Melville movie. Gu escapes jail, gets involved in a heist, gets arrested, escapes and tries to clear his name. When a movie is great the length doesn't matter. "
    },
    {
        id: "5511",
        title: "Le Samouraï",
        poster: "https://image.tmdb.org/t/p/w200/axuBeLVBeXfVZPGg6ph2taWRDFq.jpg",
        rating: 4,
        review: "A very influential Melville film. And it's better than everything it inspired.  It's very good, great even. It's just not my favorite Melville or Delon. "
    },
    {
        id: "11657",
        title: "Le Cercle Rouge",
        poster: "https://image.tmdb.org/t/p/w200/3X1EqovVKNpHoYHAhPznWDwQmqB.jpg",
        rating: 4,
        review: "A prison escapee hides in the truck of a man who's planning a heist. A detective is onto them almost from the beginning. One of the better Melville movies. Long stretches of silence draw you in. Top tier heist work."
    }, 
    {
        id: "42741",
        title: "Un flic",
        poster: "https://image.tmdb.org/t/p/w200/zem0JFFU0AYAlXU0rwHVLPotStq.jpg",
        rating: 4,
        review: "Alian Delon play a cop this time. The movie has a blue tint to it that adds atmosphere. The opening in the rain is gorgeous. This is Melville's last film.  In the last scene of the last Melville film Delon is crying. "
    },
  
]

const moviesWatching = [
    
    {
        id: "473033",
        title: "Uncut Gems",
        poster: "https://image.tmdb.org/t/p/w200/6XN1vxHc7kUSqNWtaQKN45J5x2v.jpg",
        rating: 4,
        review: ""
    },
    {
        id: "7345",
        title: "There Will Be Blood",
        poster: "https://image.tmdb.org/t/p/w200/fa0RDkAlCec0STeMNAhPaF89q6U.jpg",
        rating: 4,
        review: ""
    },
    {
        id: "21610",
        title: "Nighthawks",
        poster: "https://image.tmdb.org/t/p/w200/W3YNOa27V6POZtE2TPrzmCBP6t.jpg",
        rating: 2,
        review: ""
    },
    {
        id: "11228",
        title: "Daylight",
        poster: "https://image.tmdb.org/t/p/w200/a4W0QmwlOEKMlvVH4O6ICaN7Kcy.jpg",
        rating: 3,
        review: ""
    },
    {
        id: "419704",
        title: "Ad Astra",
        poster: "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
        rating: 3,
        review: ""
    },
    {
        id: "13580",
        title: "The Spy Who Came in from the Cold",
        poster: "https://image.tmdb.org/t/p/w200/gq4rjEdNO68kQh98yEihWAnJBO8.jpg",
        rating: 4,
        review: ""
    },
    {
        id: "9065",
        title: "Europa",
        poster: "https://image.tmdb.org/t/p/w200/ot4yJ4Hi1pXPaQpejUGtOIcAN18.jpg",
        rating: 4,
        review: "Only watch this movie at night. Listen very closely to Max von Sydow.  If you let the movie take you in it's really engrossing."
    },
    {
        id: "6538",
        title: "Charlie Wilson's War",
        poster: "https://image.tmdb.org/t/p/w200/45FghqcdSYRWK7PsHUInaFPNd8l.jpg",
        rating: 3,
        review: "Why isn't this much better. It has Hanks, Hoffman, Sorkin's writing and a good premise. This is still a good movie, it's just really disappointing.  "
    },
    {
        id: "10021",
        title: "The Secret of My Success",
        poster: "https://image.tmdb.org/t/p/w200/67I1gaW6IA82Ac8lVDpHovDHIz7.jpg",
        rating: 3,
        review: "One of my favorite movies as a kid. The scene with Micheal J Fox applying for jobs is on the nose. Seems like every 80's movie had people working their way up from the mail room."
    },
]

const handshakeFiveMovies = [
    {
        id: "289",
        title: "Casablanca",
        poster: "https://image.tmdb.org/t/p/w200/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
        rating: 5,
        review: "One of the things that really makes this movie so great is the use of black and white. There is a colorized version and while interesting to see. It takes away from the movie. Great on your first watch, but gets better with each additional watch. "
    },
    {
        id: "567",
        title: "Rear Window",
        poster: "https://image.tmdb.org/t/p/w200/ILVF0eJxHMddjxeQhswFtpMtqx.jpg",
        rating: 5,
        review: "The set is amazing especially for the time. Grace Kelly jumps off the screen. It's my favorite Hitchcock movie. Jimmy Stewart is perfect as Jefferies. Pair's well with Coppola's The Conversation."
    },
    {
        id: "389",
        title: "12 Angry Men",
        poster: "https://image.tmdb.org/t/p/w200/7sf9CgJz30aXDvrg7DYYUQ2U91T.jpg",
        rating: 5,
        review: "Not my favorite Lumet movie, but it's a masterpiece. It works as a movie, a play or as a plot on a tv show. As long as there is media being produced this can be remade, thats how strong the core is. This movie version is stacked with great actors."
    },
    {
        id: "25364",
        title: "Ace in the Hole",
        poster: "https://image.tmdb.org/t/p/w200/1NwZ6Sx4Eq7eT02abcI7YqfXdJk.jpg",
        rating: 5,
        review: "Kirk Douglas as a washed out journalist looking to get back to New York. How far will he go to gin up a story? An overlooked movie that is so timely right now.  "
    },
    {
        id: "562",
        title: "Die Hard",
        poster: "https://image.tmdb.org/t/p/w200/aJCpHDC6RoGz7d1Fzayl019xnxX.jpg",
        rating: 5,
        review: "This movie never gets old. It spawned a lot of imitators some of them bearing the Die Hard name. One major flaw that once you see it, it can't be unseen. So many quotable line.  "
    }

]

export {moviesWatched, moviesWatching, handshakeFiveMovies}