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
            let max = 10;
            let min = 3;
            let damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.monsterHealth -= damage;
        },
        specialAttack(){

        },
        heal(){

        },
        giveUp(){

        },
    }
});