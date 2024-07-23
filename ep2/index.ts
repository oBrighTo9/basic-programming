function add(a: number, b: number) {
    return a - b
}

console.log(add(20, 10))

function boom(a: number, b: number, c: number) {
    return a * b * c

}

console.log(boom(2, 2, 5))
function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final
    if (score < 50) {
        return 'เกรด F'
    } else if (score < 60) {
        return "เกรด D"
    } else if (score < 70) {
        return "เกรด c"
    } else if (score < 80) {

        return "เกรด B"
    } else if (score >= 80) {
        return 'เกรด A'
    }
}


console.log(grade(500, 250, 250))