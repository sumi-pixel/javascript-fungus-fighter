// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
// starting 
let PlayerAp = 100; 
let fungusHP = 100; 

// dom 
document.getElementById(player-ap).innerHTML = `${playerAP} Ap`; 
document.getElementById(fungus-hp).innerHTML = `${fungusHP} Hp`; 

onReady()
console.log("Ready Attack");
// handler 
function changeAttackHandler() {
    console.log ("changeAttackHandler() was called")
    changeAttackHandler("change")
};


function steadyAttackHandler() {
    console.log ("steadyAttackHandler() was called")
    steadyAttackHandler("steady")
}

console.log("Attack complete");

// state/ render 
function updateState(attackAp, damageHP) {
PlayerAp = (0, PlayerAp-attackAp);
fungusHP = (0,fungusHP-damageHP); 
}
 // check 
 if (fungusHP === 0) {
    document.getElementById('freaky-fungus').classList.remove('walk');
    document.getElementById('freaky-fungus').classList.add('dead'); 
    notice('I win! The freaky fungus is dead!')
} else if (PlayerAp === 0);{
    document.getElementById('freaky-fungus').classList.remove('walk');
    document.getElementById('freaky-fungus').classList.add('jump'); 
    notice('I lose! The freaky fungus wins!')
}

 if (PlayerAp ===0); {
    let attackButtons.forEach(button =>
        button.steadyAttackHandler('disabled','true'));
 }
 console.log('mission complete!' );