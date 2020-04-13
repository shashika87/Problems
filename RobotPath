/*
 *  Target Practice 12 - Matrix
 */

'use strict';

/*
 *  Problem:  Robot Paths
 *
 *  Prompt:   Given a matrix of zeroes, determine how many unique paths exist
 *            from the top left corner to the bottom right corner
 *
 *  Input:    An Array of Array of Integers (matrix)
 *  Output:   Integer
 *
 *  Example:  matrix = [[0,0,0,0],
 *                      [0,0,0,0],
 *                      [0,0,0,0]]
 *
 *            robotPaths(matrix) = 38
 *
 *
 *            matrix = [[0,0,0],
 *                      [0,0,0]]
 *
 *            robotPaths(matrix) = 4
 *
 *  Note:     From any point, you can travel in the four cardinal directions
 *            (north, south, east, west). A path is valid as long as it travels
 *            from the top left corner to the bottom right corner, does not go
 *            off of the matrix, and does not travel back on itself
 */

function robotPaths(matrix) {
  let totalRows = matrix.length;
  if (totalRows === 0) { return 0; }
  let totalCols = matrix[0].length;

  function traverse(row,col) {
    //Base cases
    
    //1. If we go out of bounds
    if (row < 0 || row >= totalRows || col < 0 || col >= totalCols) {
      return 0;
    }
    
    //2. If already visited node
    if (matrix[row][col] === 1) {
      return 0;
    }
    
    //3. If we reach our destination
    if (row === (totalRows - 1) && col === (totalCols - 1)) {
      return 1;
    }
    
    //Set current node as visited
    matrix[row][col] = 1;
    
    //Define sum variable
    let sum = 0;
    
    //Traverse in all directions: up, down, right, left
    sum += traverse(row - 1, col);
    sum += traverse(row + 1, col);
    sum += traverse(row, col + 1);
    sum += traverse(row, col - 1);
    
    //Reset current node as unvisisted
    matrix[row][col] = 0;
    
    //Return sum of all traversals
    return sum;
  }
  return traverse(0,0);
}

// let matrix = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
// console.log(robotPaths(matrix));


////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

console.log('Robot Paths Tests');
let testCount = [0, 0];

assert(testCount, 'should work on first example input', function () {
  let test = [[0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]];
  var example = robotPaths(test);
  return example === 38;
});

assert(testCount, 'should work on second example input', function () {
  let test = [[0, 0, 0],
  [0, 0, 0]];
  var example = robotPaths(test);
  return example === 4;
});

assert(testCount, 'should work on single-element input', function () {
  let test = [[0]];
  var example = robotPaths(test);
  return example === 1;
});

assert(testCount, 'should work on single-row input', function () {
  let test = [[0, 0, 0, 0, 0, 0]];
  var example = robotPaths(test);
  return example === 1;
});

assert(testCount, 'should work on single-column input', function () {
  let test = [[0],
  [0],
  [0],
  [0],
  [0]];
  var example = robotPaths(test);
  return example === 1;
});

assert(testCount, 'should work on a 5 x 8 matrix input', function () {
  let test = [[0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]];
  console.log("  Please be patient, test 6 may take longer to run");
  var example = robotPaths(test);
  return example === 7110272;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



// function for checking if arrays contain same elements
// (do not need to be in the same order)
function arraysMatching(arr1, arr2) {
  if (arr1.length !== arr2.length) { return false; }

  let cache = {};
  for (let i = 0; i < arr1.length; i++) {
    if (cache[arr1[i]] === undefined) {
      cache[arr1[i]] = 1;
    } else {
      cache[arr1[i]]++;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (cache[arr2[j]] === undefined || cache[arr2[j]] === 0) { return false; }
    cache[arr2[j]]--;
  }
  return true;
}

// function for checking if arrays are equal
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (let i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
}


// custom assert function to handle tests
// input: count {Array} - keeps track out how many tests pass and how many total
//        in the form of a two item array i.e., [0, 0]
// input: name {String} - describes the test
// input: test {Function} - performs a set of operations and returns a boolean
//        indicating if test passed
// output: {undefined}
function assert(count, name, test) {
  if (!count || !Array.isArray(count) || count.length !== 2) {
    count = [0, '*'];
  } else {
    count[1]++;
  }

  let pass = 'false';
  let errMsg = null;
  try {
    if (test()) {
      pass = ' true';
      count[0]++;
    }
  } catch (e) {
    errMsg = e;
  }
  console.log('  ' + (count[1] + ')   ').slice(0, 5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}
