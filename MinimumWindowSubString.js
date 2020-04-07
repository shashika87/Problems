/*
 * Complete the 'minimumWindowSubstring' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING str
 *  2. STRING chars
 */
function minimumWindowSubstring(str, targets) {
  let counts = {};
  let targetCounts = {};
  let missingChars = targets.length;
  let range = [0, Infinity];
  
  for (let i = 0; i < targets.length; i++) {
    counts[targets[i]] = 0;
    
    if(targets[i] in targetCounts) {
      targetCounts[targets[i]]++;
    } else {
      targetCounts[targets[i]] = 1;
    }
  }
  
  let left = 0;
  for (let right = 0; right < str.length; right++) {
    if (str[right] in counts) {
      counts[str[right]]++;
      if (counts[str[right]] <= targetCounts[str[right]]) {
        missingChars--;
      }
    }
    
    while (missingChars === 0) {
      if ((right-left) < (range[1] - range[0])) {
        range = [left, right];
      }
      
      if (str[left] in counts) {
        counts[str[left]]--;
        if (counts[str[left]] < targetCounts[str[left]]) {
          missingChars++;
        }
      }
      left++;
    }

  }
  
  console.log("COUNTS:", counts);
  console.log("TARGET COUNTS:", targetCounts);
  console.log("MISSING CHARS:", missingChars);
  console.log("RANGE: ", range);

  if (range[1] === Infinity) {
    return "";
  } else {
    return str.slice(range[0], range[1] + 1);
  }

}

console.log(minimumWindowSubstring("ADOBECODEBANC", "ABBC"));
