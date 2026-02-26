let i = {"Oleg" : 14,"Kirill" : 16,"Petya" : 13, "Yarik" : 23, "Stas" : 18}



function lol(arr){
    return Map.groupBy(arr,(x)=> x);
}

console.log(lol(i));