function recursionTest(num) {
    if (num <= 0) {
        console.log('done');
        return;
    }
    console.log('num', num);
    num--;
    recursionTest(num);
}

recursionTest(5);