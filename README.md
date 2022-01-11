# calculator-v3
A practice project for a simple calculator using JS 

Report Pattern
DATE 00/00/00 HOUR XXX -> STARTING TIME
Last action:
Next fix:
Notes:

23/12/21 2am
Last action: Fix CSS for the Screen and log box, numbers appear on the logbox
Next fix: create reset functions for intro, log, values, etc.
Notes:

27/12/21 3am
Last action: New branch added, clear all function added and bound to the button.
Next: add functionality for DEL button
Notes: Re-touch and publish blogpost about 'how to remove all children from a node'

28/12/21 10pm
Last action: added functionality to equals button
Next fix: solve problem when clicking an operator after having already clicked one, implement floating point numbers
Notes: progressed today despite IBS crisis. Good job to myself.

07/01/22 2am
Last Action: implemented floating point numbers, fixed several bugs
next: see comments, and implement ways to work around repeated inputs of the dot (.) symbol  
Comments: delete console log on sucess from equals btn
fix equals button used with no value inside introbox
for some reason multiply is dividing, fix
oh my god i have improved

08/01/22 4:40pm
Comments: fix issue that allows to input a natural zero and then another positive number. this shouldn't happen when using whole numbers.
If a dot is inputed before anything else, add a zero before it
Last: added funcitonality to DOT btn
next: the implemented method has problems, for example... a result from a previous operation with a dot can be given ANOTHER dot, creating an unusable number. A fix must be implemented so before writing the DOT it must check if one exists.
Maybe that would make the current implementation unnecesary and has to be scrapped.

Additional fixes:
- removed console.log on success from the equals btn
- fixed the reason why multiply was dividing 

09/01/22 11pm
Fixed faulty implementation of the dot button. 
When inputing a dot without anything else it automatically adds a zero.
next: see previous comments, maybe decor with nice CSS for fun 

10/01/22 10:30pm
