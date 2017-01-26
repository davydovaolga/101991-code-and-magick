'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = 1;

  for (var i = 0; i < times.length; i++) {
    var maxTime = times[i];
    if (time > max) {
      max = maxTime;
    }
  }

  var histogramaHeight = 150;
  var histogramaX = 140;
  var step = histogramaHeight / max;
  var columnIndent = 90;

  for (var j = 0; j < times.length; j++) {
    var name = names[j];
    var time = times[j];
    var height = step * time;
    ctx.fillStyle = '#000';
    ctx.fillText(time.toFixed(0), histogramaX + columnIndent * j, 90 + histogramaHeight - height);
    ctx.fillStyle = '#000';
    ctx.fillText(name, histogramaX + columnIndent * j, 100 + histogramaHeight + 20);
    if (name === 'Вы') {
      ctx.fillStyle = '#FF0000';
    } else {
      var color = Math.floor(Math.random() * 244) + 2;
      ctx.fillStyle = 'rgba(0,0,' + color + ', ' + Math.random() + ')';
    }
    ctx.fillRect(histogramaX + columnIndent * j, 100 + histogramaHeight - height, 40, height);
  }
};
