# abbreviations-extractor

Running:

	curl http://www.who.int/classifications/ichi/en/ |\
	# lets simplify and parse markdown (or use text if you want)
	pandoc -f html -t markdown |\ 
	# TODO this is what you have to code
	abbrev-extract

Shall produce:

	...
	...
	International Classification of Procedures in Medicine (ICPM)
	Australian Modification of the International Classification of Diseases, 10th revision (ICD-10-AM)
	International Classification of Health Interventions (ICHI)
	...
	...
	...


See also <https://github.com/ainthek/nconv> for

- project structure
- test style
- view history and older commits to see how the tool has advanced in time (I want the same on this project)
- find as many real time examples for URLs and use them in tests (local copy)

## Required

To use this module, do require('readline'). Readline allows reading of a stream (such as process.stdin) on a line-by-line basis.

	$ npm install readline

(For more info visit [this page](https://nodejs.org/api/readline.html))


## Ideal format

Blah blah blah blah World Healt Organization WHO

Blah blah blah blah World Healt Organization (WHO)

blah blah exmple example World 
Healt Organization WHO 

## Issues (TODO)

1. Stream is looking for **'/n'** sign so in case the text is formatted in a wrong way program takes bigger chucks of text than it is suppose to

2. If there is a random capitalized word in a text it will be considered as abbrev. 

3. **MAIN ISSUE** if abbrev and text describing meaning of it is all written CAPITALIZED program will consider each word as abbrev. **In case** that entire sentence in text is capitalized then the sentence is not taken into consideraton. 

## Resources

https://nodejs.org/api/readline.html

https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions






