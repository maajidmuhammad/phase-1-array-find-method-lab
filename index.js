// code your solution here
function superbowlWin(superBowlResult){
    const winingYear = superBowlResult.find(record => record.result === 'W');
    return winingYear ? winingYear.year : undefined
}

const record = [
    {year: '2012', result: 'l'},
    {year: '2015', result: 'W'},
    {year: '2013', result: 'NIL'},
    {year: '2011', result: 'L'},
]

console.log(superbowlWin(record))