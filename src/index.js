const fs = require('fs');
const { getRandomWordSync, getRandomWord } = require('word-maker');
console.log('It works!');

// YOUR CODE HERE

/**
 * @author Samitha Hewawasam
 */

const writeOutPutToAFile = (task, data) => {

    try {
        fs.appendFileSync("Tasks/" + task + ".txt", data + "\n");
    } catch (error) {
        console.error(error)
    }
}

/**
 * @description Tasks 1
 */

for (let i = 0; i < 100; i++) {
    let str = getRandomWordSync({ withErrors: false })
    writeOutPutToAFile("1", i + 1 + ": " + str)
}

/**
 * @description Tasks 2
 */

for (let i = 0; i < 100; i++) {

    let str = getRandomWordSync({ withErrors: false })
    let number = i + 1

    if (number % 3 == 0 && number % 5 == 0) {
        str = "FizzBuzz"
    } else if (number % 3 == 0) {
        str = "Fizz"
    } else if (number % 5 == 0) {
        str = "Buzz"
    }

    writeOutPutToAFile("2", i + 1 + ": " + str)
}


/**
 * @description Tasks 3 - step 1
 */


(async function Task3Step1() {
    for (let i = 0; i < 100; i++) {
        let str = await getRandomWord({ withErrors: false })
        writeOutPutToAFile("3-1", i + 1 + ": " + str)
    }
})();

/**
 * @description Tasks 3 - step 2
 */

(async function () {
    for (let i = 0; i < 100; i++) {
        let str = await getRandomWord({ withErrors: false })
        let number = i + 1

        if (number % 3 == 0 && number % 5 == 0) {
            str = "FizzBuzz"
        } else if (number % 3 == 0) {
            str = "Fizz"
        } else if (number % 5 == 0) {
            str = "Buzz"
        }
        writeOutPutToAFile("3-2", i + 1 + ": " + str)
    }
})();

/**
 * @description Tasks 4 - step 1 - synchronous
 */

for (let i = 0; i < 100; i++) {
    let str = ""
    try {
        str = getRandomWordSync({ withErrors: true })
    } catch (error) {
        str = "It shouldn't break anything!"
    }
    writeOutPutToAFile("4-1", i + 1 + ": " + str)
}

/**
 * @description Tasks 4 - step 2 - synchronous
 */


for (let i = 0; i < 100; i++) {

    let str = ""
    let number = i + 1

    try {
        str = getRandomWordSync({ withErrors: true })
    } catch (error) {
        str = "It shouldn't break anything!"
    }
    writeOutPutToAFile("4-2", i + 1 + ": " + str)
}

/**
 * @description Tasks 4 - step 3 - asynchronous
 */


(async function () {

    for (let i = 0; i < 100; i++) {
        let str = ""

        try {
            str = await getRandomWord({ withErrors: true })
            writeOutPutToAFile("4-3", i + 1 + ": " + str)

        } catch (error) {
            str = "It shouldn't break anything!"
            writeOutPutToAFile("4-3", i + 1 + ": " + str)

        }
    }
})();


/**
 * @description Tasks 4 - step 4 - asynchronous
 */
(async function () {

    for (let i = 0; i < 100; i++) {
        let str = ""

        try {
            str = await getRandomWord({ withErrors: true, slow: true })
            writeOutPutToAFile("4-4", i + 1 + ": " + str)

        } catch (error) {
            str = "It shouldn't break anything!"
            writeOutPutToAFile("4-4", i + 1 + ": " + "It shouldn't break anything!")

        }
    }
})();

/**
 * @description Task bonus - solution. Only without having the ascending order. This way setTimout will asynchronously log data to bonus-2 file. 
 * Now execution time is around 1000ms. solution doesn't wait for asynchronous event.
 */

for (let i = 0; i < 100; i++) {
    let str = ""
    getRandomWord({ withErrors: false, slow: true }).then(str => {
        writeOutPutToAFile("bonus-2", i + 1 + ": " + str)
    })
}
