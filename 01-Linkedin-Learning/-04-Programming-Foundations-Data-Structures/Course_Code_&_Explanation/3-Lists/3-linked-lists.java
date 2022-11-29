// Linked List
public class LinkedListFromScratch {
    Node head;
    
    public void add(int data) {
        // LL is empty
        if (this.head == null) {
            this.head = new Node(data);
        } else {
        // LL is not empty
            Node nodeToAdd = new Node(data);
            nodeToAdd.next = this.head;
            this.head = nodeToAdd;
        }
    }
    
    public static void main(String[] args) {
        LinkedListFromScratch myList = new LinkedListFromScratch();
        myList.add(10);
        myList.add(18);
        System.out.println(myList.head.data);
        System.out.println(myList.head.next.data);
    }
}

// Node
class Node {
    int data;
    Node next;
    
    Node(int d) { this.data = d;}
}




import java.util.LinkedList;

public class MyClass {
    public static void main(String args[]) {
        LinkedList travelBucketList = new LinkedList();
        
        // Add Items
        travelBucketList.add("Santorini, Greece");
        travelBucketList.addFirst("Barcelona, Spain");
        travelBucketList.addLast("Tokyo, Japan");
        travelBucketList.add(2, "Galapagos Islands, Ecuador");
        System.out.println(travelBucketList);
        
        // Access
        System.out.println(travelBucketList.get(2));
        System.out.println(travelBucketList.getFirst());
        
        System.out.println(travelBucketList.contains("Barcelona, Spain"));
        
        // Remove Items
        travelBucketList.removeFirst();
        travelBucketList.removeLast();
        System.out.println(travelBucketList);
        
        travelBucketList.remove("Santorini, Greece");
        travelBucketList.remove(0);
        System.out.println(travelBucketList);
    }
}