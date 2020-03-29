// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }
module.exports = {
    //param A : head node of linked list
    //return an integer
    lPalin: function(A) {
        let newHead = null;
        let currNode = A;
        while (currNode) {
            let newNode = {
                'data': currNode.data,
                'next': null
            }
            if (newHead == null) {
                newHead = newNode;
            } else {
                newNode.next = newHead;
                newHead = newNode;
            }
            currNode = currNode.next;
        }
        currNode = A;

        while (currNode) {
            if (currNode.data != newHead.data) {
                return 0;
            }
            currNode = currNode.next;
            newHead = newHead.next;
        }
        return 1;
    }
};