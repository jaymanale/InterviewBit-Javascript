ss// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }
module.exports = {
    //param A : head node of linked list
    //return the head node in the linked list
    reverseList: function(A) {

        let currentNode = A;
        let next, prev = null;
        while (currentNode) {
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
        return prev;
    }
};