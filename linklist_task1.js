//LinkedList Task 1
//Given the head of a singly linked list, reverse the list, and return the reversed list.

const readline = require('readline');

class LinkListNode {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        const nextTemp = curr.next; // Store the next node
        curr.next = prev;            // Reverse the current node's 
        prev = curr;                 // Move prev to the current node
        curr = nextTemp;             // Move to the next node
    }

    return prev;
}

// Function to create a linked list from an array
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

// Function to convert linked list back to an array
function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Function for user input
function getUserInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question("Input (format: [1,2]): head = ", (input) => {
            rl.close();
            if (input === null || input.trim() === "[]") {
                resolve(null); // null input
            } else {
                const arrayString = input.slice(1, -1); // Remove the brackets []
                const arr = arrayString.split(',').map(Number);
                resolve(createLinkedList(arr));
            }
        });
    });
}


(async () => {
    const head = await getUserInput();
    const reversed = reverseList(head);
    console.log("Output:", linkedListToArray(reversed) || []);
})();

//Time Complexity: O(n)
//Space Complexity: O(1)
