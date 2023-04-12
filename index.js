export const Calculate = (sticksArr, N, K) => {
    let table = [];
    for (let i = 0; i < N + 1; i++) {
       table[i] = [];
       for (let j = 0; j < K + 1; j++) {
              table[i][j] = 0;
       }
    }
    // init the array
    for (let i = 1; i <= K; i++) {
        table[0][i] = Number.MAX_VALUE - 1;
    }
 
    // find the solution
    // by pre-computation for the
    // sequence
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= K; j++) {
            if (sticksArr[i - 1] > j) {
                table[i][j] = table[i - 1][j];
            }
            else {
                table[i][j] = Math.min(
                        table[i - 1][j],
                        table[i][j - sticksArr[i - 1]] + 1);
            }
            if (table[i][j] === Number.MAX_VALUE) {
                table[i][j] = -2;
            }
        }
    }
    return table[N][K];
}
