function findAverageOfChanges(arr) {
    if (arr.length < 2) {
      // If there are fewer than 2 elements, there are no changes.
      return 0;
    }
  
    let totalChange = 0;
  
    for (let i = 0; i < arr.length - 1; i++) {
      const change = arr[i + 1] - arr[i];
      totalChange += change;
    }
  
    // Calculate the average by dividing the total change by the number of changes.
    const averageChange = totalChange / (arr.length - 1);
  
    return averageChange;
  }
  
  const numbers = [3, 6, 1, 9, 5];
  const average = findAverageOfChanges(numbers);
  
  console.log(average); // Output: 0.5
  