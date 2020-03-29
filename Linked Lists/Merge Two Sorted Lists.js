// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }
module.exports = {
    //param A : head node of linked list
    //param B : head node of linked list
    //return the head node in the linked list
    mergeTwoLists: function(A, B) {
        let firstList = A;
        let secondList = B;
        let sortedVal = null,
            newHead = null,
            newTail = null;

        while (firstList || secondList) {

            if (firstList.data < secondList.data) {
                sortedVal = {
                    'data': firstList.data,
                    'next': null
                };
                firstList = firstList.next ? firstList.next : null;
            } else {
                sortedVal = {
                    'data': secondList.data,
                    'next': null
                };
                secondList = secondList.next ? secondList.next : null;
            }

            if (newHead == null) {
                newHead = sortedVal;
                newTail = newHead;
            } else {
                newTail.next = sortedVal;
                newTail = sortedVal;
            }

            if (firstList == null) {
                newTail.next = secondList;
                return newHead;
            }
            if (secondList == null) {
                newTail.next = firstList;
                return newHead;
            }
        }
    }
};