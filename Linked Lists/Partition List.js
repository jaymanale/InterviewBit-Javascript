vv// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }
module.exports = {
    //param A : head node of linked list
    //param B : integer
    //return the head node in the linked list
    partition: function(A, B) {
        let newHead, newTail = null;
        let tempHead, tempTail = null;
        let currentNode = A;

        while (currentNode) {
            let newNode = {
                'data': currentNode.data,
                'next': null
            };
            if (currentNode.data < B) {
                if (newHead == null) {
                    newHead = newNode;
                    newTail = newHead;
                } else {
                    newTail.next = newNode;
                    newTail = newNode;
                }
            } else {
                if (tempHead == null) {
                    tempHead = newNode;
                    tempTail = tempHead;
                } else {
                    tempTail.next = newNode;
                    tempTail = newNode;
                }
            }

            currentNode = currentNode.next;
        }
        if (newHead == null) {
            return tempHead;
        } else {
            newTail.next = tempHead;
        }
        return newHead;
    }
};