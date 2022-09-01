var person = require("./lib/clilib");

var muhammed = new person("Muhammed Essa");
var ahmed = new person("Ahmed Osama");

muhammed.on('says',function(said){
    console.log(`${this.name} -> ${said}`);
});

ahmed.on('says',function(said){
    console.log(`${this.name} -> ${said}`);
});
muhammed.emit('says','hi my name is Muahmmed Essa.');
muhammed.emit('says','hi my name is Ahmed Osama.');