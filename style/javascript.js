function runall() {
    var p =document.getElementsByClassName("run")[0].value;
    var a= parseInt(p);
    var o = document.getElementsByClassName("run")[1].value;
    var b=parseInt(o);
    var c = document.getElementsByClassName("run")[2].value;
    var d = document.getElementsByClassName("run")[3].value;
    var e = document.getElementsByClassName("run")[4].value;
    var f = document.getElementsByClassName("run")[5].value;
    var g = document.getElementsByClassName("run")[6].value;
    var h = document.getElementsByClassName("run")[7].value;
    var i = document.getElementsByClassName("run")[8].value;
    var j = document.getElementsByClassName("run")[9].value;
    var k = document.getElementsByClassName("run")[10].value;
      var m = document.getElementsByClassName("run")[11].value;
    
    var l =a+b+c+d+e+f+g+h+i+j+k+m
    document.getElementsByClassName("allrun")[0].value=l;
}