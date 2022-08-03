## [Image Classification App](https://vquynh.github.io/image-classification/home.html)

This is a web application for classifying images using the machine learning library [ml5](https://ml5js.org).

### How to use the app
- Go to [Image Classification](https://vquynh.github.io/image-classification/home.html)
- Click on an example image or upload your own image to start classifying.
    - If you upload a file not of type image, a warning will be shown.
- The most suitable label according to the machine learning model will be shown with the corresponding probability.
- In the chart, there are three best labels with their probability. 

### How the app is built
#### ml5
The library provides access to machine learning algorithms and models in the browser, building on top of TensorFlow.js. 
In this application, the ImageClassifier class of the ml5 library is used.

```javascript
classifier = ml5.imageClassifier('MobileNet');
classifier.classify(img, gotResult);

```
 `ml5.imageClassifier()` is a method to create an object ImageClassifier that classifies an image using a pre-trained model.
 "MobileNet" model is designed to be used in mobile applications, and it is TensorFlow’s first mobile computer vision model.

#### Chart.js
[Chart.js](https://www.chartjs.org/docs/latest/) is used to visualise the classification results.

#### Images 
The example images used in this application are from [Unplash](https://unsplash.com/photos/d6u5Z6A28VI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink) and are free to use under Unplash License.

#### Github Pages
The application is hosted using [Github Pages](https://pages.github.com)
