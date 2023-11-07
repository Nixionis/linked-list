function newLinkedList() {
  let head = null;

  function createNode(newValue = null, newNext = null) {
    let value = newValue;
    let next = newNext;

    return { value, next };
  }

  const append = (value) => {
    const newNode = createNode(value);

    if (head === null) {
      head = newNode;
      return;
    }

    let currentNode = head;
    while (currentNode.next !== null) currentNode = currentNode.next;

    currentNode.next = newNode;
  };

  const prepend = (value) => {
    const newNode = createNode(value);

    if (head === null) {
      head = newNode;
      return;
    }

    newNode.next = head;
    head = newNode;
  };

  const at = (index) => {
    if (index < 0) return null;

    if (head === null) return null;

    let currentNode = head;
    let i = 0;

    while (i < index) {
      i += 1;

      if (currentNode.next === null) {
        return null;
      }

      currentNode = currentNode.next;
    }

    return currentNode;
  };

  const pop = () => {
    if (head === null) {
      return;
    }

    let currentNode = head;
    while (currentNode.next.next !== null) currentNode = currentNode.next;

    let lastItem = currentNode.next;
    currentNode.next = null;

    return lastItem;
  };

  const contains = (value) => {
    if (head === null) {
      return false;
    }

    let currentNode = head;
    while (currentNode !== null) {
      if (currentNode.value === value) return true;

      currentNode = currentNode.next;
    }

    return false;
  };

  const find = (value) => {
    if (head === null) {
      return null;
    }

    let currentNode = head;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) return index;

      currentNode = currentNode.next;
      index += 1;
    }

    return null;
  };

  const makeString = () => {
    if (head === null) {
      return "null";
    }

    let currentNode = head;
    let resultString = `(${head.value}) -> `;
    currentNode = currentNode.next;

    while (currentNode !== null) {
      resultString += `(${currentNode.value}) -> `;

      currentNode = currentNode.next;
    }

    resultString += `null`;
    return resultString;
  };

  const insertAt = (value, index) => {
    if (index < 0) return;

    if (head === null) return;

    const newNode = createNode(value);

    if (index === 0) {
      newNode.next = head;
      head = newNode;
      return;
    }

    let currentNode = head;
    let i = 0;

    while (i + 1 < index) {
      i += 1;

      if (currentNode.next === null) {
        return;
      }

      currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  };

  const removeAt = (index) => {
    if (index < 0) return;

    if (head === null) return;

    if (index === 0) {
      head = head.next;
      return;
    }

    let currentNode = head;
    let i = 0;

    while (i + 1 < index) {
      i += 1;

      if (currentNode.next === null) {
        return;
      }

      currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next.next;
  };

  /////

  return {
    append,
    prepend,
    at,
    pop,
    contains,
    find,
    insertAt,
    removeAt,
    get size() {
      let count = 0;
      let currentNode = head;
      while (currentNode !== null) {
        count += 1;
        currentNode = currentNode.next;
      }

      return count;
    },
    get head() {
      return head;
    },
    get tail() {
      if (head === null) return null;

      let currentNode = head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      return currentNode;
    },
    get toString() {
      return makeString();
    },
  };
}

module.exports = newLinkedList;
