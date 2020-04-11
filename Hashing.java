import java.io.*;
import java.util.*;

class Pair {
  public String key;
  public String value;
  
  public Pair(String key, String value) {
    this.key = key;
    this.value = value;
  }
}

class ListNode {
  public Pair value;
  public ListNode next = null;

  public ListNode(Pair value){
    this.value = value;
  }
}


class LinkedList {
  public int length = 0;
  public ListNode head;
  public ListNode tail;

  // Time Complexity: O(1)
  // Auxiliary Space Complexity: O(1)
  public void append(Pair value){
    insert(value, length);
  }


  // Time Complexity: O(N)
  // Auxiliary Space Complexity: O(1)
  public void insert(Pair value, int index){
    if(index < 0 || index > length){
      return;
    }

    ListNode newNode = new ListNode(value);

    if(length == 0){
      head = newNode;
      tail = newNode;
    } else if(index == 0){
      newNode.next = head;
      head = newNode;
    } else if(index == length){
      tail.next = newNode;
      tail = newNode;
    } else {
      ListNode prev = head;
      for(int i = 0; i < index-1; i++){
        prev = prev.next;
      }
      newNode.next = prev.next;
      prev.next = newNode;
    }
    length++;
  }


  // Time Complexity: O(N)
  // Auxiliary Space Complexity: O(1)
  public void delete(int index){
    if(index < 0 || index >= length){
      return;
    }

    if(length == 1){
      head = null;
      tail = null;
    } else if (index == 0){
      head = head.next;
    } else {
      ListNode prev = head;
      for(int i = 0; i < index-1; i++){
        prev = prev.next;
      }
      prev.next = prev.next.next;
      if(index == length-1){
        tail = prev;
      }
    }
    length--;
  }


  // Time Complexity: O(N)
  // Auxiliary Space Complexity: O(1)
  public String get(String key){
    ListNode current = head;
    while(current != null){
      if(current.value.key == key){
        return current.value.value;
      }
      current = current.next;
    }
    return null;
  }
  
  public int overWriteIfNeeded(String key, String value) {
    ListNode current = head;
    while(current != null){
      if(current.value.key == key){
        current.value.value = value;
        return 0;
      }
      current = current.next;
    }
    Pair pair = new Pair(key, value);
    append(pair);
    return 1;
  }
}


// package whatever; // don't place package name!


class MyCode {
	public static void main (String[] args) {
    HashTable ht = new HashTable();
    
    ht.insert("hello", "foo");
    ht.insert("tom", "bye");
    ht.insert("ehllo", "apple");
    
    // System.out.println(ht.get("hello"));
    // System.out.println(ht.get("tom"));
    // System.out.println(ht.get("blah"));
    // System.out.println(ht.get("ehllo"));
    // System.out.println(ht.numberOfPairs);
    System.out.println(ht.storage[4].get("hello"));
    System.out.println(ht.storage[4].get("ehllo"));
    
    // for (int i = 0; i < ht.storage.length; i++) {
    //   System.out.println(ht.storage[i]);
    // }
	}
}


// key - string
// value - string

class HashTable {
  
  public LinkedList[] storage = new LinkedList[8];
  public int size = 8;
  public int numberOfPairs = 0;
  
  public HashTable() {
    for (int i = 0; i < size; i++) {
      storage[i] = new LinkedList();
    }
  }
  
  public void insert(String key, String value) {
    int index = hashing(key);
    LinkedList ll = storage[index];
    
    numberOfPairs += ll.overWriteIfNeeded(key, value);
  }
  
  public String get(String key) {
    int index = hashing(key);
    LinkedList ll = storage[index];

    return ll.get(key);    
  }
  
  public int hashing(String key) {
    int totalSum = 0;
    
    for (int i = 0; i < key.length(); i++) {
      int value = (int) key.charAt(i);
      totalSum += value;
    }
    
    return totalSum % size;
  }

}

