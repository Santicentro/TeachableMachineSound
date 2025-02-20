  // Global variable to store the classifier
  let classifier;

  // Label
  let label = 'listening...';
  
  // Teachable Machine model URL:
  let soundModel = 'https://teachablemachine.withgoogle.com/models/Yii1N_Mwb/';

  //NOTA: en el ruido de fondo utilice la canción subwoofer Lullaby de C148, osea el sonido de minecraft para que el fondo no fuer los silencios
  
  
  function preload() {
    let options = { probabilityThreshold: 0.7 };
    // Load the model
    classifier = ml5.soundClassifier(soundModel + 'model.json',options);
  }
  
  function setup() {
    createCanvas(320, 240);
    // Start classifying
    // The sound model will continuously listen to the microphone
    classifier.classifyStart(gotResult);
  }
  
  function draw() {
    background(0);
    // Draw the label in the canvas
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(label, width / 2, height / 2);
  }
  
// Callback function for when classification has finished
function gotResult(results) {
    // Update label variable which is displayed on the canvas
    label = results[0].label;
  }