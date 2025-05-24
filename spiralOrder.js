function spiralOrder(mat) {
    if (mat.length === 0) return []; // If matrix is empty, return empty array

    let result = []; // To store the spiral order
    let top = 0, bottom = mat.length - 1, left = 0, right = mat[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            result.push(mat[top][i]);
        }
        top++; 

        for (let i = top; i <= bottom; i++) {
            result.push(mat[i][right]);
        }
        right--; // Move right boundary left

        // Step 3: Traverse from right to left (if there are rows left)
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(mat[bottom][i]);
            }
            bottom--; // Move bottom boundary up
        }

        // Step 4: Traverse from bottom to top (if there are columns left)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(mat[i][left]);
            }
            left++; // Move left boundary right
        }
    }

    return result;
}

const mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log(spiralOrder(mat)); 