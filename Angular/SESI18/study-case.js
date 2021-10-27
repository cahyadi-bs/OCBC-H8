function removeSpaces(text){
    return text.split(' ').join('');
}

function reverseText(text){
    return text.split("").reverse().join("");
}

// function updateVowels(text){
//     let arrString = text.toLowerCase().split("");
//     let result = [];
//     for (let i = 0; i< arrString.length; i++){
//         switch(arrString[i]){
//             case "a":
//                 result[i] = "b";
//                 break;
//             case "i":
//                 result[i] = "j";
//                 break;
//             case "u":
//                 result[i] = "v";
//                 break;
//             case "e":
//                 result[i] = "f";
//                 break;
//             case "o":
//                 result[i] = "p";
//                 break;
//             default:
//                 result[i] = arrString[i];
//         }
//     }
//     return result.join("");
// }

function updateVowels(text){
    let char = ['A', 'a', 'I', 'i', 'U' , 'u', 'E', 'e', 'O', 'o'];
    let arrString = text.split("");
    let result = [];
    for (let i = 0; i< arrString.length; i++){
        if(char.includes(arrString[i])){
            result[i] = String.fromCharCode(arrString[i].charCodeAt(0) + 1)
        } else{
            result[i] = arrString[i];
        }
    }
    return result.join("");
}

var password = 'Lorem ipsum dolor sit amet';
// var password = 'dimitri w';
var noSpaces = removeSpaces(password);
var reversed = reverseText(noSpaces);
var encryptedPassword = updateVowels(reversed);

console.log(encryptedPassword);

