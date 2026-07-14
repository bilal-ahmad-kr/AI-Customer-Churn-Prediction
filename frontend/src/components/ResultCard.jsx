import downloadReport from "../utils/downloadReport";

function ResultCard({ result, darkMode }) {
  if (!result) return null;

  const probability = Number((result.churn_probability * 100).toFixed(2));
  
  // Use backend provided risk level or fallback
  const risk = result.risk_level || (probability < 30 ? "Low" : probability < 70 ? "Medium" : "High");

  const riskColor =
    risk === "High"
      ? "bg-red-500 text-white"
      : risk === "Medium"
      ? "bg-yellow-500 text-white"
      : "bg-green-500 text-white";

  const predictionColor =
    result.prediction === "Yes"
      ? "text-red-600 dark:text-red-400"
      : "text-green-600 dark:text-green-400";

  return (
    <div className="mt-10 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700 transition-all duration-300 transform animate-in zoom-in-95">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-100 dark:border-gray-700 pb-6">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          Prediction Analysis
        </h2>
        
        <span className={`px-5 py-2 rounded-full font-bold text-sm tracking-wide uppercase shadow-sm ${riskColor}`}>
          {risk} Risk
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-600 flex flex-col justify-center items-center transform transition-transform hover:-translate-y-1">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">
            Will Churn?
          </h3>
          <p className={`text-4xl font-black ${predictionColor}`}>
            {result.prediction}
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-600 flex flex-col justify-center items-center transform transition-transform hover:-translate-y-1">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">
            Churn Probability
          </h3>
          <p className="text-4xl font-black text-indigo-600 dark:text-indigo-400">
            {probability}%
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-600 flex flex-col justify-center items-center transform transition-transform hover:-translate-y-1">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">
            Confidence
          </h3>
          <p className="text-4xl font-black text-purple-600 dark:text-purple-400">
            {result.confidence || `${probability}%`}
          </p>
        </div>
      </div>
      
      {result.recommendation && (
        <div className="mb-8 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800/50">
          <h3 className="text-indigo-800 dark:text-indigo-300 font-bold mb-2 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Recommendation
          </h3>
          <p className="text-indigo-900 dark:text-indigo-200 leading-relaxed">
            {result.recommendation}
          </p>
        </div>
      )}

      <div className="mb-10">
        <div className="flex justify-between mb-3 text-sm font-semibold">
          <span className="text-gray-600 dark:text-gray-300">
            Probability Scale
          </span>
          <span className="text-gray-600 dark:text-gray-300">
            {probability}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner">
          <div
            className={`h-4 rounded-full transition-all duration-1000 ease-out ${
              probability >= 70
                ? "bg-gradient-to-r from-red-400 to-red-600"
                : probability >= 30
                ? "bg-gradient-to-r from-yellow-400 to-yellow-500"
                : "bg-gradient-to-r from-green-400 to-green-600"
            }`}
            style={{ width: `${Math.max(probability, 2)}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => downloadReport(result)}
          className="bg-gray-900 hover:bg-black dark:bg-gray-100 dark:hover:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-3 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          Download PDF Report
        </button>
      </div>
    </div>
  );
}

export default ResultCard;