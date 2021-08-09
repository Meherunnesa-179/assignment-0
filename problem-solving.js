
//solution to problem-1:

function seerToMon(seer){
    if(seer<0){
        return 'Enter positive amount,please.'
    }
    const mon = 0.025 * seer;
    return mon;
}
console.log(seerToMon(-1000));  

