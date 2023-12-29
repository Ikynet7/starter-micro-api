const mineflayer = require('mineflayer')
const fs = require('fs');

const { keep_alive } = require("./keep_alive");/*
let rawdata = fs.readFileSync('config.json');
let data = JSON.parse(rawdata);
var host = data["ip"];
var username = data["name"]

const bot =
  mineflayer.createBot({
  host: 'main.phoenix-bird.my.id',
  port: '17561',
  username: 'jokowi',
  verbose: true
})
    
    
function getRandomArbitrary(min, max) {
       return Math.random() * (max - min) + min;

}
bot.on('login',function(){
	console.log("Logged In")
});


bot.on('spawn',function() {
    connected=1;
});
bot.on('death',function() {
    bot
});
bot.on('error',function() {
    bot.on("login")
});
bot.on('end',function() {
    bot.on("login")
});
bot.on('quit',function() {
    bot.on("login")
});
bot.on('death',function() {
    bot.on("respawn")
});
*/

var lasttime = -1;
var moving = 0;
var connected = 0;
var actions = [ 'forward', 'back', 'left', 'right']
var lastaction;
var pi = 3.14159;
var moveinterval = 2; // 2 second movement interval
var maxrandom = 5; // 0-5 seconds added to movement interval (randomly)

  function createBot1 () {
      console.log(`\nLogin.....\n`)
  const bot = mineflayer.createBot({
    host: 'ikynet7.aternos.me',
    port: '17561',
    username: 'botgg_1',
      version: '1.12.2'
      
  });
bot.on('spawn', function() {
    if (connected <1) {
        return;
    }
    if (lasttime<0) {
        lasttime = bot.time.age;
    } else {
        var randomadd = Math.random() * maxrandom * 20;
        var interval = moveinterval*20 + randomadd;
        if (bot.time.age - lasttime > interval) {
            if (moving == 1) {
                bot.setControlState(lastaction,false);
                moving = 0;
                lasttime = bot.time.age;
            } else {
                var yaw = Math.random()*pi - (0.5*pi);
                var pitch = Math.random()*pi - (0.5*pi);
                bot.look(yaw,pitch,false);
                lastaction = actions[Math.floor(Math.random() * actions.length)];
                bot.setControlState(lastaction,true);
                moving = 1;
                lasttime = bot.time.age;
                bot.activateItem();
            }
        }
    }
});/*
  bot.on('end', createBot1);
  bot.on('kicked', createBot1);*/
  bot.on('error', createBot1);
  bot.on('end', createBot1);

  /*bot.on('quit', createBot1);
      }
     
  */}
createBot1()
/*
function reconnect () {
    setTimeout(() => {
        createBot1();
}, 10000);
    return
}
*/
