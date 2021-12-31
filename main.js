function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
  }
  
  function draw() {
    image(video, 230, 150, 220, 200)
    fill(255, 0, 0);
  stroke(255, 0, 0);

  circle(50, 50, 80);
  circle(350, 50, 80)
  circle(350, 350, 80)
  circle(50, 350, 80)

  fill(0, 128, 0);
  stroke(0, 128, 0);
  rect(90, 40, 220, 20)
  rect(90, 340, 220, 20)
  rect( 40, 90, 20, 220)
  rect( 340, 90, 20, 220)

  
  }
  





  function take_snapshot() {
      save("FRAME_IMAGE.png")
  }