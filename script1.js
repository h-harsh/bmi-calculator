const calculateButton = document.getElementById("mainbutton");
const result = document.getElementById('resultp');
const bbutton = document.getElementById('rbutton');
const displayvalue = document.getElementById('displayval');

const theMain = function() {
    let weights = document.getElementById('weightval').value;
    let heights = document.getElementById('heightval').value;
    let bmi
    let heightsn = heights/100;
    bmi = weights/(heightsn*heightsn);
   let newbmi =  Math.floor(bmi);
   console.log(newbmi);
    if(bmi >= 19 && bmi <= 24){
    result.innerHTML = `${newbmi} You are in the range`;
    } else { result.innerHTML = `${newbmi} Get in the range kiddo`; }
}
  
calculateButton.addEventListener('click', function() {
    theMain();
});
bbutton.addEventListener('click', function(){
    result.innerHTML = '';
})

.onclick = function(){
displayvalue.innerHTML = weights
};
