import React from 'react'

export default function Programing() {


  return (
    <div >
        <div class="card" style={{width: "95%",margin:"50px"}}>
            <h6 style={{fontWeight:"bold",textAlign:"center",fontSize:"30px"}}>Programing</h6>
            <div style={{display:"flex",marginLeft:"250px"}}>
            <img style={{width:"380px",height:"280px",marginLeft:"10px",paddingTop:"10px"}} src="https://www.trio.dev/hubfs/Imported_Blog_Media/python_logo.jpg" class="card-img-top" alt="..."/>
  <img style={{width:"380px",height:"280px",marginLeft:"10px",paddingTop:"10px"}} src="https://prod-discovery.edx-cdn.org/media/course/image/b5f62d16-ac55-4b5f-ab39-d19dc635d158-ad1d78dfab3a.small.jpeg" alt="..."/>
  <img style={{width:"380px",height:"280px",marginLeft:"10px",paddingTop:"10px"}} src="https://www.netsolutions.com/insights/wp-content/uploads/2020/07/top-python-frameworks-for-web-development.jpg" class="card-img-top" alt="..."/>
            </div>
 
  <div class="card-body">
    <h5 style={{fontWeight:"bold"}} class="card-title">Blog: Python Introduction</h5>
    <p class="card-text">

    Python was conceived in the late 1980s[41] by Guido van Rossum at Centrum Wiskunde & Informatica (CWI) in the Netherlands as a successor to the ABC programming language, which was inspired by SETL,[42] capable of exception handling (from the start plus new capabilities in Python 3.11) and interfacing with the Amoeba operating system.[12] Its implementation began in December 1989.[43] Van Rossum shouldered sole responsibility for the project, as the lead developer, until 12 July 2018, when he announced his "permanent vacation" from his responsibilities as Python's "benevolent dictator for life", a title the Python community bestowed upon him to reflect his long-term commitment as the project's chief decision-maker.[44] In January 2019, active Python core developers elected a five-member Steering Council to lead the project.[45][46]

Python 2.0 was released on 16 October 2000, with many major new features.[47] Python 3.0, released on 3 December 2008, with many of its major features backported to Python 2.6.x[48] and 2.7.x. Releases of Python 3 include the 2to3 utility, which automates the translation of Python 2 code to Python 3.[49]

Python 2.7's end-of-life was initially set for 2015, then postponed to 2020 out of concern that a large body of existing code could not easily be forward-ported to Python 3.[50][51] No further security patches or other improvements will be released for it.[52][53] Currently only 3.7 and later are supported. In 2021, Python 3.9.2 and 3.8.8 were expedited[54] as all versions of Python (including 2.7[55]) had security issues leading to possible remote code execution[56] and web cache poisoning.[57]

In 2022, Python 3.10.4 and 3.9.12 were expedited[58] and 3.8.13, and 3.7.13, because of many security issues.[59] When Python 3.9.13 was released in May 2022, it was announced that the 3.9 series (joining the older series 3.8 and 3.7) will only receive security fixes going forward.[60] On September 7, 2022, four new releases were made due to a potential denial-of-service attack: 3.10.7, 3.9.14, 3.8.14, and 3.7.14.[61][62]

As of November 2022, Python 3.11.0 is the current stable release and among the notable changes from 3.10 are that it is 10–60% faster and significantly improved error reporting.[63]

Python 3.12 (alpha 2) has improved error messages.

Removals from Python
The deprecated smtpd module has been removed from Python 3.12 (alpha). And a number of other old, broken and deprecated functions (e.g. from unittest module), classes and methods have been removed. The deprecated wstr and wstr_ length members of the C implementation of Unicode objects were removed,[64] to make UTF-8 the default in later Python versions.

Historically, Python 3 also made changes from Python 2, e.g. changed the division operator.

Design philosophy and features
Python is a multi-paradigm programming language. Object-oriented programming and structured programming are fully supported, and many of their features support functional programming and aspect-oriented programming (including metaprogramming[65] and metaobjects).[66] Many other paradigms are supported via extensions, including design by contract[67][68] and logic programming.[69]

Python uses dynamic typing and a combination of reference counting and a cycle-detecting garbage collector for memory management.[70] It uses dynamic name resolution (late binding), which binds method and variable names during program execution.

Its design offers some support for functional programming in the Lisp tradition. It has filter,mapandreduce functions; list comprehensions, dictionaries, sets, and generator expressions.[71] The standard library has two modules (itertools and functools) that implement functional tools borrowed from Haskell and Standard ML.[72]

Its core philosophy is summarized in the document The Zen of Python (PEP 20), which includes aphorisms such as:[73]    </p>

  </div>
 </div>




 <div>
 <div class="card" style={{width: "95%",margin:"50px"}}>
            <h6 style={{fontWeight:"bold",textAlign:"center",fontSize:"30px"}}>Programing</h6>
            <div style={{display:"flex",marginLeft:"250px"}}>
            <img style={{width:"380px",height:"280px",marginLeft:"10px",paddingTop:"10px"}} src="https://miro.medium.com/max/1400/1*xdo0UBpyszvD7-7EH4TkIA.png" class="card-img-top" alt="..."/>
  <img style={{width:"380px",height:"280px",marginLeft:"10px",paddingTop:"10px"}} src="https://www.section.io/engineering-education/history-of-nodejs/nodejs-use-cases-cover-image.png" class="card-img-top" alt="..."/>
  <img style={{width:"380px",height:"280px",marginLeft:"10px",paddingTop:"10px"}} src="https://miro.medium.com/max/1400/1*ODU5V_oAmYmzvZ1wIw3rDw.png" class="card-img-top" alt="..."/>
            </div>
 
  <div class="card-body">
    <h5 style={{fontWeight:"bold"}} class="card-title">Blog: Node.js Introduction</h5>
    <p class="card-text"> What is Node.js?
Node.js is an open source server environment
Node.js is free
Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
Node.js uses JavaScript on the server
Why Node.js?
Node.js uses asynchronous programming!

A common task for a web server can be to open a file on the server and return the content to the client.

Here is how PHP or ASP handles a file request:

Sends the task to the computer's file system.
Waits while the file system opens and reads the file.
Returns the content to the client.
Ready to handle the next request.
Here is how Node.js handles a file request:

Sends the task to the computer's file system.
Ready to handle the next request.
When the file system has opened and read the file, the server returns the content to the client.
Node.js eliminates the waiting, and simply continues with the next request.

Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

What Can Node.js Do?
Node.js can generate dynamic page content
Node.js can create, open, read, write, delete, and close files on the server
Node.js can collect form data
Node.js can add, delete, modify data in your database
What is a Node.js File?
Node.js files contain tasks that will be executed on certain events
A typical event is someone trying to access a port on the server
Node.js files must be initiated on the server before having any effect
Node.js files have extension ".js"
Command Line Interface
Node.js files must be initiated in the "Command Line Interface" program of your computer.

How to open the command line interface on your computer depends on the operating system. For Windows users, press the start button and look for "Command Prompt", or simply write "cmd" in the search field.

Navigate to the folder that contains the file "myfirst.js", the command line interface window should look something like this:Initiate the Node.js File
The file you have just created must be initiated by Node.js before any action can take place.

Start your command line interface, write node myfirst.js and hit enter:


</p>

  </div>
 </div>
 </div>
    </div>
    
  )
}
