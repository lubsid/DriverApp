const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var candidateCount;
var form
var engine, world;
var database
var ans=[]
var correct=[]
var score =0

var gameState = 0;
var playerCount;

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
var count=0
    database = firebase.database()

    form = new Form();
    candidate = new Candidate()
    game=new Game()
    game.getState();
    candidate.getCount();

}

function draw(){
    background(255);
    text("Score : " +score, 200,50)
    form.display()
console.log(gameState)
    if(gameState===1){

        candidate.questions();
    }
    if(gameState===2){
        form.hide()
    }
    if (gameState ===3){

    }
}