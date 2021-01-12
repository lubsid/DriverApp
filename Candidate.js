class Candidate{

constructor(){

    this.name = null
    this.score = 0
    this.time = 0
    this.count=0
  

}
getCount(){
    var playerCountRef = database.ref('candidateCount');
    playerCountRef.on("value",(data)=>{
      candidateCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      candidateCount: count
    });
  }

update(){


    var canIndex = "candidates/candidate"+ candidateCount
    database.ref(canIndex).set({

        name: this.name
    })
}


questions(){
    gameState=2;
    var ele1 = createElement('h3');
    var button1= createRadio();
    button1.position(100,200)

    this.count=this.count+1
    console.log("the count:"+this.count)
    switch(this.count){

case 1 :
  ele1.html("What is the minimum age for driving a motorcycle without gear?")
  ele1.position(150, 150)
button1.option("16 years")
button1.option("18 years")
button1.option("21 years")

correct[this.count] = "16 years"
break;
case 2:
  ele1.html("What should you do when you see a traffic sign of a school nearby?")
  ele1.position(150, 150)


button1.option("Stop the vehicle")
button1.option("Slow down and proceed carefully")
button1.option("Press horn and proceed in the same speed")

correct[this.count]="Slow down and proceed carefully"
break;
case 3:
  ele1.html("Before you overtake a vehicle what should you keep in mind?")
  ele1.position(150, 150)


button1.option("The road ahead should be clearly visible and overtaking should be safe");
button1.option("The road is not safe");
button1.option("There are no vehicles ahead");

correct[this.count]="The road ahead should be clearly visible and overtaking should be safe"
break;

default:text("Add more quest",100,100)
break;
}
//correct[this.count]="Hi"
var submitButton= createButton("Submit")
submitButton.position(150,230)


submitButton.mousePressed(()=>{
    
  ans[this.count]=button1.value()
   console.log("Your and is: "+ans) 
  ele1.hide()
   button1.hide()
  submitButton.hide()
  for(var i=0;i<21;i++){
   if(correct[i]===ans[i]){
    score= score +20
    console.log(score)
    gameState=1
  }
}

})




}
}