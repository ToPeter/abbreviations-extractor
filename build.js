var readline = require('readline');

var patt = /\b[A-Z]+\b/;
var previousLine = "";

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {

  if(patt.test(line) && line.match(patt).toString().length != 1 ){

    
    var patt1 = /\b[A-Z]+\b/g;

    if (line.match(patt1).length > 1) {
      
      while (patt1.test(line)==true) 
      {
        console.log("index"+patt1.lastIndex)

      }
    };

    // TO-FINISH: check how many capital-letter words are in line
    //if(line.match(/\b[A-Z]+\b/g).length > 1) console.log(line.match(/\b[A-Z]+\b/g).length);
    // while (line.match(/\b[A-Z]+\b/g).length > 0){  countOfShortcuts--}
    
    var mergedString = previousLine.concat(" "+line);
    var sizeOfPreviousLine = previousLine.length;
    var lenghtOfShortcut = line.match(patt).toString().length;
    var firstCharacterValue = line.match(patt).toString().charAt(0);
    var firstCharacterPosition = sizeOfPreviousLine + line.match(patt).index;
    var lastCharacterPosition = firstCharacterPosition + lenghtOfShortcut;
    var duplicates = 0;

    //check # of duplicates
    while (lenghtOfShortcut > 0){
      if(firstCharacterValue === line.match(patt).toString().charAt(lenghtOfShortcut))duplicates++;    
      lenghtOfShortcut--;
    }

    if (duplicates === 0){
      for (var i = firstCharacterPosition; i > 0; i--) {
        if (mergedString.charAt(i)===firstCharacterValue){
          console.log(mergedString.substring(i,lastCharacterPosition+1));
        };

      };
    }

      else {
         for (var i = firstCharacterPosition; i > 0; i--) {
        if (mergedString.charAt(i)===firstCharacterValue){
          duplicates--;
          if (duplicates === 0)console.log(mergedString.substring(i,lastCharacterPosition+1));;
          
          };

        };
      }; 


    //console.log(line.match(patt).toString()); 
     







    //TODO: refactor for switch ? 

    //TODO: refactor so all shortcuts are takin into consideration (if more than 1)
    // check how many capital-letter words are in line
      // original: line.match(/\b[A-Z]+\b/g) || []) <-- not sure about '|| []' ?!?
    
     //if(line.match(/\b[A-Z]+\b/g).length > 1) console.log(line.match(/\b[A-Z]+\b/g).length);

    //console.log(line.match(patt).toString()+"\t"+line+"\t"+ previousLine +"\n");


  

}
  previousLine = line; 

})
  .on('close',function(){
    console.log("END");
  });