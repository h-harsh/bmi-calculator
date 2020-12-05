const weight = document.getElementById('weightval');
const height = document.getElementById('heightval');

const calculateButton = document.getElementById("mainbutton");
const result = document.getElementById('resultp');
const bbutton = document.getElementById('rbutton');
const displayvalue = document.getElementById('displayval');
const displayvalue1 = document.getElementById('displayval1');
console.log(weight); 
weight.addEventListener('input', function(e){
    displayvalue.textContent=weight.value;
});
console.log(height); 
height.addEventListener('input', function(f){
    displayvalue1.textContent=height.value;
});
    const theMain = function() {
    let weights = weight.value;
    let heights = height.value; 
    let bmi
    let heightsn = heights/100;
    bmi = weights/(heightsn*heightsn);
   let newbmi =  Math.floor(bmi);
   console.log(newbmi);
    if(bmi >= 19 && bmi <= 24){
    result.innerHTML = `${newbmi} You are in the range`;
    } else { result.innerHTML = `${newbmi} Get in the range kiddo` };  
   }  
calculateButton.addEventListener('click', theMain);
bbutton.addEventListener('click', function(){
    result.innerHTML = '';
})


