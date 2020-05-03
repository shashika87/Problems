// Hashmap implementation 

let a = [[1, 2], [2, 3], [100, 5], [200, 0]]
let b = [[0, 5], [1, 1], [100, 6]]

function dotSparse(v1Hash, v2Hash) {
  // const v1Hash = new Map();
  // const v2Hash = new Map();
  
  // buildHash(v1, v1Hash);
  // buildHash(v2, v2Hash);
  
  // console.log(v1Hash);
  // console.log(v2Hash);
  
  let result = 0;
  
  for (let key in v1Hash) {
    if (key in v2Hash) {
      result += v1Hash[key] * v2Hash[key];
    }
  }
  
  return result;
}

function buildHash(vector, hash) {
  for (let pair of vector) {
    if (pair[1] !== 0) {
      hash[pair[0]] = pair[1];
    }
  }
}


// console.log(dotSparse(a, b));



// Linked List

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}


function dotSparseLL(v1, v2) {
  const v1Head = buildLL(v1);
  const v2Head = buildLL(v2);
  
  let result = 0;
  let v1Curr = v1Head;
  let v2Curr = v2Head;
  
  while (v1Curr !== null && v2Curr !== null) {
    if (v1Curr.key === v2Curr.key) {
      result += v1Curr.value * v2Curr.value;
      v1Curr = v1Curr.next;
      v2Curr = v2Curr.next;
    } else if (v2Curr.key < v1Curr.key) {
      v2Curr = v2Curr.next;
    } else {
      v1Curr = v1Curr.next;
    }
  }
  
  return result;
}


function buildLL(vector) {
  let head = new Node(vector[0][0], vector[0][1]);
  let prev = head;
  for (let i = 1; i < vector.length; i++) {
    let pair = vector[i];
    if (pair[1] !== 0) {
      prev.next = new Node(pair[0], pair[1]);
      prev = prev.next;
    }
  }
  
  return head;
}


// console.log(dotSparseLL(a, b));




/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function (A, B) {
  let Aobj = {};
  let Bobj = {};

  createNestedAobj(A, Aobj)
  createNestedBobj(B, Bobj);
  
  // dot product between each row of Aobj to each column of Bobj 
  
  const result = new Array(A.length);
  
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(B[0].length).fill(0);
  }
  
  console.log(result);
  
  
  for (let yKey in Aobj) {
    for (let xKey in Bobj) {
      result[yKey][xKey] = dotSparse(Aobj[yKey], Bobj[xKey]);
    }
  }
  

  console.log(Aobj);
  console.log(Bobj);
  
  return result;
};

function createNestedAobj(matrix, obj) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] !== 0) {
        if (obj[y] !== undefined) {
          obj[y][x] = matrix[y][x];
        } else {
          obj[y] = {};
          obj[y][x] = matrix[y][x];
        }
      }
    }
  }
}

function createNestedBobj(matrix, obj) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] !== 0) {
        if (obj[x] !== undefined) {
          obj[x][y] = matrix[y][x];
        } else {
          obj[x] = {};
          obj[x][y] = matrix[y][x];
        }
      }
    }
  }
}


A = [
  [1, 0, 0],
  [-1, 0, 3]
]

B = [
  [7, 0, 0],
  [0, 0, 0],
  [0, 0, 1]
]


console.log(multiply(A, B));
