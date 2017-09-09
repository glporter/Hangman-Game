var word = 'carrot';

word = word.split('')

var underscores = []

for (var i = 0; i < word.length; i++) {
    console.log(word[i])
    underscores.push('_')

}
underscores

//console.log(underscores.length == word.length)

function checkLetter(letter) {
    // here we have ti find out if the letter is in te word 
    // and if it is let replace the undersocre with the letter 
    for (var i = 0; i < word.length; i++) {
        // console.log(word[i])  
        if (letter === word[i]) {
            console.log('You are correct!')
            console.log(i)

            underscores[i] = word[i]
        } else {
            console.log('You are wrong!')
        }
    }


}
checkLetter('t')
underscores
checkLetter('c')
underscores
checkLetter('r')
underscores
checkLetter('o')
underscores
checkLetter('a')
underscores

if (underscores.includes('_') == false) {
    console.log('Winner')
} else {
    console.log('not here yet')
}