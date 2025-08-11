/*Write a function that takes width of a paper package as input and returns count of vertical tape needed at the package opening. 
Assumptions:
-> Minimum input width will be 6 cms
-> Tape width is 3 cms
-> Minumum gap between tapes should be 6 cms
-> Priority should be given to the edges first

example:
input -> output
6 -> 1 -- one tape in middle
12 -> 2 -- 2 tapes on edges
21 -> 3 -- 2 tapes on edges and one on middle
*/

const tapeWidth = 3;
const minInputWidth = 6;
const minTapesGap = 6;

//Time complexity: O(1)
//Space complexity: O(1)
function countTapes(inputWidth) {
    if(inputWidth < minInputWidth) return 0;
    if(inputWidth < ((2*tapeWidth) + minTapesGap)) return 1;

    const gapAfterTapingEdges = inputWidth - (2*tapeWidth) - minTapesGap;
    const tapesNeededInMiddle = Math.floor(gapAfterTapingEdges/(tapeWidth + minTapesGap));

    return 2 + tapesNeededInMiddle;
}

//test
console.log(countTapes(0));
console.log(countTapes(6));
console.log(countTapes(12));
console.log(countTapes(18));
console.log(countTapes(21));