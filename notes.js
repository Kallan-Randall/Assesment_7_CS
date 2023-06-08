// tinyArray results

// insert 46.1 μs
// append 118 μs

// smallArray results

// insert 67.9 μs
// append 132.5 μs

// mediumArray results
// insert 221 μs
// append 181 μs

// largeArray

// insert 11.2819 ms
// append 663.2 μs

// Extralargearray results

// insert 1.2798733 s
// append 3.5314 ms


// It appears that the smaller the array, the faster the insert function is. 
// However as the array becomes larger the insert function begins to take longer and longer. 
// The inverse happens when we look at the appeand function. The append takes longer with the smaller arrays
// but then becomes much faster as the arrays grow in size.