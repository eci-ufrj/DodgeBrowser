var canvasInput = document.createElement('canvas'); // compare
  canvasInput.setAttribute('width','320');
  canvasInput.setAttribute('height','240');
  var videoInput = document.getElementById('inputVideo');
  // var canvasInput = document.getElementById('inputCanvas');


  var htracker = new headtrackr.Tracker();
  htracker.init(videoInput, canvasInput);
  htracker.start();
  var x,y,error;


  canvasInput = document.createElement('canvas'); // ident
  // canvasInput.setAttribute('width',videoInput.clientWidth);
  // canvasInput.setAttribute('height',videoInput.clientHeight);
  canvasInput.setAttribute('width','320');
  canvasInput.setAttribute('height','240');
  document.body.appendChild(canvasInput);
  canvasInput.style.position = 'absolute';
  canvasInput.style.top = '9px';
  canvasInput.style.left = '9px';
  // canvasInput.style.zIndex = '1002';
  canvasInput.style.display = 'block';
  var canvasCtx = canvasInput.getContext('2d');
  canvasCtx.strokeStyle = "#999";
  canvasCtx.lineWidth = 9;

  var drawIdent = function(cContext,x,y) {

    // normalise values
    x = (x/320)*canvasInput.width;
    y = (y/240)*canvasInput.height;

    // flip horizontally
    // x = canvasInput.width - x;

    // clean canvas
    cContext.clearRect(0,0,canvasInput.width,canvasInput.height);

    // draw rectangle around canvas
    cContext.strokeRect(0,0,canvasInput.width,canvasInput.height);

    // draw marker, from x,y position
    cContext.beginPath();
    cContext.moveTo(x-10,y);
    cContext.lineTo(x+10,y);
    cContext.closePath();
    cContext.stroke();

    cContext.beginPath();
    cContext.moveTo(x,y-10);
    cContext.lineTo(x,y+10);
    cContext.closePath();
    cContext.stroke();

    camera.position.x = (-1)*x/320*scene_width + scene_x_max;
    camera.position.y = (-1)*y/240*scene_height + scene_y_max;
};

  error = 10;