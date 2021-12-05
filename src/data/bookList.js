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


].reverse()



const booksRead = [
    {   id: "37",
        title: "Barbarians at the Gate",
        isbn: "0060920386",
        rating: 5,
        review: "Easily one of the best books I've ever read. There is a reason that this book is so highly regarded. Even though most of the financial manuevers and people have been lost in the sands of time the book at its core is a thrill ride. The founding of RJR is as fascinating as the main drive of the story. Even when it seems to be over, it has only begun."
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
    {   id: "3799",
        title: "Barbarians at the Gate",
        isbn: "0060920386",
        rating: 5,
        review: "Easily one of the best books I've ever read. There is a reason that this book is so highly regarded. Even though most of the financial manuevers and people have been lost in the sands of time the book at its core is a thrill ride. The founding of RJR is as fascinating as the main drive of the story. Even when it seems to be over, it has only begun."
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



 
