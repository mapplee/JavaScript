Getting elements ........
document.getElementById("")// geting elelment by the name of id
document.querySelector("");// gettig elelment tag <a>,<h1> etc 
document.querySelector("");// also gettig elelment by class name with a single DOT(.) before the class name. 
remember querySelector work with first class of multiple class with same name 
like
<h1 class ="test">This class name is test</h1>
<h1 class ="test">This class  also name is test</h1>
querySelector will for first one .....
document.getElementsByClassName("")// it will grab the elements by class name but act like as array ..
var a[0]=document.getElementsByClassName("nameOFclass") it will work for first class of nae nameOFclass
