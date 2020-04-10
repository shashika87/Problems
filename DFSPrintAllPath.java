class Result {
​
    /*
     * Complete the 'find_all_paths' function below.
     *
     * The function is expected to return a STRING_ARRAY.
     * The function accepts following parameters:
     *  1. Vertex origin
     *  2. Character destination
     */
    
    /*
     * For your reference:
     *
     * Vertex {
     *     Character id;
     *     List<Vertex> edges;
     * }
     *
     */  
    
    private static ArrayList<String> result;
    private static HashSet<Character> seen;
    private static Character desCh;
    
    public static List<String> find_all_paths(Vertex origin, Character dest) {
        result = new ArrayList<>();
        seen = new HashSet<>();
        desCh = dest;
        dfs(origin, "");
        System.out.println(seen);
        return result;
    }
    
    private static void dfs(Vertex curr, String path) {
        //Add curr id to seen set and path string
        seen.add(curr.id);
        path += curr.id;
        
        //Base cases        
        //Dest reached
        if(curr.id == desCh) {
            //Add path to result set
            result.add(path);
            //Remove curr.id from seen set
            seen.remove(curr.id);
            return;
        }
        
        
        //Loop neighbors and dfs
        for(Vertex neighbor: curr.edges) {
            if(!seen.contains(neighbor.id)) {
                dfs(neighbor, path);
            }
        }
    
        //remove curr id from seen set
        seen.remove(curr.id);
    }
​
}
