/**
 * Final Assessment Quiz - 100 Verified Questions
 * Ashri Tech Course Examination
 * Topics: Figma, Dart, Android, Flutter, Git & GitHub, Swift, Programming Basics, HTML & CSS
 */

const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "section": "Programming Basics",
    "question": "What is a variable in programming?",
    "options": [
      "A fixed value that never changes",
      "A named container used to store data",
      "A type of loop",
      "A programming language"
    ],
    "answer": "A named container used to store data"
  },
  {
    "id": 2,
    "section": "Programming Basics",
    "question": "Which of these is NOT a common data type in most programming langu ages?",
    "options": [
      "Integer",
      "String",
      "Boolean",
      "Website"
    ],
    "answer": "Website"
  },
  {
    "id": 3,
    "section": "Programming Basics",
    "question": "What does a loop allow a program to do?",
    "options": [
      "Store multiple files",
      "Repeat a block of code multiple times",
      "Connect to the internet",
      "Delete variables"
    ],
    "answer": "Repeat a block of code multiple times"
  },
  {
    "id": 4,
    "section": "Programming Basics",
    "question": "What is the purpose of a function (or method) in programming?",
    "options": [
      "To style a webpage",
      "To group reusable code that performs a specific task",
      "To store images",
      "To connect to a database only"
    ],
    "answer": "To group reusable code that performs a specific task"
  },
  {
    "id": 5,
    "section": "Programming Basics",
    "question": "What does \"debugging\" mean?",
    "options": [
      "Writing new code from scratch",
      "Finding and fixing errors in code",
      "Deleting a program",
      "Installing new software"
    ],
    "answer": "Finding and fixing errors in code"
  },
  {
    "id": 6,
    "section": "Programming Basics",
    "question": "Which symbol is commonly used for a single-line comment in C-style languages (Dart, Java, JavaScript)?",
    "options": [
      "#",
      "//",
      "<!-- -->",
      "**"
    ],
    "answer": "//"
  },
  {
    "id": 7,
    "section": "Programming Basics",
    "question": "What is an \"algorithm\"?",
    "options": [
      "A programming language",
      "A step-by-step set of instructions to solve a problem",
      "A type of computer hardware",
      "A database table"
    ],
    "answer": "A step-by-step set of instructions to solve a problem"
  },
  {
    "id": 8,
    "section": "Programming Basics",
    "question": "What does a \"syntax error\" mean?",
    "options": [
      "The logic is wrong but it still runs",
      "The code violates the rules of the programming language",
      "The internet connection is down",
      "The program runs too slowly"
    ],
    "answer": "The code violates the rules of the programming language"
  },
  {
    "id": 9,
    "section": "Programming Basics",
    "question": "In programming, what is a \"Boolean\" value?",
    "options": [
      "A number with decimals",
      "True or False",
      "A single character",
      "A list of items"
    ],
    "answer": "True or False"
  },
  {
    "id": 10,
    "section": "Programming Basics",
    "question": "What does IDE stand for?",
    "options": [
      "Internet Data Exchange",
      "Integrated Development Environment",
      "Internal Design Element",
      "Interface Design Engine"
    ],
    "answer": "Integrated Development Environment"
  },
  {
    "id": 11,
    "section": "Programming Basics",
    "question": "Which best describes \"object-oriented programming\"?",
    "options": [
      "Programming using only functions, no data",
      "Organizing code around objects that combine data and behavior",
      "Writing code without any structure",
      "A way to design websites only"
    ],
    "answer": "Organizing code around objects that combine data and behavior"
  },
  {
    "id": 12,
    "section": "Programming Basics",
    "question": "What is version control used for?",
    "options": [
      "Formatting text documents",
      "Tracking changes to code over time and collaborating with others",
      "Compressing image files",
      "Designing app icons"
    ],
    "answer": "Tracking changes to code over time and collaborating with others"
  },
  {
    "id": 13,
    "section": "Dart",
    "question": "Which keyword declares a variable whose type Dart infers automatically?",
    "options": [
      "var",
      "int",
      "static",
      "void"
    ],
    "answer": "var"
  },
  {
    "id": 14,
    "section": "Dart",
    "question": "Which is the correct way to declare a constant that never changes in Dart?",
    "options": [
      "var",
      "final or const",
      "static",
      "dynamic"
    ],
    "answer": "final or const"
  },
  {
    "id": 15,
    "section": "Dart",
    "question": "What happens with: print(5 + \"5\");",
    "options": [
      "Prints 10",
      "Prints \"55\"",
      "Compile-time error",
      "Prints 5.5"
    ],
    "answer": "Compile-time error"
  },
  {
    "id": 16,
    "section": "Dart",
    "question": "What is the correct entry-point function in every Dart program?",
    "options": [
      "start()",
      "main()",
      "run()",
      "init()"
    ],
    "answer": "main()"
  },
  {
    "id": 17,
    "section": "Dart",
    "question": "Which loop guarantees the loop body executes at least once?",
    "options": [
      "for",
      "while",
      "do-while",
      "for-in"
    ],
    "answer": "do-while"
  },
  {
    "id": 18,
    "section": "Dart",
    "question": "What does this print? for (int i = 0; i < 3; i++) { print(i); }",
    "options": [
      "0 1 2",
      "1 2 3",
      "0 1 2 3",
      "1 2"
    ],
    "answer": "0 1 2"
  },
  {
    "id": 19,
    "section": "Dart",
    "question": "How do you access the first element of List<String> fruits?",
    "options": [
      "fruits.first()",
      "fruits[0]",
      "fruits(0)",
      "fruits.get(0)"
    ],
    "answer": "fruits[0]"
  },
  {
    "id": 20,
    "section": "Dart",
    "question": "What is a \"class\" in Dart used for?",
    "options": [
      "Styling text",
      "A blueprint for creating objects with properties and methods",
      "Running the app",
      "Making network requests"
    ],
    "answer": "A blueprint for creating objects with properties and methods"
  },
  {
    "id": 21,
    "section": "Dart",
    "question": "Which keyword creates a child class that inherits from a parent class?",
    "options": [
      "implements",
      "extends",
      "inherits",
      "with"
    ],
    "answer": "extends"
  },
  {
    "id": 22,
    "section": "Dart",
    "question": "Which correctly creates an object from a class named Car in modern Dart?",
    "options": [
      "Car c = new Car();",
      "Car c = Car();",
      "Both A and B are valid",
      "Neither is valid"
    ],
    "answer": "Both A and B are valid"
  },
  {
    "id": 23,
    "section": "Dart",
    "question": "What does null safety in Dart help prevent?",
    "options": [
      "Slow performance",
      "Accidentally assigning null where it shouldn't be allowed",
      "Syntax errors",
      "Memory leaks only"
    ],
    "answer": "Accidentally assigning null where it shouldn't be allowed"
  },
  {
    "id": 24,
    "section": "Dart",
    "question": "What does the .add() method do on a List?",
    "options": [
      "Adds two lists together",
      "Adds a new item to the end of the list",
      "Adds up all numbers in the list",
      "Removes the last item"
    ],
    "answer": "Adds a new item to the end of the list"
  },
  {
    "id": 25,
    "section": "Dart",
    "question": "What does Future<T> represent in Dart?",
    "options": [
      "A value available immediately",
      "A value that will be available at some point (asynchronous)",
      "A fixed constant",
      "A type of loop"
    ],
    "answer": "A value that will be available at some point (asynchronous)"
  },
  {
    "id": 26,
    "section": "Flutter",
    "question": "What is the base building block of every Flutter UI?",
    "options": [
      "Activity",
      "Widget",
      "Component",
      "Fragment"
    ],
    "answer": "Widget"
  },
  {
    "id": 27,
    "section": "Flutter",
    "question": "What is the key difference between StatelessWidget and StatefulWidget?",
    "options": [
      "StatelessWidget is never used in real apps",
      "StatefulWidget can hold and update mutable state; StatelessWidget cannot",
      "StatelessWidget can use setState()",
      "There is no real difference"
    ],
    "answer": "StatefulWidget can hold and update mutable state; StatelessWidget cannot"
  },
  {
    "id": 28,
    "section": "Flutter",
    "question": "Which widget arranges its children horizontally?",
    "options": [
      "Column",
      "Row",
      "Stack",
      "Container"
    ],
    "answer": "Row"
  },
  {
    "id": 29,
    "section": "Flutter",
    "question": "Which widget overlaps widgets on top of each other?",
    "options": [
      "Row",
      "Column",
      "Stack",
      "ListView"
    ],
    "answer": "Stack"
  },
  {
    "id": 30,
    "section": "Flutter",
    "question": "What does setState() do?",
    "options": [
      "Deletes the current widget",
      "Tells Flutter that data changed and the UI should rebuild",
      "Creates a new app",
      "Stops the app"
    ],
    "answer": "Tells Flutter that data changed and the UI should rebuild"
  },
  {
    "id": 31,
    "section": "Flutter",
    "question": "Which widget efficiently builds list items only as they scroll into view?",
    "options": [
      "ListView",
      "ListView.builder",
      "Column",
      "GridView (without builder)"
    ],
    "answer": "ListView.builder"
  },
  {
    "id": 32,
    "section": "Flutter",
    "question": "What does the Expanded widget do inside a Row or Column?",
    "options": [
      "Makes the whole app full screen",
      "Fills the remaining available space",
      "Adds padding",
      "Changes the widget's color"
    ],
    "answer": "Fills the remaining available space"
  },
  {
    "id": 33,
    "section": "Flutter",
    "question": "Which widget provides the page skeleton (AppBar, body, FAB, drawer)?",
    "options": [
      "Container",
      "MaterialApp",
      "Scaffold",
      "Widget"
    ],
    "answer": "Scaffold"
  },
  {
    "id": 34,
    "section": "Flutter",
    "question": "In GetX, what is the purpose of a Binding?",
    "options": [
      "To style widgets",
      "To register/create a Controller before its page is built",
      "To connect to the internet",
      "To draw the UI"
    ],
    "answer": "To register/create a Controller before its page is built"
  },
  {
    "id": 35,
    "section": "Flutter",
    "question": "What does .obs make a variable in GetX?",
    "options": [
      "Immutable",
      "Observable — widgets watching it rebuild automatically when it changes",
      "Private",
      "A constant"
    ],
    "answer": "Observable — widgets watching it rebuild automatically when it changes"
  },
  {
    "id": 36,
    "section": "Flutter",
    "question": "Which package is commonly used for the BLoC pattern in Flutter?",
    "options": [
      "provider",
      "flutter_bloc",
      "get",
      "riverpod"
    ],
    "answer": "flutter_bloc"
  },
  {
    "id": 37,
    "section": "Flutter",
    "question": "What is the purpose of pubspec.yaml in a Flutter project?",
    "options": [
      "Stores the app's UI code",
      "Declares the project's dependencies, assets, and metadata",
      "Is the main entry point of the app",
      "Stores user data"
    ],
    "answer": "Declares the project's dependencies, assets, and metadata"
  },
  {
    "id": 38,
    "section": "Flutter",
    "question": "Which widget makes a scrollable grid of items?",
    "options": [
      "ListView",
      "Row",
      "GridView.builder",
      "Column"
    ],
    "answer": "GridView.builder"
  },
  {
    "id": 39,
    "section": "Android Development",
    "question": "What is an \"Activity\" in native Android development?",
    "options": [
      "A background service only",
      "A single, focused screen with a user interface",
      "A database table",
      "A type of animation"
    ],
    "answer": "A single, focused screen with a user interface"
  },
  {
    "id": 40,
    "section": "Android Development",
    "question": "Which file defines an Android app's permissions and components?",
    "options": [
      "build.gradle",
      "AndroidManifest.xml",
      "MainActivity.java",
      "styles.xml"
    ],
    "answer": "AndroidManifest.xml"
  },
  {
    "id": 41,
    "section": "Android Development",
    "question": "What language(s) are traditionally used for native Android development?",
    "options": [
      "Swift and Objective-C",
      "Java and Kotlin",
      "HTML and CSS",
      "Dart only"
    ],
    "answer": "Java and Kotlin"
  },
  {
    "id": 42,
    "section": "Android Development",
    "question": "What is the Android emulator used for?",
    "options": [
      "Compiling code faster",
      "Simulating an Android device on your computer for testing",
      "Publishing apps to the Play Store",
      "Designing app icons"
    ],
    "answer": "Simulating an Android device on your computer for testing"
  },
  {
    "id": 43,
    "section": "Android Development",
    "question": "What is Gradle used for in Android development?",
    "options": [
      "Designing UI layouts",
      "Building and managing project dependencies",
      "Writing unit tests only",
      "Debugging network requests"
    ],
    "answer": "Building and managing project dependencies"
  },
  {
    "id": 44,
    "section": "Android Development",
    "question": "Where do you upload an app to make it available on Android phones publicly?",
    "options": [
      "App Store Connect",
      "Google Play Console",
      "GitHub",
      "Firebase Console"
    ],
    "answer": "Google Play Console"
  },
  {
    "id": 45,
    "section": "Android Development",
    "question": "What does APK stand for?",
    "options": [
      "Android Package Kit",
      "Application Programming Key",
      "Android Programming Kernel",
      "App Publishing Kit"
    ],
    "answer": "Android Package Kit"
  },
  {
    "id": 46,
    "section": "Android Development",
    "question": "What is the purpose of an Android layout XML file?",
    "options": [
      "To store app logic",
      "To define the visual structure of a screen",
      "To manage permissions",
      "To connect to a server"
    ],
    "answer": "To define the visual structure of a screen"
  },
  {
    "id": 47,
    "section": "Android Development",
    "question": "\"Logcat\" in Android Studio is used for:",
    "options": [
      "Designing layouts visually",
      "Viewing real-time system and app log messages for debugging",
      "Managing app permissions",
      "Compiling the app"
    ],
    "answer": "Viewing real-time system and app log messages for debugging"
  },
  {
    "id": 48,
    "section": "Android Development",
    "question": "Which of these is a common Android app lifecycle method?",
    "options": [
      "onCreate()",
      "onPaint()",
      "onCompile()",
      "onDesign()"
    ],
    "answer": "onCreate()"
  },
  {
    "id": 49,
    "section": "Android Development",
    "question": "What is the minimum SDK version setting used for?",
    "options": [
      "It sets the app's icon",
      "It defines the oldest Android version the app will support",
      "It sets the app's price",
      "It defines the app's color scheme"
    ],
    "answer": "It defines the oldest Android version the app will support"
  },
  {
    "id": 50,
    "section": "Android Development",
    "question": "What tool is commonly used to write and build native Android apps?",
    "options": [
      "Xcode",
      "Android Studio",
      "Visual Studio (only)",
      "Figma"
    ],
    "answer": "Android Studio"
  },
  {
    "id": 51,
    "section": "Git & GitHub",
    "question": "What is Git?",
    "options": [
      "A cloud hosting website",
      "A version control tool installed on your computer",
      "A programming language",
      "A design tool"
    ],
    "answer": "A version control tool installed on your computer"
  },
  {
    "id": 52,
    "section": "Git & GitHub",
    "question": "What is GitHub?",
    "options": [
      "The same thing as Git",
      "A cloud platform for hosting Git repositories and collaboration",
      "A code editor",
      "A mobile app framework"
    ],
    "answer": "A cloud platform for hosting Git repositories and collaboration"
  },
  {
    "id": 53,
    "section": "Git & GitHub",
    "question": "Which command turns a folder into a Git-tracked project?",
    "options": [
      "git start",
      "git init",
      "git create",
      "git new"
    ],
    "answer": "git init"
  },
  {
    "id": 54,
    "section": "Git & GitHub",
    "question": "Which command stages a file, marking it ready to be committed?",
    "options": [
      "git save",
      "git add",
      "git stage",
      "git commit"
    ],
    "answer": "git add"
  },
  {
    "id": 55,
    "section": "Git & GitHub",
    "question": "What does git commit -m \"message\" do?",
    "options": [
      "Uploads code to GitHub",
      "Takes a permanent snapshot of staged changes with a description",
      "Deletes old commits",
      "Creates a new branch"
    ],
    "answer": "Takes a permanent snapshot of staged changes with a description"
  },
  {
    "id": 56,
    "section": "Git & GitHub",
    "question": "What does git push do?",
    "options": [
      "Downloads commits from GitHub",
      "Uploads your local commits to GitHub",
      "Deletes a branch",
      "Merges two branches"
    ],
    "answer": "Uploads your local commits to GitHub"
  },
  {
    "id": 57,
    "section": "Git & GitHub",
    "question": "What does git pull do?",
    "options": [
      "Uploads local changes",
      "Downloads and merges new commits from a remote repository",
      "Deletes the local repository",
      "Creates a new file"
    ],
    "answer": "Downloads and merges new commits from a remote repository"
  },
  {
    "id": 58,
    "section": "Git & GitHub",
    "question": "What is a \"branch\" in Git?",
    "options": [
      "A backup of the entire GitHub account",
      "An independent line of development you can work on without affecting main",
      "A type of commit message",
      "A file extension"
    ],
    "answer": "An independent line of development you can work on without affecting main"
  },
  {
    "id": 59,
    "section": "Git & GitHub",
    "question": "Which command creates and switches to a new branch in one step?",
    "options": [
      "git branch -new",
      "git checkout -b branchname",
      "git switch -create",
      "git new branchname"
    ],
    "answer": "git checkout -b branchname"
  },
  {
    "id": 60,
    "section": "Git & GitHub",
    "question": "What is a Pull Request (PR) used for?",
    "options": [
      "Deleting a repository",
      "Proposing changes from one branch to be reviewed and merged into another",
      "Downloading a repository",
      "Renaming a file"
    ],
    "answer": "Proposing changes from one branch to be reviewed and merged into another"
  },
  {
    "id": 61,
    "section": "Git & GitHub",
    "question": "What does git clone do?",
    "options": [
      "Deletes a repository",
      "Copies a remote repository to your local computer",
      "Combines two files",
      "Creates a backup of a single file"
    ],
    "answer": "Copies a remote repository to your local computer"
  },
  {
    "id": 62,
    "section": "Git & GitHub",
    "question": "What command shows which remote a local repo is connected to?",
    "options": [
      "git status",
      "git remote -v",
      "git log",
      "git branch"
    ],
    "answer": "git remote -v"
  },
  {
    "id": 63,
    "section": "Git & GitHub",
    "question": "What is the purpose of a .gitignore file?",
    "options": [
      "To list files Git should track only",
      "To tell Git which files/folders to NOT track",
      "To store commit messages",
      "To store passwords"
    ],
    "answer": "To tell Git which files/folders to NOT track"
  },
  {
    "id": 64,
    "section": "Swift",
    "question": "What is Swift primarily used for?",
    "options": [
      "Android app development",
      "iOS, iPadOS, and macOS app development",
      "Web page styling",
      "Database management"
    ],
    "answer": "iOS, iPadOS, and macOS app development"
  },
  {
    "id": 65,
    "section": "Swift",
    "question": "Which company created the Swift programming language?",
    "options": [
      "Google",
      "Microsoft",
      "Apple",
      "Amazon"
    ],
    "answer": "Apple"
  },
  {
    "id": 66,
    "section": "Swift",
    "question": "Which keyword declares a constant in Swift (a value that cannot change)?",
    "options": [
      "var",
      "let",
      "const",
      "final"
    ],
    "answer": "let"
  },
  {
    "id": 67,
    "section": "Swift",
    "question": "Which keyword declares a variable in Swift (a value that can change)?",
    "options": [
      "var",
      "let",
      "static",
      "def"
    ],
    "answer": "var"
  },
  {
    "id": 68,
    "section": "Swift",
    "question": "What is the primary IDE used for Swift/iOS development?",
    "options": [
      "Android Studio",
      "Xcode",
      "Visual Studio",
      "IntelliJ IDEA"
    ],
    "answer": "Xcode"
  },
  {
    "id": 69,
    "section": "Swift",
    "question": "What UI framework is used for modern, declarative iOS app development with Swift?",
    "options": [
      "UIKit only",
      "SwiftUI",
      "Flutter",
      "Jetpack Compose"
    ],
    "answer": "SwiftUI"
  },
  {
    "id": 70,
    "section": "Swift",
    "question": "What does \"optional\" mean in Swift (e.g., String?)?",
    "options": [
      "The variable is always required",
      "The variable may hold a value or be nil (no value)",
      "The variable is a constant",
      "The variable is a function"
    ],
    "answer": "The variable may hold a value or be nil (no value)"
  },
  {
    "id": 71,
    "section": "Swift",
    "question": "Where do you publish an iOS app to make it available to the public?",
    "options": [
      "Google Play Console",
      "App Store Connect",
      "GitHub",
      "Firebase"
    ],
    "answer": "App Store Connect"
  },
  {
    "id": 72,
    "section": "Swift",
    "question": "What file format is used to package a compiled iOS app for distribution?",
    "options": [
      "APK",
      "IPA",
      "EXE",
      "DMG"
    ],
    "answer": "IPA"
  },
  {
    "id": 73,
    "section": "Swift",
    "question": "Which Swift collection type stores an ordered list of values?",
    "options": [
      "Dictionary",
      "Array",
      "Set",
      "Tuple only"
    ],
    "answer": "Array"
  },
  {
    "id": 74,
    "section": "Swift",
    "question": "What is a \"ViewController\" in traditional UIKit-based iOS development?",
    "options": [
      "A database manager",
      "A class that manages a screen's content and behavior",
      "A network request handler",
      "A styling file"
    ],
    "answer": "A class that manages a screen's content and behavior"
  },
  {
    "id": 75,
    "section": "Swift",
    "question": "What does CocoaPods (or Swift Package Manager) help manage in iOS projects?",
    "options": [
      "UI colors",
      "Third-party libraries and dependencies",
      "App icons",
      "User accounts"
    ],
    "answer": "Third-party libraries and dependencies"
  },
  {
    "id": 76,
    "section": "HTML & CSS",
    "question": "What does HTML stand for?",
    "options": [
      "HyperText Markup Language",
      "High Tech Modern Language",
      "HyperLink and Text Markup Language",
      "Home Tool Markup Language"
    ],
    "answer": "HyperText Markup Language"
  },
  {
    "id": 77,
    "section": "HTML & CSS",
    "question": "Which tag creates the largest heading in HTML?",
    "options": [
      "<h6>",
      "<heading>",
      "<h1>",
      "<head>"
    ],
    "answer": "<h1>"
  },
  {
    "id": 78,
    "section": "HTML & CSS",
    "question": "Which attribute provides alternative text for an image (accessibility)?",
    "options": [
      "src",
      "alt",
      "title",
      "href"
    ],
    "answer": "alt"
  },
  {
    "id": 79,
    "section": "HTML & CSS",
    "question": "Which HTML tag creates a hyperlink?",
    "options": [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    "answer": "<a>"
  },
  {
    "id": 80,
    "section": "HTML & CSS",
    "question": "Which HTML5 tag defines the main navigation links of a page?",
    "options": [
      "<navigation>",
      "<nav>",
      "<menu>",
      "<links>"
    ],
    "answer": "<nav>"
  },
  {
    "id": 81,
    "section": "HTML & CSS",
    "question": "What does CSS stand for?",
    "options": [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Styled Sections",
      "Colorful Style Syntax"
    ],
    "answer": "Cascading Style Sheets"
  },
  {
    "id": 82,
    "section": "HTML & CSS",
    "question": "Which CSS selector targets an element by its class?",
    "options": [
      "#classname",
      ".classname",
      "*classname",
      "@classname"
    ],
    "answer": ".classname"
  },
  {
    "id": 83,
    "section": "HTML & CSS",
    "question": "In the CSS box model, what is the correct order from innermost to outermost?",
    "options": [
      "Margin, Border, Padding, Content",
      "Content, Padding, Border, Margin",
      "Padding, Content, Margin, Border",
      "Border, Content, Padding, Margin"
    ],
    "answer": "Content, Padding, Border, Margin"
  },
  {
    "id": 84,
    "section": "HTML & CSS",
    "question": "Which CSS property turns an element into a flex container?",
    "options": [
      "display: block;",
      "display: flex;",
      "position: flex;",
      "flex: true;"
    ],
    "answer": "display: flex;"
  },
  {
    "id": 85,
    "section": "HTML & CSS",
    "question": "Which CSS property changes the text color of an element?",
    "options": [
      "background-color",
      "color",
      "text-style",
      "font-color"
    ],
    "answer": "color"
  },
  {
    "id": 86,
    "section": "HTML & CSS",
    "question": "Which HTML tag creates a dropdown/select input in a form?",
    "options": [
      "<input>",
      "<select>",
      "<dropdown>",
      "<option> only"
    ],
    "answer": "<select>"
  },
  {
    "id": 87,
    "section": "HTML & CSS",
    "question": "What does justify-content control in Flexbox?",
    "options": [
      "Vertical alignment only",
      "How items are spaced along the main axis",
      "Font size",
      "Border color"
    ],
    "answer": "How items are spaced along the main axis"
  },
  {
    "id": 88,
    "section": "HTML & CSS",
    "question": "Which HTML attribute is required for a form's text input to correctly submit data?",
    "options": [
      "id",
      "name",
      "class",
      "style"
    ],
    "answer": "name"
  },
  {
    "id": 89,
    "section": "Figma",
    "question": "What is Figma primarily used for?",
    "options": [
      "Writing backend code",
      "UI/UX design and interactive prototyping",
      "Managing databases",
      "Hosting websites"
    ],
    "answer": "UI/UX design and interactive prototyping"
  },
  {
    "id": 90,
    "section": "Figma",
    "question": "In Figma, what is a \"Frame\"?",
    "options": [
      "A type of font",
      "A container representing a screen or defined area, used as an artboard",
      "A color palette",
      "An animation type"
    ],
    "answer": "A container representing a screen or defined area, used as an artboard"
  },
  {
    "id": 91,
    "section": "Figma",
    "question": "What is a Figma \"Component\" used for?",
    "options": [
      "A one-time use element only",
      "A reusable design element placed multiple times and updated centrally",
      "A type of text style only",
      "A plugin"
    ],
    "answer": "A reusable design element placed multiple times and updated centrally"
  },
  {
    "id": 92,
    "section": "Figma",
    "question": "In Figma's Prototype tab, what does a \"Trigger\" define?",
    "options": [
      "The final visual design",
      "What action starts an interaction (e.g., On Click, On Drag)",
      "The color of a button",
      "The font used"
    ],
    "answer": "What action starts an interaction (e.g., On Click, On Drag)"
  },
  {
    "id": 93,
    "section": "Figma",
    "question": "What does \"Smart Animate\" do in Figma prototyping?",
    "options": [
      "Deletes unused layers",
      "Creates smooth transitions between two frames with matching layer names",
      "Compresses image file size",
      "Adds text automatically"
    ],
    "answer": "Creates smooth transitions between two frames with matching layer names"
  },
  {
    "id": 94,
    "section": "Figma",
    "question": "What is Figma's \"Auto Layout\" feature used for?",
    "options": [
      "Automatically writing code",
      "Automatically arranging and spacing elements like a flex layout",
      "Automatically choosing colors",
      "Automatically exporting to PDF"
    ],
    "answer": "Automatically arranging and spacing elements like a flex layout"
  },
  {
    "id": 95,
    "section": "Figma",
    "question": "Which panel in Figma shows the hierarchy of all elements on a page?",
    "options": [
      "Design panel",
      "Layers panel",
      "Assets panel",
      "Export panel"
    ],
    "answer": "Layers panel"
  },
  {
    "id": 96,
    "section": "Figma",
    "question": "What file formats can Figma designs commonly be exported as for developers?",
    "options": [
      "Only .docx",
      "PNG, SVG, PDF, and more",
      "Only .exe",
      "Only .apk"
    ],
    "answer": "PNG, SVG, PDF, and more"
  },
  {
    "id": 97,
    "section": "Figma",
    "question": "What is the purpose of a \"Design System\" or shared Figma library?",
    "options": [
      "To slow down design work",
      "To keep colors, fonts, and components consistent across a project/team",
      "To hide design files from teammates",
      "To compress files"
    ],
    "answer": "To keep colors, fonts, and components consistent across a project/team"
  },
  {
    "id": 98,
    "section": "Figma",
    "question": "In Figma, what does \"Constraints\" control on a resizable frame?",
    "options": [
      "How a layer behaves when its parent frame is resized",
      "The internet connection speed",
      "The number of pages in a file",
      "The file's password"
    ],
    "answer": "The internet connection speed"
  },
  {
    "id": 99,
    "section": "Figma",
    "question": "What is the main benefit of collaborating in Figma compared to older design tools?",
    "options": [
      "It only works offline",
      "Multiple people can view and edit the same file in real-time",
      "It cannot be shared with anyone",
      "It only supports one page per file"
    ],
    "answer": "Multiple people can view and edit the same file in real-time"
  },
  {
    "id": 100,
    "section": "Figma",
    "question": "Which Figma feature lets you test how your design looks/functions like a real app before development?",
    "options": [
      "Export panel",
      "Presentation/Prototype Preview mode",
      "Layers panel",
      "Fonts panel"
    ],
    "answer": "Presentation/Prototype Preview mode"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUIZ_QUESTIONS };
}
