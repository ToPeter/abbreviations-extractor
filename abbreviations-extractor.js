var readline = require('readline');

var patt = /\b[A-Z]{2,}\b/g; 
var patt1 = /[a-z]/;
var previousLine = "";

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {


  if(patt.test(line) && patt1.test(line)){

    arrayOfAbbrs = line.match(patt).toString().split(',');


    for (var i = 0; i < arrayOfAbbrs.length; i++) {
      var mergedString = previousLine.concat(" "+line);
      var positionOfAbbr = mergedString.search(arrayOfAbbrs[i]);
      var subStringWhereSearch = mergedString.substring(0,positionOfAbbr);
      var sizeOfAbbr = arrayOfAbbrs[i].length;
      var duplicates = 0;

      var numberOfSpaces = 0;

 
      
        // abbr: HHH <- counts number of same letters       
        for (var n = 1; n < sizeOfAbbr; n++) {
          if(arrayOfAbbrs[i].charAt(0) === arrayOfAbbrs[i].charAt(n))duplicates++;
          };


        if (duplicates > 0){
          duplicates++;
           for (var k = subStringWhereSearch.length; k > 0; k--) {
            if (subStringWhereSearch.charAt(k) === " ")numberOfSpaces++;
            if(subStringWhereSearch.charAt(k) === arrayOfAbbrs[i].charAt(0))duplicates--;
              
              if (duplicates === 0 ){
                console.log(mergedString.substring(k,subStringWhereSearch.length+sizeOfAbbr));;
                break;
                }
              else if (numberOfSpaces > sizeOfAbbr+sizeOfAbbr/2) break;          
            };
        }

        else {
          for (var j = subStringWhereSearch.length; j > 0; j--) {
            if (subStringWhereSearch.charAt(j) === " ")numberOfSpaces++;
            if(subStringWhereSearch.charAt(j) === arrayOfAbbrs[i].charAt(0)){
              console.log(mergedString.substring(j,subStringWhereSearch.length+sizeOfAbbr));
              break;
            }
            else if (numberOfSpaces > sizeOfAbbr+sizeOfAbbr/2) break;
            
          };
        }
    };
  } 
  previousLine = line; 

})
  .on('close',function(){
    console.log("----END----");
  });