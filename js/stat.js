'use strict';

window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect (110, 20, 420, 270);

    ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';

    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);

var max = 1;

for (var i = 0 ; i < times.length; i++ ) {
    var time = times[i];
    if (time > max) {
    max = time;
    }
}

var histogrammaHeight = 150;
var histogrammaX = 140;
var step = histogrammaHeight / max;
var columnIndent = 90;

for (var i = 0; i < times.length; i++) {
     var name = names[i];
     var time = times[i];
     var height = step * time;
     ctx.fillStyle = '#000';
     ctx.fillText(time.toFixed(0), histogrammaX + columnIndent * i, 90 + histogrammaHeight - height );
     if ( name === 'Вы') {
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(histogrammaX + columnIndent * i, 100 + histogrammaHeight - height, 40, height);
        ctx.fillStyle = '#000';
        ctx.fillText(name, histogrammaX + columnIndent * i, 100 + histogrammaHeight + 20);
     } else {
        var color = Math.floor(Math.random() * 244) + 2;
        ctx.fillStyle = 'rgba(0,0,' + color + ', '+ Math.random() +')';
        ctx.fillRect(histogrammaX + columnIndent * i, 100 + histogrammaHeight - height, 40, height);
        ctx.fillStyle = '#000';
        ctx.fillText(name, histogrammaX + columnIndent * i, 100 + histogrammaHeight + 20);
        }
    }
};
