// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;
let results;
let myChart;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  img = loadImage(choosen_image.src);
}

function setup() {
  classifier.classify(img, gotResult);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    document.getElementById("result-label").innerText = `Best match: ${results[0].label}`;
    document.getElementById("result-confidence").innerText = `Probability: ${Math.round(results[0].confidence * 100)} %`;
    createChart(results);
    
  }
}

choosen_image.onload = () => {
  if(classifier != null){
    if(myChart != null){
      myChart.destroy();
    }
    img = choosen_image;
    console.log("Choosen image: " + choosen_image.src);
    console.log("Img: " + img);
    classifier.predict(img, gotResult);
  }
}

function createChart(results){
  const ctx = document.getElementById('result_chart').getContext('2d');

  let labels = [];
  let confidence = [];
  results.forEach(element => {
      labels.push(element.label);
      confidence.push(element.confidence*100);
  });
  myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: labels,
          datasets: [{
              label: 'Probability (%)',
              data: confidence,
              backgroundColor: ['rgb(183, 244, 151)','rgb(217, 231, 203)','rgb(168, 239, 240)'],
              borderSkipped: false,
              hoverOffset: 4
          }]
      }
  });
}