// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }
module.exports = {
    //param A : head node of linked list
    //param B : integer
    //return the head node in the linked list
    removeNthFromEnd: function(A, B) {

        let firstPointer = A;
        let secondPointer = A;
        let count = 0,
            prevNode = null;
        while (secondPointer) {
            secondPointer = secondPointer.next;

            if (count >= B) {
                prevNode = firstPointer;
                firstPointer = firstPointer.next;
            }
            count += 1;
        }
        if (firstPointer == A && secondPointer == A) {
            A = null
        } else if (firstPointer == A) {
            A = A.next
        } else {
            prevNode.next = firstPointer.next;
        }

        return A;
    }
};