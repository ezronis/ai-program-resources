import React, { useState } from 'react';
import { Eye, Brain, Wrench, ChevronRight, CheckCircle, Circle } from 'lucide-react';

const CodeReadingGuide = () => {
  const [activeLevel, setActiveLevel] = useState(1);
  const [selectedExample, setSelectedExample] = useState('counter');

  const examples = {
    counter: {
      title: "Click Counter",
      code: `let count = 0;
const button = document.getElementById('clickBtn');
const display = document.getElementById('count');

button.onclick = function() {
    count = count + 1;
    display.textContent = count;
}`,
      level1: {
        understanding: "This code makes a button count clicks",
        canYou: [
          "Know what the code does overall",
          "Test if it works"
        ],
        cantYet: [
          "Change specific behaviors",
          "Explain why it works"
        ]
      },
      level2: {
        understanding: "The HTML has a button with id='clickBtn' and a display with id='count'. When the button is clicked, JavaScript increases the count and updates the display.",
        canYou: [
          "Find where the count starts (line 1: count = 0)",
          "See which part handles the click (button.onclick)",
          "Understand the three main pieces: count variable, button, display",
          "Make basic changes (starting number, display location)"
        ],
        cantYet: [
          "Explain exactly how onclick works under the hood",
          "Write similar code from scratch without AI"
        ]
      },
      level3: {
        understanding: "The code initializes a counter variable at 0, gets references to DOM elements using getElementById, and attaches an event handler to the button. When clicked, it increments count using the += operator and updates the textContent property of the display element to reflect the new value.",
        canYou: [
          "Explain each line's purpose",
          "Modify the behavior confidently (add reset, change increment amount, add conditions)",
          "Debug issues yourself",
          "Write similar code with AI guidance",
          "Understand why const vs let matters here"
        ],
        cantYet: [
          "Necessarily need to explain JavaScript engine internals",
          "Write complex code without any AI assistance"
        ]
      }
    },
    greeting: {
      title: "User Greeting",
      code: `function greetUser() {
    const name = prompt("What's your name?");
    const greeting = "Hello, " + name + "!";
    const message = document.getElementById('message');
    message.textContent = greeting;
}

document.getElementById('greetBtn').onclick = greetUser;`,
      level1: {
        understanding: "This code asks for your name and shows a greeting",
        canYou: [
          "Know it asks for input and shows a message",
          "Test if it works"
        ],
        cantYet: [
          "Change the greeting text",
          "Understand why there's a function"
        ]
      },
      level2: {
        understanding: "There's a function called greetUser that asks for a name using prompt(), combines it with 'Hello' to make a greeting, finds the message element on the page, and displays the greeting there. The button triggers this function when clicked.",
        canYou: [
          "Change 'Hello' to something else (line 3)",
          "See where the name is collected (prompt)",
          "Understand the flow: click → ask name → show greeting",
          "Identify the function and where it's called"
        ],
        cantYet: [
          "Explain why functions are useful",
          "Know when to use const vs let"
        ]
      },
      level3: {
        understanding: "The code defines a named function greetUser that encapsulates the greeting logic. It uses prompt() for user input, string concatenation to build the message, and DOM manipulation to display it. The function is assigned as an event handler to the button's onclick property, creating a separation of concerns between the action (clicking) and the behavior (greeting).",
        canYou: [
          "Explain why this is organized as a function",
          "Add error handling if no name is entered",
          "Modify it to greet differently based on time of day",
          "Understand scope (where name variable is accessible)",
          "Refactor this to use template literals instead of concatenation"
        ],
        cantYet: [
          "Need to memorize every JavaScript method"
        ]
      }
    },
    random: {
      title: "Random Answer",
      code: `const answers = ["Yes", "No", "Maybe", "Ask again"];

function getRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

document.getElementById('askBtn').onclick = function() {
    const answer = getRandomAnswer();
    document.getElementById('answer').textContent = answer;
}`,
      level1: {
        understanding: "This code picks a random answer from a list when you click a button",
        canYou: [
          "Know it shows random answers",
          "Test that different answers appear"
        ],
        cantYet: [
          "Add new answers to the list",
          "Understand how randomness works"
        ]
      },
      level2: {
        understanding: "There's a list of possible answers at the top. A function called getRandomAnswer picks one randomly using Math.random. When the button is clicked, it gets a random answer and displays it on the page.",
        canYou: [
          "Add more answers to the list (line 1)",
          "Change the existing answers",
          "See the three parts: list, random picker, button click",
          "Understand arrays store lists of things in [ ]"
        ],
        cantYet: [
          "Explain exactly how Math.random() works",
          "Know why we need Math.floor"
        ]
      },
      level3: {
        understanding: "The code uses an array to store possible answers, defines a function that generates a random index within the array bounds using Math.random() (0-1) multiplied by array length, then floors it to get an integer. The function returns the element at that index. The button's click handler calls this function and displays the result.",
        canYou: [
          "Explain why Math.floor is necessary (converts decimal to whole number)",
          "Understand array indexing (starts at 0)",
          "Modify to prevent repeating the same answer twice",
          "Add weighting so some answers are more likely",
          "Debug if array is empty"
        ],
        cantYet: [
          "Need to know every Math method by heart"
        ]
      }
    }
  };

  const currentExample = examples[selectedExample];
  const levels = [
    {
      number: 1,
      name: "Level 1: Surface Understanding",
      icon: Eye,
      color: "blue",
      tagline: "I know WHAT it does",
      whenEnough: "When you just need it to work and don't plan to modify it",
      timeToGet: "Immediate - just run and observe"
    },
    {
      number: 2,
      name: "Level 2: Functional Understanding",
      icon: Brain,
      color: "purple",
      tagline: "I know WHICH parts do WHAT",
      whenEnough: "When you want to make basic modifications (most common goal)",
      timeToGet: "5-10 minutes - ask AI to explain in chunks"
    },
    {
      number: 3,
      name: "Level 3: Deep Understanding",
      icon: Wrench,
      color: "green",
      tagline: "I know WHY and HOW it works",
      whenEnough: "When you need to significantly modify or debug complex issues",
      timeToGet: "15-30 minutes - ask AI 'why' questions repeatedly"
    }
  ];

  const currentLevel = levels[activeLevel - 1];
  const levelData = currentExample[`level${activeLevel}`];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 mb-8 text-white">
        <h1 className="text-4xl font-bold mb-3">Code Reading Guide</h1>
        <p className="text-xl opacity-90">You don't need to understand everything. Pick the level that matches your goal.</p>
      </div>

      {/* Key Principle */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-yellow-900 mb-2">🔑 The Key Principle</h2>
        <p className="text-yellow-800 text-lg">
          Understanding code is like understanding a car: You can drive it (Level 1), 
          change the oil and tires (Level 2), or rebuild the engine (Level 3). 
          <strong> Most people only need Level 2.</strong>
        </p>
      </div>

      {/* Example Selector */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Choose an Example:</h2>
        <div className="grid grid-cols-3 gap-4">
          {Object.keys(examples).map(key => (
            <button
              key={key}
              onClick={() => setSelectedExample(key)}
              className={`p-4 rounded-lg font-semibold transition-all ${
                selectedExample === key
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {examples[key].title}
            </button>
          ))}
        </div>
      </div>

      {/* The Code */}
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-100">The Code:</h2>
        <pre className="text-green-400 font-mono text-sm overflow-x-auto">
          {currentExample.code}
        </pre>
      </div>

      {/* Level Selector */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {levels.map(level => {
          const Icon = level.icon;
          const isActive = activeLevel === level.number;
          const colorClasses = {
            blue: isActive ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-900 hover:bg-blue-200',
            purple: isActive ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-900 hover:bg-purple-200',
            green: isActive ? 'bg-green-600 text-white' : 'bg-green-100 text-green-900 hover:bg-green-200'
          };
          
          return (
            <button
              key={level.number}
              onClick={() => setActiveLevel(level.number)}
              className={`p-6 rounded-lg transition-all ${colorClasses[level.color]}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon size={28} />
                <span className="font-bold text-lg">Level {level.number}</span>
              </div>
              <p className="font-semibold mb-2">{level.tagline}</p>
              <p className="text-sm opacity-90">{level.timeToGet}</p>
            </button>
          );
        })}
      </div>

      {/* Level Details */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-center gap-4 mb-6">
          {React.createElement(currentLevel.icon, { size: 36, className: `text-${currentLevel.color}-600` })}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{currentLevel.name}</h2>
            <p className="text-lg text-gray-600">{currentLevel.tagline}</p>
          </div>
        </div>

        {/* Understanding at this level */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-3 text-gray-800">At this level, you understand:</h3>
          <div className={`bg-${currentLevel.color}-50 border-l-4 border-${currentLevel.color}-500 p-4 rounded`}>
            <p className="text-gray-800 text-lg italic">"{levelData.understanding}"</p>
          </div>
        </div>

        {/* What you can do */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-3 text-gray-800">What you CAN do at this level:</h3>
          <div className="space-y-2">
            {levelData.canYou.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What you can't do yet */}
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-3 text-gray-800">What you CAN'T do yet (and that's okay!):</h3>
          <div className="space-y-2">
            {levelData.cantYet.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Circle className="text-gray-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* When this level is enough */}
        <div className={`bg-${currentLevel.color}-50 p-5 rounded-lg`}>
          <h3 className="font-bold mb-2 text-gray-800">When Level {activeLevel} is enough:</h3>
          <p className="text-gray-700">{currentLevel.whenEnough}</p>
        </div>
      </div>

      {/* How to Reach This Level */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">How to Reach Level {activeLevel}</h2>
        
        {activeLevel === 1 && (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Run the code</h3>
                <p className="text-gray-600">Just make it work. Click buttons, type inputs, see what happens.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Observe the behavior</h3>
                <p className="text-gray-600">What happens when you interact? That's what the code does.</p>
              </div>
            </div>
            <div className="bg-blue-100 p-4 rounded mt-4">
              <p className="text-blue-900"><strong>Time needed:</strong> Immediate. This is your starting point for all code.</p>
            </div>
          </div>
        )}

        {activeLevel === 2 && (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Ask AI to explain in chunks</h3>
                <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mt-2">
                  Break this code into sections and explain what each section does in simple terms
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Identify the main parts</h3>
                <p className="text-gray-600">Where's the data? Where's the interaction? Where's the display?</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Make a small change</h3>
                <p className="text-gray-600">Change a number, text, or simple value. See what happens. This proves you understand.</p>
              </div>
            </div>
            <div className="bg-purple-100 p-4 rounded mt-4">
              <p className="text-purple-900"><strong>Time needed:</strong> 5-10 minutes. This is the sweet spot for most vibe coding.</p>
            </div>
          </div>
        )}

        {activeLevel === 3 && (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Ask AI "why" questions</h3>
                <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm mt-2">
                  Why did you use [X] instead of [Y]?<br/>
                  What would break if I removed this line?<br/>
                  Explain how [specific mechanism] works
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Experiment deliberately</h3>
                <p className="text-gray-600">Change logic, add conditions, try alternatives. Break it on purpose and fix it.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Read documentation</h3>
                <p className="text-gray-600">Look up methods on MDN or ask AI for official explanations of functions.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Explain it to someone else</h3>
                <p className="text-gray-600">Teaching is the ultimate test of deep understanding.</p>
              </div>
            </div>
            <div className="bg-green-100 p-4 rounded mt-4">
              <p className="text-green-900"><strong>Time needed:</strong> 15-30 minutes. Worth it when you need significant modifications.</p>
            </div>
          </div>
        )}
      </div>

      {/* Progression Path */}
      <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-green-100 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Learning Path</h2>
        <div className="flex items-center justify-between">
          <div className="flex-1 text-center">
            <Eye className="mx-auto mb-2 text-blue-600" size={32} />
            <p className="font-bold text-blue-900">Level 1</p>
            <p className="text-sm text-blue-700">Start here</p>
          </div>
          <ChevronRight className="text-gray-400" size={24} />
          <div className="flex-1 text-center">
            <Brain className="mx-auto mb-2 text-purple-600" size={32} />
            <p className="font-bold text-purple-900">Level 2</p>
            <p className="text-sm text-purple-700">Most code lives here</p>
          </div>
          <ChevronRight className="text-gray-400" size={24} />
          <div className="flex-1 text-center">
            <Wrench className="mx-auto mb-2 text-green-600" size={32} />
            <p className="font-bold text-green-900">Level 3</p>
            <p className="text-sm text-green-700">When you need it</p>
          </div>
        </div>
        <div className="mt-6 bg-white bg-opacity-70 rounded p-4">
          <p className="text-gray-800 text-center">
            <strong>Remember:</strong> You don't need Level 3 for everything. 
            Stay at the level that matches your current goal. You can always go deeper later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeReadingGuide;