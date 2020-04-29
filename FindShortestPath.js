Link to try Shortest Path problem!

/*
Prompt: Find length of shortest path in a matrix from top left corner to bottom right corner

1s - walls
0s - empty spaces; can travel 

Input: 

x -> 

[[1, 0, 0, 0, 0], 

 [0, 1, 1, 1, 0], 

 [0, 1, 0, 0, 0],

 [0, 0, 0, 1, 0]]      x = 4; y = 3

y
|
v

Output: 8


Input: 

[[0, 0]
 [1, 0]]

Output: 3

[[0]] => 1


Time: O(M x N)
Space: O(M x N)

Underline = base case

result = 8
						x,y,distance
						(0,0,1)
			/				/		\			\
		     (1,0,2)	    		     (-1,0,2)	        (0,1,2)	      (0,-1,2)
	/	/		\	\
     2,0     0,0		1,1     1,-1




			5,4,8					5,4,10



class ShortestPath {
	public static int result = Integer.MAX_VALUE
	public static int compute(int[][] matrix) {
	}
	public static void traverse() {
	}
}



State variables
Return state variables
Instantiate and invoke helper method
Base Case(s)
Recursive Case(s) 

*/



function shortestPath(matrix) {
	let result = Infinity;

	function traverse(x, y, distance) {
		if (x < 0 || y < 0 || x >= matrix[0].length || y >= matrix.length) {
			return;
		}
		if (matrix[y][x] === 1) {
			return;
		}
		if (x === (matrix[0].length - 1) && y === (matrix.length - 1)) {
			result = Math.min(result, distance);
return;
		}

		matrix[y][x] = 1;
		traverse(x+1, y, distance+1);
		traverse(x-1, y, distance+1);
		traverse(x, y+1, distance+1);
		traverse(x, y-1, distance+1);
		matrix[y][x] = 0;
	}
	traverse(0, 0, 1);

	return result;
}




