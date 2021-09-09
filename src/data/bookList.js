 const booksReading = [
    {   id: "21",
        title: "Neuromancer",
        isbn: "0441012035",
        rating: 3.5,
        review: ""
    },
    {   
        id: "22",
        title: "What It Takes: The Way to the White House",
        isbn: "9780679746492",
        rating: 4.5,
        review: "Just read the first couple of chapters and see what these guy's went through in their early years. Look around and ask yourself how many of the current politicians have what it takes?"
    },
    {   
        id: "23",
        title: "London Match",
        isbn: "0345332687",
        rating: 3,
        review: ""
    },
    {   
        id: "29",
        title: "Dark Force Rising",
        isbn: "9780785792918",
        rating: 3.5,
        review: ""
    },
    {   
        id: "28",
        title: "Caesar Life of a Colossus",
        isbn: "9780300120486",
        rating: 4,
        review: ""
    },
    
    {   id: "37",
        title: "Barbarians at the Gate",
        isbn: "0060920386",
        rating: 5,
        review: ""
    },
    {   id: "38",
        title: "Powerhouse",
        isbn: "9780062441386",
        rating: 4,
        review: ""
    },
].reverse()



const booksRead = [
    {   id: "31",
        title: "Easy Riders, Raging Bulls",
        isbn: "9780684857084",
        rating: 4.5,
        review: "It ends on kind of a downbeat. However as the decades have passed and the current content has been so poor, this era and its failures have become greater. The movies of the seventies are more influential than any other decade in movies. In so much as movie have vision other than to churn out quantity, its the stories or images of that decade that find its way subtly in to film or tv now. Movie are in a bad way right now and there are no strong leaders who can cut through the double speak that shows up in the entertainment media. But perhaps the future is in the past."
    },
    {   id: "36",
        title: "Disney War",
        isbn: "9780743267090",
        rating: 5,
        review: "Of the entertainment books I've been reading, Disney War is the best. In an industry where projects fail as much as they succeed and for reasons that are only apparent in hindsight, Michael Eisners tenure at  Disney has to be judged as somewhat of a failure. So much money was wasted cleaning up his mistakes, and yet his unwillingness not to entertain AOL in merger talks was a company saving decision. "
    },
    {   id: "35",
        title: "The Men Who Would Be King",
        isbn: "9780547134703",
        rating: 4.5,
        review: "A great Hollywood book filled with a lot of nuts and bolts. Did you know Spielberg made $175 million on Men In Black for basically just adding his name to the project. This though is really a Jeffrey Katzenberg story as much as it's the story of Dreamworks. Yes, Geffen and Spielberg are equal part of this book and of Dreamworks, you could argue that Dreamworks was founded to give Katzenberg the role he lost out on at Disney. Another book that shows that there is no secret formula and that 'Nobody knows anything.'"
    },

     {   id: "34",
        title: "Down and Dirty Pictures",
        isbn: "0684862581",
        rating: 4,
        review: "The Weinstein's were bullies and monsters and Robert Redford was a passive aggressive slow footed leader. The entertainment industry builds marble statues of people that don't deserve it and when those leaders fall and they start smashing the statue's nose the blame the audience for paying for the marble. It's very telling that the people that dared stand up to Harvey remained close and everyone else was a speed bump. People leaving good jobs to help Redford build and empire that he really wasn't ever going to get off the ground, it's one in the same. 'Nobody knows anything.' The industry is a series of competing ant colonies acting as if there is a magic formula to it all other than make the Queen rich. I suspect currently we are in an era that will be ripe for a new Biskind book as the movie industry turns into a content industry, preferring content and consumption to quality and praise."
    },
    {   id: "33",
        title: "I Want My MTV",
        isbn: "9780525952305",
        rating: 3.5,
        review: "When I started the book its stated that it covered 1981-1991 and I wondered about the years following, but the fact is that those ten years is about all you need to know about Mtv. It's funny that things in culture go from idea to iconic so quickly and when people start to recognize it as iconic it's already on the way down. The Mtv from 1995 to now is just a husk. I'm quite sure it makes a lot of money, more than ever. But would anybody miss it if it went off the air tomorrow? Sure the it would get a couple days of the new cycle and a nice obituary. But it's long since past. Sure in late 90's people wished they played more videos but anyone saying that today is being disingenuous. Personally the first ten years were electric. But after the deaths of Cobain, Tupac and Biggie the channel wandered. It's a ghost ship now, but I'm sure someone will let you pay $15 a month to lick the bones."
    },
    {   id: "32",
        title: "The End Is Always Near",
        isbn: "9780062868046",
        rating: 3.5,
        review: "If you've listened to the Hardcore History podcast then there is really nothing new in this book. However it's still a good read and acts as a spine of the podcast as a whole. A good first effort."
    },
    {   id: "30",
        title: "Once Upon a Time in Hollywood",
        isbn: "9780063112520",
        rating: 4.5,
        review: "If you only watch the movie or only read the book then you will only get half of the story. The book answers a lot of question and back fills story while never really stepping on the movies toes."
    },
    {   
        id: "27",
        title: "Heir to the Empire",
        isbn: "9780606107211",
        rating: 4,
        review: "A really enjoyable read. You start with a big idea: Why did the empire fall apart so fast after the Emperors death? Add a great powerful and unstoppable villain. Its not hard and yet today media companies would rather give you shades of gray than good versus evil. Congrats, you read Watchmen and Dark Knight Returns. The reason those stood out in 1986 was because they were counter to the mainstream comics. Everyday life is shades of gray and current creators are not Moore and Miller."
    },
    {   
        id: "26",
        title: "Guns, germs, and steel",
        isbn: "0393038912",
        rating: 4,
        review: "A great history book about how and why the world and societies came to be. This is should really be a book that is read in high school.It lays the foundation for a person to learn history upon. "
    },
    {   
        id: "24",
        title: "Adventures in the Screen Trade",
        isbn: "044376256",
        rating: 4,
        review: "A really fascinating book about movie making and the creative process. Even at forty years old the book is relevant. "
    },
    {   
        id: "6",
        title: "Burning Chrome",
        isbn: "9780060539825",
        rating: 4,
        review: "Fast moving short stories.  Very engrossing book. All but two of the stories were very good. As prelude to Neuromancer, it made me want to read the next book as soon as possible."

    },
    {   
        id: "7",
        title: "Mexico set",
        isbn: "0345314999",
        rating: 4,
        review: "Really took off as compared to the first book. Bernard is out on a island after what happened with his wife. Some really scene that get you going. I'm not jumping into the third book just yet. "

    },
    {   
        id: "8",
        title: "Berlin game",
        isbn: "9780345418340",
        rating: 3.5,
        review: "A lot of set-up. It's a really good book with a couple of good scene's. Thing's start to come together at the end to make you wanna read Mexico Set."

    },
    {   
        id: "9",
        title: "The Score",
        isbn: "0446677736",
        rating: 4,
        review: "This is my favorite of the Parker books by far. Parker and a band of criminals try to rob a whole town. Parker from the start is skeptical but comes aboard. It read's like a French heist film."

    },
    {   
        id: "10",
        title: "The Mourner",
        isbn: "9780446677721",
        rating: 3,
        review: "In order to protect his identity Parker must steal a statue. This is an okay Parker book. If you told me someone else wrote it, I'd believe you. You could skip right over this book and go right to The Score."

    },
    {   
        id: "11",
        title: "The Quiet American",
        isbn: "0140185003",
        rating: 4.5,
        review: "A really great book to read. Really puts you into pre Vietnam War era. An American C.I.A agent and a British journalist in a love triangle with a Vietnamese woman. The movie is also very good."
    },
    {   
        id: "12",
        title: "Our Man in Havana",
        isbn: "9780140184938",
        rating: 4,
        review: "A vacuum cleaner salesman in Cuba trying to make extra money is recruited into M16. He then starts to make things up. And Mi-6 believe his tale. A really fun read. "
    },
    {   
        id: "13",
        title: "Factotum",
        isbn: "9780876852637",
        rating: 3,
        review: "I'd love to have some long winded review about this book. I know people love it. I read it and remember the beats. But it left no long lasting feeling."
    },
    {   
        id: "14",
        title: "Post Office",
        isbn: "0061177571",
        rating: 4.5,
        review: "This book made me decide to change careers. In the same way Dunces was relevant to me in my late 20's this was in my 30's. There are part's of this book as far as the job that are scene's from my real life."
    },
    {   
        id: "15",
        title: "Pulp",
        isbn: "9780876859261",
        rating: 3,
        review: "Bukowski's final novel. Its disjointed but a quick read. Read's like almost a fan fiction of what it would be if Bukowski wrote a pulp."
    },
    {   
        id: "16",
        title: "The New Confessions of an Economic Hit Man",
        isbn: "1626566747",
        rating: 3,
        review: "At first it's an interesting read. Then you start to wonder if nay of it's true. But because of the things you know to be true, you wonder how much of it's true. In the end I'd say its mostly true stories of multiple people. Worth the read, but so aren't the Pentagon Paper's."
    },
    {   
        id: "17",
        title: "The Outfit",
        isbn: "0446674672",
        rating: 4,
        review: "A really fun culmination of the arc. Parker get his pals to help him steal from the mob. A nice scene around a racetrack. I would say of the three: The Hunter then The Man With The Getaway Face and lastly The Outfit. "
    },
    {   
        id: "18",
        title: "The Man With The Getaway Face",
        isbn: "0446674664",
        rating: 4,
        review: "On the run from the mob, Parker gets a new face. But what happens when the Doctor who performs the operation threatens to rat him out? The University of Chicago digital versions need to be reformated. It's difficult to read them on a mobile device. "
    },
    {   
        id: "19",
        title: "The Hunter",
        isbn: "0226770990",
        rating: 4,
        review: "The first appearance of the Parker character. The first novel zips partly because the story has been retold a few times. It's the foundation for all the following Parker books. But for me the best versions of this story are Point Blank then  Darwyn Cooks adaptation then this book."
    },
    {   
        id: "20",
        title: "Dream Team",
        isbn: "0345520491",
        rating: 3.5,
        review: "The story of the greatest team ever. Tells how the team came together and what happened in 1992. A lot of behind the scene tales and how Michael Jordan came out of the Olympics as the sole greatest player. Pairs well with McCallum's Dream Team podcast."
    }
    
]

