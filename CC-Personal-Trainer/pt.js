

function pt() {
    const minExercise = 30;
    const maxExercise = 180;
    let ptOutput = "";
    let workoutTime = document.getElementById('minutes').value;

    // guard statement
    if (isNaN(workoutTime)) return alert("Not a number!");

    if (workoutTime <= 0) {
        ptOutput = "You need to exercise every day!";
    } else if (workoutTime < minExercise) {
        ptOutput = "Good, but you can do better!";
    } else if (workoutTime >= maxExercise) {
        ptOutput = "Impressive, remember to rest also!"
    } else {
        ptOutput = "Keep up the good work!";
    }

    document.getElementById('pt-output').innerHTML = ptOutput;
    console.log(ptOutput)
}



document.getElementById('btn-ok').addEventListener('click', function () { 
    pt(); 
});



