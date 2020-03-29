s// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }
module.exports = {
    //param A : head node of linked list
    //return the head node in the linked list
    deleteDuplicates: function(A) {


        let map = {};
        let newHead, newTail = null;
        let currentNode = A;
        while (currentNode) {

            if (!map[currentNode.data]) {
                map[currentNode.data] = 1;
            } else {
                map[currentNode.data] += 1;
            }
            currentNode = currentNode.next;
        }
        currentNode = A;
        while (currentNode) {
            if (map[currentNode.data] == 1) {
                let newNode = {
                    'data': currentNode.data,
                    'next': null
                };
                if (newHead == null) {
                    newHead = newNode;
                    newTail = newHead;
                } else {
                    newTail.next = newNode;
                    newTail = newNode;
                }
            }

            currentNode = currentNode.next;
        }
        return newHead;
    }
};