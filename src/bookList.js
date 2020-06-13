 const booksReading = [
    {
        title: "Neuromancer",
        isbn: "0441012035",
    },
    {
        title: "What It Takes: The Way to the White House",
        isbn: "9780679746492",
    },
    {
        title: "London Match",
        isbn: "0345332687"
    }
]

const booksRead = [
    {
        title: "Burning Chrome",
        isbn: "9780060539825"
    },
    {
        title: "Mexico set",
        isbn: "0345314999"
    },
    {
        title: "Berlin game",
        isbn: "9780345418340"
    },
    {
        title: "The Score",
        isbn: "0446677736"
    },
    {
        title: "The Mourner",
        isbn: "9780446677721"
    },
    {
        title: "The Quiet American",
        isbn: "0140185003"
    },
    {
        title: "Our Man in Havana",
        isbn: "9780140184938"
    },
    {
        title: "Factotum",
        isbn: "9780876852637"
    },
    {
        title: "Post Office Book",
        isbn: "0061177571"
    },
    {
        title: "Pulp",
        isbn: "9780876859261"
    },
    {
        title: "The New Confessions of an Economic Hit Man",
        isbn: "1626566747"
    },
    {
        title: "The Outfit",
        isbn: "0446674672"
    },
    {
        title: "The Man With The Getaway Face",
        isbn: "0446674664"
    },
    {
        title: "The Hunter",
        isbn: "0226770990"
    },
    {
        title: "Dream Team: How Michael, Magic, Larry, Charles, and the Greatest Team of All Time Conquered the World and Changed the Game of Basketball Forever",
        isbn: "0345520491"
    }
    
]

const handshakeFiveBooks = [
    {
        title: "A Confederacy of Dunces",
        isbn: "0802130208"
    },
    {
        title: "Post Office",
        isbn: "0061177571"
    },
    {
        title: "The Bonfire of the Vanities",
        isbn: "9780553381344"
    },
    {
        title: "The Guns of August",
        isbn: "0345476093"
    },
    {
        title: "Slaughterhouse-Five",
        isbn: "0385333846"
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



 