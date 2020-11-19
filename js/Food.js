class Food {
    constructor(){

        this.loadImage("images/Milk.png");
      var  foodStock;
      var lastFed;  

    }
    getFoodStock(){

    }

    updateFoodStock(){

    }

    deductFood(){

    }

    display(){
        fill (255,255,254);
        if(lastFed >= 12){
            text("Last Feed : 12 AM" + lastFed % 12 + "PM", 350,30); 
        }
        else if(lastFed === 0){
            text("Last Feed : 12AM",350 ,30 )
        }
        else{
            text("Last Feed : " + lastFed + "AM", 350, 30);
        }
    }
}