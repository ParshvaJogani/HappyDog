class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play')
    this.buttoon = createButton('Feed');
  }
  hide(){
    this.button.hide();
    this.input.hide();
  }
  display(){ 
    this.input.position(130, 160);
    this.button.position(255, 160);
    this.buttoon.position(200,50);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();

      playerCount+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
    });

    
    this.wake = createButton('Wake')
    this.wake.position(200,20)
  
    this.sleep = createButton('Sleep')
    this.sleep.position(100,20)
  
    this.bath = createButton('Bath')
    this.bath.position(10,20)
  
    this.play = createButton('Play')
    this.play.position(372,20)
    this.play.mousePressed(()=>{
    backgroundImage(start)
    });


    this.buttoon.mousePressed(()=>{
      count = count+2;
      foodslab = foodslab - 1
      var doogy = createSprite(300,300,20,20);
      doogy.addImage(happy);
      doogy.scale = 0.2
        database.ref("/").update({
            milkCount: count
        })
    
    })
  }
};
