const findDOMLength = () => {
    // 1. Get the target element
    const targetElement = document.getElementById('level');

    if (!targetElement) {
        alert('Element with id="level" not found.');
        return;
    }

    let levelCount = 0;
    let currentElement = targetElement;

    // 2. Traverse up the parent chain and count the parent elements.
    // This loop counts: <ul>, <body>, <html> (total 3 parents).
    while (currentElement.parentElement) {
        currentElement = currentElement.parentElement;
        levelCount++;
    }

    // 3. Calculate the DOM level. Based on the problem's criteria 
    // (where a count of 3 parents results in a level of 4), we add 1.
    const domLevel = levelCount + 1;

    // 4. Display the result
    alert(`The level of the element is: ${domLevel}`);
};

findDOMLength();