// CodeFlow Übung lev1_3: Arrays index
const numberArray = [5, 6, 7, 8, 9, 10];
console.log(numberArray);

console.log(numberArray[4]);
console.log(numberArray[0]);
console.log(numberArray[5]);
//===========================================================

//CodeFlow Übung lev1_5: Arrays push()
const songs = ["Bohemian", "Stairway to Heaven", "Hotel California"];
console.log(songs);

songs.push("Sonne", "Crawling", "Run Away");
const totalSongs = songs;
console.log(totalSongs);

const besteFussballerAllerZeiten = ["Messi", "CR7", "Maradonna", "Pele", "Ronaldo"];
besteFussballerAllerZeiten.push("Neuer", "Kahn", "Schmeichel");
console.log(besteFussballerAllerZeiten);
//===========================================================

// CodeFlow Übung lev1_5_2: push() arrays in array
const heroUndEnemy = [["Batman, The Joker"], ["Professor X, Magneto"], ["Thor", "Loki"]];
console.log(heroUndEnemy);
heroUndEnemy.push(["Superman", "Lex Luthor"], ["Wolverine", "Sabretooth"], ["Ghost Rider", "Mephisto"]);
console.log(heroUndEnemy);
//===========================================================

// CodeFlow Übung lev1_7: Array unshift()
const deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];
console.log(deutscheGerichte);
deutscheGerichte.unshift("Bremer Knipp", "Pinkel mit Grünkohl", "Linsen");
console.log(deutscheGerichte);
//===========================================================

// CodeFlow Übung lev1_8: Arrays shift()
console.log(deutscheGerichte);
const nichtGut = [deutscheGerichte.shift(), deutscheGerichte.shift(), deutscheGerichte.shift()]
console.log(nichtGut);
//===========================================================

// CodeFlow Übung lev1_9: Push Pop Shift Unshift Difference
const array = [23, 54, 75];
array.push(11, 32, 42, 5, 71)
console.log(array);

array.unshift(1, 3, 7, 8, 14);
console.log(array);

array.pop();
array.pop();
console.log(array);

array.shift();
array.shift();
console.log(array);
//==========================================================