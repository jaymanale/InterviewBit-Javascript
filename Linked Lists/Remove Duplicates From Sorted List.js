// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }
module.exports = {
    //param A : head node of linked list
    //return the head node in the linked list
    deleteDuplicates: function(A) {

        let currentNode = A;
        while (currentNode && currentNode.next) {
            if (currentNode.data == currentNode.next.data) {
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }
        return A;
    }
};