// Level 1: Greet someone by name
// Level 2: Greet them with the time of day and their name
// Level 3: If the person you're greeting in Count Dooku, say "I'm coming for you, Dooku!"

function greet(name, time){

    if(name == "Count Dooku") {
        console.log("I'm coming for you, Dooku!")
    }

    else{
        if(time < 0300) {
            console.log("Go to bed, " + name + "!")
        }

        else if(time < 1200) {
            console.log("Good morning, " + name + "!")
        }

        else if(time < 1700) {
            console.log("Good afternoon, " + name + "!")
        }

        else if(time < 2100) {
            console.log("Good evening, " + name + "!")
        }

        else if(time < 2300) {
            console.log("It's getting pretty late " + name + "...")
        }

        else {
            console.log("Go to bed, " + name + "!")
        }
    
    }
}

greet("Count Dooku", 2330)