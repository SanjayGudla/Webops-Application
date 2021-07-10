
function change1(i){
  document.getElementsByClassName("change")[i-1].style.backgroundColor="#9575CD";
}

function change2(i){
  if(i%2==1){
    document.getElementsByClassName("change")[i-1].style.backgroundColor= "#f2f2f2";
  }
  else{
    document.getElementsByClassName("change")[i-1].style.backgroundColor= "#ddd";
  }

}
