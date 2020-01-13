const googleDatabase = [
    'cats.com',
    'tmt.com',
    'soupreceips.com',
    'dogs.com',
    'b2-business.com',
    'b2b.com'
];

const googleSearch = (keyword , db) => {
    const matches =  db.filter(website => website.includes(keyword));

    return matches.length > 3 ? matches.slice(0 , 3) : matches;
}


module.exports = googleSearch;