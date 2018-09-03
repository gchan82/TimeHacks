//10,000 hr rule: How many hours do you code?
//Q: How many hours do you code everyday?
//A: You will be an expert in x years.
//Q: Matrix question: Will you take the Blue pill or red pill?
// blue pill - random: you will never become expert or you will become expert quickly.
// red pill - randomized time saver - answer bw 3 mos and 24 mos.

//Sample:
// var myArray = ['January', 'February', 'March'];
// var item = myArray[(Math.random() * myArray.length) | 0];
// console.log('item:', item);

//Math.floor(Math.random() * Math.floor(max)) + 4; (range: 3-24)
////Math.floor(Math.random() * Math.floor(21)) + 4; (range: 3-24)


function expertCalcRand(hours) {
    let years = Math.floor(((10000 / hours) / 365));
    console.log("Based on " + hours + " hours per day, you will become expert in " + years + " years.");

    //randomize red or blue
    // const rand = Boolean(Math.round(Math.random())); //rand is 0 or 1.
    console.log("Enter the matrix...");
    const rand = Boolean(Math.round(Math.random())); //rand is 0 or 1.
    if (rand) {
        const red = Math.floor(((Math.random() * Math.floor(21))) + 4);
        console.log("If you take the red pill, you will become an expert in " + red + " months.");
    } else {
        const blue = ['you will never become expert.', 'you will become expert quickly.'];
        let blueResult = blue[(Math.random() * blue.length) | 0];
        console.log("If you take the blue pill, " + blueResult);


    }
}

expertCalcRand(2);