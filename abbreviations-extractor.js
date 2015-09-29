var stdin = process.openStdin();

var data = "";

stdin.on('data', function(chunk) {
  data += chunk;
});

stdin.on('end', function() {

  //TODO check: not sure if .toString() is needed
  var allData = data.toString();

 var x=0;
 var openParenthesis = "(";


 while (x <= allData.length){ 

  var curentValue = allData.charAt(x);
  if (curentValue.valueOf() === openParenthesis.valueOf()){
    var j=0;
    var closeParenthesis = ")";
    var inBrackets ="";

    while(allData.charAt(x+j).valueOf() !== closeParenthesis.valueOf())j++;
    var sizeOfShortcut = j--;
    for (var k = 1; k < sizeOfShortcut; k++) {
        var symbolFromBrackets = allData.charAt(x+k);
        // TODO: REFACTOR !!! + checks ONLY abbreviations with capital letters 

            if (symbolFromBrackets === symbolFromBrackets.toUpperCase() && symbolFromBrackets !== "#" 
                && symbolFromBrackets !== "/" && symbolFromBrackets !== "."){
                inBrackets += symbolFromBrackets;
            }
            else break; 

    };

        if (inBrackets){
            

            //Code which checks duplicates in entire word
            //var hasDuplicates = (/([a-zA-Z]).*?\1/).test(inBrackets);

            var numOfDuplicates = 1;
            var u = 0;

            for (var n = 1; n < inBrackets.length; n++) {
                if (inBrackets.charAt(0).valueOf() === inBrackets.charAt(n).valueOf())numOfDuplicates++;
            };

            if(numOfDuplicates > 1){
                // TODO: refactor + better wildcat check
                for (var h = 0; h < numOfDuplicates; h++) {
                 while(allData.charAt(x-u).valueOf() !== inBrackets.charAt(0).valueOf() 
                      && allData.charAt(x-u).valueOf() !== "[")u++;
                        u++;
                };
                    console.log(allData.substring(x-u,x+sizeOfShortcut+1));

            }
            
                else{
                        var u = 0;
                        // TODO: refactor + better wildcat check
                        while(allData.charAt(x-u).valueOf() !== inBrackets.charAt(0).valueOf() 
                              && allData.charAt(x-u).valueOf() !== "[" )u++;
                            var result = allData.substring(x-u,x+sizeOfShortcut+1)
                            //TODO: better check for formate errors
                            console.log(result.replace(/(\r\n|\n|\r)/gm,""));

                    }    
        };
             
  } 
  x++;
}

});
