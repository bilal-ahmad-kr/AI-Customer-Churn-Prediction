import React from 'react';

function LandingPage({ onGetStarted, darkMode }) {
  return (
    <div className="w-full flex-grow flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 text-center flex flex-col items-center justify-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold tracking-wide border border-indigo-200 dark:border-indigo-700/50">
          Powered by Machine Learning
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
          Stop Customer Churn <br className="hidden md:block"/> Before It Happens
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Proactively identify at-risk customers using our advanced AI models. Analyze behavior, get instant risk assessments, and take action to retain your most valuable users.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onGetStarted}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/30 flex items-center justify-center gap-2"
          >
            Start Predicting Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
          <a href="#about" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center">
            Learn More
          </a>
        </div>
      </section>

      {/* Model & Accuracy Section */}
      <section id="about" className="w-full bg-gray-50 dark:bg-gray-900/50 py-20 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About the Model</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Our predictive engine is built on a robust <strong>Logistic Regression</strong> model trained on thousands of telecommunications customer records. It analyzes 19 distinct features—including tenure, monthly charges, and service usage—to accurately determine the likelihood of a customer leaving.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg text-green-600 dark:text-green-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  Data standardized using Scikit-Learn StandardScaler
                </li>
                <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg text-green-600 dark:text-green-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  One-Hot Encoding for categorical variables
                </li>
              </ul>
            </div>
            
            {/* Accuracy Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 blur-2xl opacity-20 dark:opacity-40 rounded-full"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 text-center transform transition-transform hover:scale-105 duration-300">
                <h4 className="text-xl font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Model Accuracy</h4>
                <div className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-4">
                  79%
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Consistently reliable predictions validated against unseen test datasets.</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-4 rounded-full" style={{ width: '79%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why use ChurnFlow?</h3>
          <p className="text-xl text-gray-600 dark:text-gray-400">Actionable intelligence right at your fingertips.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Real-time API", desc: "FastAPI backend delivers predictions in milliseconds, allowing seamless integration.", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "from-yellow-400 to-orange-500" },
            { title: "Deep Analytics", desc: "Detailed risk levels and confidence scores give you the context needed to make decisions.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", color: "from-blue-400 to-indigo-500" },
            { title: "Smart Recommendations", desc: "Not just a probability score. Get tailored recommendations on how to retain each user.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", color: "from-green-400 to-emerald-500" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg text-white`}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} /></svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full bg-white dark:bg-gray-900 py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10">Built with modern technology</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70">
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-200">
              <span className="text-blue-500 text-3xl">⚛</span> React 19
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-200">
              <span className="text-teal-500 text-3xl">💨</span> Tailwind CSS
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-200">
              <span className="text-green-500 text-3xl">⚡</span> FastAPI
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-200">
              <span className="text-orange-500 text-3xl">🤖</span> Scikit-Learn
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default LandingPage;
