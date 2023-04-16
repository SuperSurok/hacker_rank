function staircase(n) {
    // Write your code here
    for (let i = 0; i < n; i += 1) {
        const char = '#';
        const space = ' ';
        let backCount = (n - 1) - i;
        console.log(`${space.repeat(backCount)}${char.repeat(i + 1)}`);
    }
}
