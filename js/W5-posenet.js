"use strict";

let video
let poseNet;
let pose;
let skeleton;

function setup() {
  let canvas = createCanvas(640, 550);
  canvas.parent("container");
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw() {
  background(0);
  image(video, 0, 0);
}

function modelLoaded() {
  console.log('Loaded');
}

function gotPoses(poses) {
  console.log('Poses', poses);
};