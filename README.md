# calculator-v3
A practice project for a simple calculator using JS 

Report Pattern
DATE 00/00/00 HOUR XXX -> STARTING TIME
Last action:
Next fix:
Notes:


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
last fixed: fixed the app wrongfully including incomplete floating point numbers into the logboxes display (4., 1.)
next: it's technically finished. It would be worth it adding more mathematical functions in a secondary panel