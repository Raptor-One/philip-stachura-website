var allowedKeys={37:'left',38:'up',39:'right',40:'down',65:'a',66:'b'};var konamiCode=['up','up','down','down','left','right','left','right','b','a'];var konamiCodePosition=0;document.addEventListener('keydown',function(e){var key=allowedKeys[e.keyCode];var requiredKey=konamiCode[konamiCodePosition];if(key==requiredKey){konamiCodePosition++;if(konamiCodePosition==konamiCode.length){var script=document.createElement('script');script.src='.secret/easter eggs.js';document.head.appendChild(script);alert("cheats enabled");}}else
konamiCodePosition=0;});