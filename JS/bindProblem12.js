
$( document ).ready(function() {

  console.log("bindproblem");

  var problemSelector=document.getElementById("PLForm");
  var problemSelector1extended=document.getElementById("body");
  var problemSelector1=document.getElementById("PL1Form");
  var problemSelector2=document.getElementById("PL2Form");
  problemSelector.addEventListener("keydown", myThirdFunction);
  problemSelector.addEventListener("click", myThirdFunction);
  problemSelector.addEventListener("mouseout", myThirdFunction);
  problemSelector1.addEventListener("mouseout", myThirdFunction);
  problemSelector1extended.addEventListener("mouseover", myThirdFunction);


  var blockAutofillIn=false;

    problemSelector1.addEventListener("keydown", stopAutofillIn);
        problemSelector2.addEventListener("keydown", stopAutofillIn);
  function myThirdFunction() {
  //  var problemSelectorIDbind=problemSelector.getAttribute("idBind");
  //  var problemSelectorIDbind=document.querySelector("options[value=problemSelectorValue]");
//console.log(problemSelector2.getAttribute("idbind")) ;
    //console.log(problemSelectorIDbind);
    if(blockAutofillIn==false){
      try{

        var problemSelectorValue=problemSelector.value;
        var text1 = document.querySelector('option[value="' + problemSelectorValue+ '"]').getAttribute("idbind");
          var text2 = document.querySelector('option[value="' + problemSelectorValue+ '"]').getAttribute("idbindA");
        console.log(text2);
        problemSelector1.value=text1;
        problemSelector2.value=text2;
        console.log(problemSelectorValue);
        //document.getElementById("demo").innerHTML += problemSelectorValue;
      }catch(err){

      }

    }else return;

  }

function stopAutofillIn(){
  blockAutofillIn=true;

}
});
