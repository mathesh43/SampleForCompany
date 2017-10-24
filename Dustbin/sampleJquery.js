<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#1").animate({
            left: '25%',
            height: '20%',
            width: '18%'
        },"slow");
          $("#1").animate({
           left: '50%',
            height: '30%',
            width: '25%'
        },"slow");
        $("#1").animate({
            left: '75%',
            height: '20%',
            width: '18%'
        },"slow");
        $("#1").animate({
            left: '80%',
            height: '16%',
            width: '15%'
        },"slow");
    });
});
</script>
</head>
<body>

<button>Start Animation</button>

<p>By default, all HTML elements have a static position, and cannot be moved. To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!</p>

<div id = "1" style="background:#98bf21;height:16%;width:15%;position:absolute;left:0%"></div> <br><br><br><br><br><br>

</body>
</html>
