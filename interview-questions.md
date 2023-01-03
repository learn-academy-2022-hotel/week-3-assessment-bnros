# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a hybrid programming language between HTML and Javascript that is used in React. One syntax difference between HTML and JSX is that with JSX, the programmer is able to write JavaScript directly into it by using the curly braces {} whereas in HTML, you cannot.

Researched answer: JSX stands for JavaScript XML, and is technically a syntax extension to Javascipt, known as JavaScript Extension Syntax that is used within React. It is preferred to be used within React because it allows HTML and JavaScript to be easily written and used together. One major syntax difference between HTML and JSX is that in JSX, all tags are self-closing. Additionally, the self closing tags that we have in HTML can be closed with or without a forward slash, example: <br> and <br/>, vs with JSX, the forward slash is required, otherwise it will not display.

2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: Yarn stands for Yet Another Resource Negotiator, and is a package manager developed by Facebook. I am unsure what files re mofied when the user runs the command yarn in your terminal. 

Researched answer: YARN is a package manager created by Meta that stands for Yet Another Resource Negotiator, which is built off of an older package manager known as NPM which stands for for Node Package Manager. Its purpose for being created was to be used as an alternative to NPM, with major overall improvements to the security risks and performance issues that came with using NPM. Now, when it comes to running the command "yarn" in terminal, it installs all dependencies that are packaged within a package.json file, which holds importanant metadata about your current project.

3. What is a React component?

Your answer: React components are pieces of codes that can be called upon and reused over and over again. They are usually stored within a new folder that the programmer will name "components" folder under "src" when initially creating a new React application.

Researched answer: A React component is an indepedent, reusable piece of code that works similarly to that of a JavaScript function. Referred to the "building blocks" of React applications because it allows the programmer to break up the UI individual parts, and call upon them independently, and as many times needed. There are two types of components: class, and function.

4. What is the difference between state values and props in React?

Your answer: The difference between state values and props in React is that with with state, it is a variable that stores information of how a componenet behaves, whereas props are used to communicate between those components and are one directional.

Researched answer: The biggest difference between state and props in React is that although they are both JavaScript objects that hold information, only props get passed along to the component, very similiarly to how a parameter gets passed on in a function. Now with state, its compared to how a variable is declared with a function, so the React state is usually contained within the component. Props can also be changed, whereas states cannot.

5. What is the DOM?

Your answer: DOM stands for Document Object Model, and are events triggered by user interactions such as when you hover over a hyperlink, clicking a button, and typing. This is accomplished by DOM event listeners.

Researched answer: As previously mentioned, DOM stands for Document Object Model, however, it does more than just handle events. DOM is actually seperated into three parts, being: Core DOM, XML DOM, and HTML DOM. These three together defines a standard for accessing documents. What we refer to when we say "accessing documents" is that every time we load up a webpage, the browser you're using will create a DOM for the page, that will allow JavaScript to use the HTML, by doing things such as adding, changing, and/or removing the elements and attributes within the page, and even modifying the CSS on the page.

6. STRETCH: Which is the difference between a div and a span?

Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Also known as OOP, Object-oriented programming refers to a specific type of programming paradigm where classes and objects are heavily used to build upon structures to include reusable pieces of code blueprints, that will later be used to create individual instances of objects. The benefit to this is that rather than creating multiple entries with duplicated code, the programmer is able to group all the related information together which makes it easier to read and understand.

2. Ruby: Ruby is another open source programming language with an emphasis on productivity and is regarded as a simplistic language due to how easy it is to write, and how natural it is to read. Ruby was created in Japan by Yukihiro Matsumoto in 1995. It is a versatile language for use, but its most famous for web development.

3. Implicit return: An implicit return refers to when a function is returned a value without specifying the keyword "return". In Ruby, when a return is not called, it will default and return the value of the lastn return that was executed.

4. Ruby blocks: Ruby blocks are always enclosed with either using a "do/end" statements, or using curly brackets {}. They are anoynmous functions that are able to be passed into methods, containing multiple arguments that must be defined witin pipe characters ||.

5. Ruby hashes: Ruby hashes are data structures that are similiar to that of an array, however where they differ is that with an array, items are stored using an ordered index, whereas Ruby hashes stores items using associated keys.
