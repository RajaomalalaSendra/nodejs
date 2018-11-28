const generique = () => {
    console.log(" /e/e/E/E/E/E/E/E/E/E/E/E/E/E/E/E/E");
}

var bonjourMonAmisEN = function (myfriend = "Dodo") {
    console.log('Hello my friend ' + myfriend);
}

var aurevoirMonAmisEN = (myfriend = "Dodo") => {
    console.log("Good bye my friend " + myfriend);
}

var bonjourMonAmisMG = function (myfriend = "Dodo") {
    console.log("Manahoana ianao ry namako " + myfriend + " oh!");
}

var aurevoirMonAmisMG = (myfriend = "Dodo") => {
    console.log("Veloma ianao ry namako " + myfriend + " oh!");
}

var bonjourMonAmisFR = (myfriend = "Dodo") => {
    console.log("Bonjour mon ami(e) " + myfriend + " !");
}

var aurevoirMonAmisFR = (myfriend = "Dodo") => {
    console.log("Au revoir mon ami(e) " + myfriend + " !");
}

var bonjourMonAmisDE = (myfriend = "Dodo") => {
    console.log("Hallo mein(e) freund(e) " + myfriend + " !" );
}

var aurevoirMonAmisDE = (myfriend = "Dodo") => {
    console.log("Aufwidersehen mein(e) freund(e) " + myfriend + " !");
}

exports.hiEn = bonjourMonAmisEN;
exports.hiFr = bonjourMonAmisFR;
exports.hiMg = bonjourMonAmisMG;
exports.hiDe = bonjourMonAmisDE;
exports.byeEn = aurevoirMonAmisEN;
exports.byeFr = aurevoirMonAmisFR;
exports.byeMg = aurevoirMonAmisMG;
exports.byeDe = aurevoirMonAmisDE;
exports.gene = generique;