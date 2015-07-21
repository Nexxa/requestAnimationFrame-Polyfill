// Adapted from https://gist.github.com/paulirish/1579671 which derived from 
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// 
// Original requestAnimationFrame polyfill by Erik Möller.
// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon

/**
 * @file requestAnimationFrame Polyfill
 * @author Erik Möller <https://github.com/darius>, Nexxa <nexxa.developer@gmail.com>
 */


(function(win) {
  
  'use strict';

  if (!Date.now) {
    Date.now = function() {
      return new Date().getTime();
    };
  }
  
  var vendors = ['webkit', 'moz'],
      i = 0,
      l = vendors.length,
      vp;
  
  for (; i < l && !win.requestAnimationFrame; ++i) {
    vp = vendors[i];
    
    win.requestAnimationFrame = win[vp + 'RequestAnimationFrame'];
    win.cancelAnimationFrame = (win[vp + 'CancelAnimationFrame'] || win[vp + 'CancelRequestAnimationFrame']);
  }
  
  if (/iP(ad|hone|od).*OS 6/.test(win.navigator.userAgent) || !win.requestAnimationFrame || !win.cancelAnimationFrame) { // iOS6 is buggy
    var lastTime = 0;
    
    win.requestAnimationFrame = function(callback) {
      var now = Date.now(),
          nextTime = Math.max(lastTime + 16, now);
          
      return setTimeout(function() {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };
    
    win.cancelAnimationFrame = clearTimeout;
  }
  
})(window);
