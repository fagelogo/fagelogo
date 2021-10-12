function compare_input(){
    var input1=document.getElementById('input1').value;
    var input2=document.getElementById('input2').value;
   
    if(input1==input2){
        document.getElementById("answer").innerHTML = "They are equal";
    }
    else{
        document.getElementById("answer").innerHTML = "They are not equal";
    }
  }

  function birth_date()
  {
    document.getElementById("displaybirthday").innerHTML = "Your birthday date is set";            
  };