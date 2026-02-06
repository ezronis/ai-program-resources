import React, { useState } from 'react';
import { CheckCircle2, Circle, Lightbulb, AlertCircle, Sparkles } from 'lucide-react';

const Week8ProjectPlanner = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [ideaNotes, setIdeaNotes] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [checklist, setChecklist] = useState({
    level: false,
    idea: false,
    aiCheck: false,
    breakdown: false
  });

  const levels = [
    {
      id: 1,
      name: "Level 1: Beginner",
      description: "Build on what you learned this week",
      whenToChoose: "Choose if Week 7 felt challenging but doable",
      timeCommitment: "3-5 hours total",
      projects: [
        {
          id: 'calc',
          name: 'Simple Calculator',
          description: 'Basic math operations (+, -, ×, ÷) with custom styling',
          skills: ['Form inputs', 'Basic JavaScript math', 'Button interactions', 'Display results'],
          example: 'User enters two numbers, clicks operation, sees result'
        },
        {
          id: 'form',
          name: 'Interactive Form with Validation',
          description: 'Form that checks if inputs are correct before submitting',
          skills: ['Input validation', 'Error messages', 'Form handling', 'User feedback'],
          example: 'Email signup form that checks for valid email format'
        },
        {
          id: 'quiz',
          name: 'Quiz or Trivia Game',
          description: '3-5 questions with multiple choice answers and score tracking',
          skills: ['Question flow', 'Score keeping', 'Conditional logic', 'User interaction'],
          example: 'Movie trivia with 5 questions, shows score at end'
        },
        {
          id: 'timer',
          name: 'Timer or Countdown Tool',
          description: 'Set a time and count down, with alerts when done',
          skills: ['Time handling', 'Intervals', 'Notifications', 'Start/stop controls'],
          example: 'Pomodoro timer: 25 min work, 5 min break'
        }
      ]
    },
    {
      id: 2,
      name: "Level 2: Intermediate",
      description: "Stretch yourself with new concepts",
      whenToChoose: "Choose if Week 7 felt comfortable and you want more challenge",
      timeCommitment: "5-8 hours total",
      projects: [
        {
          id: 'api',
          name: 'Tool with API Integration',
          description: 'Pull real-time data from an API (weather, quotes, etc.)',
          skills: ['API calls', 'Fetch requests', 'JSON handling', 'Dynamic data display'],
          example: 'Weather app that shows current temp for your city'
        },
        {
          id: 'dataviz',
          name: 'Data Visualization from CSV',
          description: 'Upload or paste CSV data and create charts/graphs',
          skills: ['File handling', 'Data parsing', 'Chart libraries', 'Visual display'],
          example: 'Budget tracker that shows spending by category as pie chart'
        },
        {
          id: 'game',
          name: 'Browser-Based Game',
          description: 'Interactive game like tic-tac-toe or memory match',
          skills: ['Game logic', 'Win conditions', 'State management', 'User turns'],
          example: 'Memory matching game with cards that flip'
        },
        {
          id: 'widget',
          name: 'Custom Widget or Component',
          description: 'Reusable component like color picker, date selector, etc.',
          skills: ['Component design', 'Reusability', 'Custom styling', 'Advanced interactions'],
          example: 'Custom color picker with RGB sliders'
        }
      ]
    },
    {
      id: 3,
      name: "Level 3: Advanced",
      description: "Build something ambitious",
      whenToChoose: "Choose if you have coding experience or Week 7 felt easy",
      timeCommitment: "8-12 hours total",
      projects: [
        {
          id: 'extend',
          name: 'Extend Your Week 6 App',
          description: 'Add custom coded features to your no-code app',
          skills: ['Integration', 'Advanced features', 'Custom logic', 'Hybrid approach'],
          example: 'Add custom analytics dashboard to your Week 6 app'
        },
        {
          id: 'extension',
          name: 'Chrome Extension',
          description: 'Browser tool that enhances web pages',
          skills: ['Extension APIs', 'Browser integration', 'Manifest files', 'Content scripts'],
          example: 'Highlight all links on a page or word counter for text fields'
        },
        {
          id: 'cli',
          name: 'CLI (Command Line) Utility',
          description: 'Terminal-based tool for automating tasks',
          skills: ['Node.js basics', 'File system', 'Command parsing', 'Terminal output'],
          example: 'File renamer that batch renames files based on pattern'
        },
        {
          id: 'integration',
          name: 'Multi-Service Integration',
          description: 'Connect multiple APIs or services together',
          skills: ['Multiple APIs', 'Data flow', 'Authentication', 'Complex logic'],
          example: 'Auto-post Instagram photos to Twitter with custom text'
        }
      ]
    }
  ];

  const toggleChecklist = (item) => {
    setChecklist(prev => ({ ...prev, [item]: !prev[item] }));
  };

  const currentLevel = levels.find(l => l.id === selectedLevel);
  const currentProject = currentLevel?.projects.find(p => p.id === selectedProject);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-purple-600" size={32} />
          <h1 className="text-3xl font-bold text-gray-800">Week 8 Project Planner</h1>
        </div>
        <p className="text-gray-600 text-lg mb-6">
          Plan your 2-week vibe coding project. Choose your challenge level, pick a project, and verify it's achievable with AI.
        </p>
      </div>

      {/* Step 1: Choose Level */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Step 1: Choose Your Level</h2>
          {checklist.level && <CheckCircle2 className="text-green-600" size={24} />}
        </div>
        
        <div className="grid gap-4 mb-6">
          {levels.map(level => (
            <button
              key={level.id}
              onClick={() => {
                setSelectedLevel(level.id);
                setSelectedProject(null);
                toggleChecklist('level');
              }}
              className={`text-left p-6 rounded-lg border-2 transition-all ${
                selectedLevel === level.id
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <h3 className="font-bold text-xl mb-2 text-gray-800">{level.name}</h3>
              <p className="text-gray-700 mb-2">{level.description}</p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>When to choose:</strong> {level.whenToChoose}
              </p>
              <p className="text-sm text-purple-700 font-medium">
                ⏱️ {level.timeCommitment}
              </p>
            </button>
          ))}
        </div>

        {selectedLevel && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <div className="flex items-start gap-2">
              <Lightbulb className="text-blue-600 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-blue-900 mb-1">Choosing Your Level:</p>
                <p className="text-blue-800 text-sm">
                  Be honest about your time and energy. It's better to complete a Level 1 project well 
                  than to start Level 3 and feel overwhelmed. You can always go bigger next time!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Step 2: Pick Project */}
      {selectedLevel && (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Step 2: Pick Your Project</h2>
            {checklist.idea && <CheckCircle2 className="text-green-600" size={24} />}
          </div>

          <div className="grid gap-4 mb-6">
            {currentLevel.projects.map(project => (
              <button
                key={project.id}
                onClick={() => {
                  setSelectedProject(project.id);
                  toggleChecklist('idea');
                }}
                className={`text-left p-5 rounded-lg border-2 transition-all ${
                  selectedProject === project.id
                    ? 'border-green-600 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <h3 className="font-bold text-lg mb-2 text-gray-800">{project.name}</h3>
                <p className="text-gray-700 mb-3">{project.description}</p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Example:</strong> {project.example}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <p className="font-semibold text-purple-900 mb-2">💡 Your Own Idea?</p>
            <p className="text-purple-800 text-sm mb-3">
              Don't see something you love? You can propose your own project! 
              Just make sure to run it by AI in Step 3 to check if it's the right scope.
            </p>
            <textarea
              placeholder="Describe your custom project idea here..."
              className="w-full p-3 border border-purple-200 rounded text-sm"
              rows="3"
              value={ideaNotes}
              onChange={(e) => setIdeaNotes(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Step 3: AI Reality Check */}
      {(selectedProject || ideaNotes) && (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Step 3: AI Reality Check</h2>
            {checklist.aiCheck && <CheckCircle2 className="text-green-600" size={24} />}
          </div>

          <p className="text-gray-700 mb-4">
            Before committing, ask AI if your project is achievable in 2 weeks. Copy this prompt:
          </p>

          <div className="bg-gray-800 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
            <p className="mb-2 text-gray-300">Copy this prompt to Claude or ChatGPT:</p>
            <div className="bg-gray-900 p-3 rounded">
              I'm a beginner coder learning vibe coding with AI assistance.<br/>
              I want to build: {currentProject?.name || ideaNotes || '[your project]'}<br/>
              <br/>
              {currentProject && `Description: ${currentProject.description}`}<br/>
              <br/>
              Questions:<br/>
              1. Is this achievable in 2 weeks for a beginner using AI-assisted coding?<br/>
              2. What are the main challenges I'll face?<br/>
              3. How would you break this into phases (Week 8 and beyond)?<br/>
              4. What should I build first to have something working quickly?<br/>
              5. Any simpler alternatives if this is too ambitious?
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Paste AI's Response Here:
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded"
              rows="6"
              placeholder="AI will tell you if your project is realistic, what challenges to expect, and how to break it down..."
              value={aiResponse}
              onChange={(e) => {
                setAiResponse(e.target.value);
                if (e.target.value.length > 50) toggleChecklist('aiCheck');
              }}
            />
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <div className="flex items-start gap-2">
              <AlertCircle className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-yellow-900 mb-1">Read AI's Feedback Carefully:</p>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• If AI says "too ambitious," consider the simpler alternative it suggests</li>
                  <li>• If AI says "challenging but doable," pay attention to the phases</li>
                  <li>• If AI says "good fit," use its breakdown to plan your work</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Break It Down */}
      {aiResponse && (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Step 4: Break It Into Phases</h2>
            {checklist.breakdown && <CheckCircle2 className="text-green-600" size={24} />}
          </div>

          <p className="text-gray-700 mb-4">
            Based on AI's feedback, plan what you'll build when. Remember: something working beats something perfect!
          </p>

          <div className="space-y-4 mb-6">
            <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
              <h3 className="font-bold text-lg mb-2 text-blue-900">Week 8 Session 1 Goal</h3>
              <p className="text-sm text-blue-700 mb-2">Build the absolute core feature first</p>
              <textarea
                className="w-full p-3 border border-blue-300 rounded text-sm"
                rows="3"
                placeholder="Example: 'Get basic calculator working with +, -, ×, ÷ operations. No styling yet, just functional.'"
                onChange={(e) => {
                  if (e.target.value.length > 20) toggleChecklist('breakdown');
                }}
              />
            </div>

            <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50">
              <h3 className="font-bold text-lg mb-2 text-green-900">Between Sessions</h3>
              <p className="text-sm text-green-700 mb-2">Add one enhancement or polish</p>
              <textarea
                className="w-full p-3 border border-green-300 rounded text-sm"
                rows="3"
                placeholder="Example: 'Add custom styling, make buttons bigger, add color scheme, test edge cases.'"
              />
            </div>

            <div className="border-2 border-purple-200 rounded-lg p-4 bg-purple-50">
              <h3 className="font-bold text-lg mb-2 text-purple-900">Week 8 Session 2 Goal</h3>
              <p className="text-sm text-purple-700 mb-2">Final features and documentation</p>
              <textarea
                className="w-full p-3 border border-purple-300 rounded text-sm"
                rows="3"
                placeholder="Example: 'Add keyboard support, create clear display, write documentation, practice demo.'"
              />
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Future Enhancements</h3>
              <p className="text-sm text-gray-700 mb-2">Ideas to add later (optional)</p>
              <textarea
                className="w-full p-3 border border-gray-300 rounded text-sm"
                rows="3"
                placeholder="Example: 'Add memory function, scientific operations, history of calculations, save/load feature.'"
              />
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="font-semibold text-green-900 mb-1">✅ The Golden Rule:</p>
            <p className="text-green-800 text-sm">
              At the end of Week 8 Session 1, you should have something that WORKS, even if it's simple. 
              Everything else is enhancement. Working beats perfect every time.
            </p>
          </div>
        </div>
      )}

      {/* Final Checklist */}
      {Object.values(checklist).every(v => v) && (
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 size={32} />
            You're Ready for Week 8!
          </h2>
          <div className="space-y-2 text-lg">
            <p>✅ Level chosen: <strong>{currentLevel?.name}</strong></p>
            <p>✅ Project selected: <strong>{currentProject?.name || 'Custom idea'}</strong></p>
            <p>✅ AI verified it's achievable</p>
            <p>✅ Broken into phases with clear goals</p>
          </div>
          <div className="mt-6 bg-white bg-opacity-20 rounded p-4">
            <p className="font-semibold mb-2">Remember:</p>
            <ul className="space-y-1 text-sm">
              <li>• Start simple, add complexity later</li>
              <li>• Test frequently</li>
              <li>• Ask AI for help when stuck</li>
              <li>• Something working beats something perfect</li>
              <li>• You've got this! 🎉</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Week8ProjectPlanner;