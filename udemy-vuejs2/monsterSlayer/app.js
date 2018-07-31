new Vue({
    el: '#app',
    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
    },
    methods:{
        startGame(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack(){
            this.monsterHealth -= this.calculateDamage(3,10);
            this.monsterAttach();
        },
        specialAttack(){
            this.monsterHealth -= this.calculateDamage(10,20);
            this.monsterAttach();
        },
        heal(){
            if(this.playerHealth < 90){ this.playerHealth += 10; }
            this.monsterAttach();
        },
        giveUp(){
            this.gameIsRunning = false;
        },
        monsterAttach(){
            this.playerHealth -= this.calculateDamage(5,15);
            if(this.checkWin()){ return; }
        },
        calculateDamage(min,max){
            return damage = Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin(){
            if (this.monsterHealth <= 0){
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});