//LinkList Task2

//You are given the heads of two sorted linked lists list1 and list2.
//Merge the two lists into one sorted list. 
//The list should be made by splicing together the nodes of the first two lists.
//Return the head of the merged linked list.

const readline = require('readline');

class LinkListNode {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

function mergeTwoLists(list1, list2) {
    const listNode = new LinkListNode(0);
    let current = listNode;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return listNode.next;
}

function createLinkedList(arr) {
    if (arr.length === 0) return null;
    const head = new LinkListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new LinkListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

function getInput(promptText) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(promptText, (input) => {
            rl.close();
            if (!input) return resolve([]);
            const arrayInput = input.slice(1, -1).split(',').map(Number);
            resolve(arrayInput);
        });
    });
}


(async () => {
    const list1Input = await getInput("Input (format: [1,2]): list1: ");
    const list2Input = await getInput("Input (format: [1,2]): list2: ");

    const list1 = createLinkedList(list1Input);
    const list2 = createLinkedList(list2Input);
    const mergedList = mergeTwoLists(list1, list2);

    console.log("Output:", linkedListToArray(mergedList));
})();

//Time Complexity: O(n + m)
//Space Complexity: O(1)
