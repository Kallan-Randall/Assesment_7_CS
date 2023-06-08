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
// The insert is faster while the array is small because it is only has to "shift" a few items to make room. As the array
// grows larger it slows down because it has to shift more items.
// The append becomes much faster in the end because it is only appending at the end of the array. This makes it much faster
// as the array grows larger, it is only looking for the end and adding there rather than shifting everything down.