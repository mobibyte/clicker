function log_test() {
    let sum = 4;

    console.log("Hello world!");
    console.log("2 + 2 = " +sum);

    while (sum == 4) {
        sum = sum++
    }

    console.log("New sum is : " +sum)
}

module.exports = log_test