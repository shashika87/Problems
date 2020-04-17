import java.util.*;

class MyCode {
  public static void main (String[] args) {
    ArrayList<Integer> arr = Arrays.asList(4, 15, 16, 50, 8, 23, 42, 108);
    System.out.println(heapsort(arr));
  }
  
  public static List<Integer> heapsort(List<Integer> arr) {
    //Max heapify array
    for(int parent = arr.size()/2; parent >= 0; parent--) {
      bubbleDown(arr, parent, arr.size());
    }
    //Transform max heap into sorted array
    for(int heapEnd = arr.size()-1; heapEnd > 0; heapEnd--) {
        swap(arr, 0, heapEnd);
        bubbleDown(arr, 0, heapEnd);
    }
    
    return arr;
    
  }

  private static void bubbleDown(List<Integer> arr, int parent, int heapSize) {
      //Calculate child index for parent index
      int child = getChild(arr, parent, heapSize);
      //while child index is valid and parent val is less than the child
      while(child < heapSize && arr.get(parent) < arr.get(child)) {
          //Swap child val with parent val
          swap(arr, parent, child);
          //Move parent ptr to child ptr
          parent = child;
          //Calc new child index/ptr from parent index/ptr
          child = getChild(arr, parent, heapSize);
      }
  }

  private static int getChild(List<Integer> arr, int parent, int heapSize) {
      int child1 = 2*parent+1;
      int child2 = 2*parent+2;
      
      //Check if child1 is invalid
      if(child1 >= heapSize) return child1;
      
      //Check if child2 is invalid
      if(child2 >= heapSize) return child1;
      
      return arr.get(child1) > arr.get(child2) ? child1 : child2;
  }


  private static void swap(List<Integer> arr, int ind1, int ind2) {
      int temp = arr.get(ind1);
      arr.set(ind1, arr.get(ind2));
      arr.set(ind2, temp);
  }
}