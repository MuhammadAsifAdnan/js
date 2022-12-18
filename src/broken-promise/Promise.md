Promises -> readability enhancer

setTimeout -> not a JS function it is a Facade Function for a web browser feature timer
fetch -> not a JS function it is also a Facade Function for the web browser to talk to the internet xhr

Promise will spawn a web browser feature and immediately return a placeholder object(Promise)
Micro-task queue / job queue -> promises are put into there. gets priority over callback queue
Callback queue -> web browser feature tasks put in there

Call stack -> functions -> spawn execution context
micro task queue -> promises -> gets priority over call back queue
call back queue -> web browser features put in there.

event loop picks micro task queue when the last piece of synchronous code has been executed. then comes call back queue.
