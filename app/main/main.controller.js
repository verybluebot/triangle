(function (){
  'use strict'

  angular
    .module('app')
    .controller('MainCtl', MainCtl)

  MainCtl.$inject = ['TriangleService']

  function MainCtl(TriangleService){
    var vm = this;

    // functions
    vm.drawTriangleWithAngle = drawTriangleWithAngle;

    function drawTriangleWithAngle(){
        var values = TriangleService.getTriangleValues();
        var canvas = document.getElementById("canvas")
        var ctx = canvas.getContext('2d');

        // function to draw angle
        function drawAngle(x, y, dirA, dirB){
            dirB += Math.PI;
            var sweepAng = dirB - dirA;
            var startAng = dirA;
            if(Math.abs(sweepAng) > Math.PI){
                sweepAng = Math.PI * 2 - sweepAng;
                startAng = dirB;
            }
            ctx.beginPath();
            if(sweepAng < 0){
                ctx.arc(x, y, minDist ,startAng + sweepAng , startAng);
            }else{
                ctx.arc(x, y, minDist, startAng, startAng + sweepAng);
            }
            ctx.stroke();
        }

        // radius of the angle stroke
        var dist1 = distance(values.x1, values.y1, values.x2, values.y2);
        var dist2 = distance(values.x2, values.y2, values.x3, values.y3);
        var dist3 = distance(values.x3, values.y3, values.x1, values.y1);
        var minDist = Math.min(dist1, dist2, dist3);
        if(minDist === 0){
          return;
        }
        minDist /= 5; // get the angle arc radius 1/5th

        var dir1 = direction(values.x1, values.y1, values.x2, values.y2);
        var dir2 = direction(values.x2, values.y2, values.x3, values.y3);
        var dir3 = direction(values.x3, values.y3, values.x1, values.y1);

        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(values.x1 + 0.5, values.y1 + 0.5);

        ctx.lineTo(values.x2 + 0.5, values.y2 + 0.5);

        ctx.lineTo(values.x3 + 0.5, values.y3 + 0.5);

        ctx.closePath();
        ctx.stroke();

        drawAngle(values.x1, values.y1, dir1, dir3);
        var angl1 = parseInt(180 - ((dir3 - dir1) * 180 / Math.PI + 360) % 360);

        ctx.fillText(angl1, values.x1 + 0.5 , values.y1 + 0.5)

        drawAngle(values.x2, values.y2, dir2, dir1);
        var angl2 = parseInt(180 - ((dir1 - dir2) * 180 / Math.PI + 360) % 360);

        ctx.fillText(angl2, values.x2 + 0.5 , values.y2 + 10 + 0.5)

        drawAngle(values.x3, values.y3, dir3, dir2);
        var angl3 = parseInt(180 - ((dir2 - dir3) * 180 / Math.PI + 360) % 360);

        ctx.fillText(angl3, values.x3 + 1 + 0.5 , values.y3 + 10 + 0.5)
    }


///////////////////// private fucntions ////////////////////
    // function to get distance
    function distance(x, y, xx, yy) {
       return Math.sqrt(Math.pow(x - xx, 2) + Math.pow(y - yy, 2) );
    }

    // function gets the direction of a line
    function direction(x, y, xx, yy) {
       var angV = Math.acos( (xx - x) / Math.sqrt( Math.pow(x - xx, 2) + Math.pow(y - yy, 2) ) );

       if (y - yy > 0) angV = - angV;

       return (angV + Math.PI * 2) % (Math.PI * 2);
    }
  }
})();
