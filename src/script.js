

const googelSearche = (search,data) => {
    const mathces= data.filter((x) => x.includes(search))
    return mathces.length > 3 ? mathces.slice(0,3) : mathces;
}




module.exports = googelSearche