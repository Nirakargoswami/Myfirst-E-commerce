const googelDatabase = ["cats.com",
"supe recipe.com",
"flowres.com.com",
"cat picture.com",
"my favourite.com"];

const googelSearche = (searc) => {
    const mathces= googelDatabase.filter((x) => x.includes(searc))
    return mathces.length > 3 ? mathces.slice(0,3) : mathces;
}


console.log(googelSearche("cat"));
