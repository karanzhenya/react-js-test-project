export const wordEnding = (word, count) => {
    if (count === 1) {
        return word
    }
    else if (count % 10 >= 2 && count % 10 <=4) {
        return word + 'а'
    }
    else {
        return word + 'ов'
    }
}