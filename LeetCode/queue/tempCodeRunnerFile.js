for (let i = 0; i <= array.length - k; i++) {
        let max = -Infinity; // Reset max for each window
        for (let j = i; j < i + k; j++) {
            max = Math.max(array[j], max);
        }
        result.push(max);
    }
    return result;