const handshakeFiveBooks = [
    {   
        id: "1",
        title: "A Confederacy of Dunces",
        isbn: "0802130208",
        rating: 5,
        review: "A great book to read when your young and think your smarter then everybody. but really you know nothing and do nothing. A sprint to the finish. Great book. "
    },
    {
        id: "2",
        title: "Post Office",
        isbn: "0061177571",
        rating: 4.5,
        review: "This book made me decide to change careers. In the same way Dunces was relevant to me in my late 20's this was in my 30's. There are part's of this book as far as the job that are scene's from my real life."
    },
    {   
        id: "3",
        title: "The Bonfire of the Vanities",
        isbn: "9780553381344",
        rating: 4.5,
        review: " When Sherman McCoy is with his mistress he hit's and kill someone. The story of politics and the media and how they effect justice. This book is more relevant today than it was then."
    },
    {   
        id: "4",
        title: "The Guns of August",
        isbn: "0345476093",
        rating: 5,
        review: "A Masterpiece. It perfectly lines up all the dominoes just before they fall. Those same dominoes are still falling down today. Pairs well with the Great War YouTube channel."
    },
    {   
        id: "5",
        title: "Slaughterhouse-Five",
        isbn: "0385333846",
        rating: 4.5,
        review: "It was between this and Catch-22. I like Catch more but with Slaughterhouse I get more out of each reading. In fact each time I read it like a fresh read. Where as Catch is cemented."
    }
]



export {booksRead, booksReading, handshakeFiveBooks}





// How To

// Book covers can be accessed using Cover ID (internal cover ID), OLID (Open Library ID), ISBN, OCLC, LCCN and other identifiers like librarything and goodreads.

// The covers are available in 3 sizes:

//     S: Small, suitable for use as a thumbnail on a results page on Open Library,
//     M: Medium, suitable for display on a details page on Open Library and,
//     L: Large

// The URL pattern to access book covers is:

// http://covers.openlibrary.org/b/$key/$value-$size.jpg

// Where:

//     key can be any one of ISBN, OCLC, LCCN, OLID and ID (case-insensitive)
//     value is the value of the chosen key
//     size can be one of S, M and L for small, medium and large respectively.



 