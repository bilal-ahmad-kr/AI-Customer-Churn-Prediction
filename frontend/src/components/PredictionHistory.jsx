function PredictionHistory({ history, darkMode }) {
  if (!history || history.length === 0) {
    return (
      <div className="mt-10 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 text-center transition-colors duration-300">
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-3">
          Prediction History
        </h2>

        <p className="text-gray-500 dark:text-gray-400">
          No predictions yet.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 transition-colors duration-300">
      <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6">
        Prediction History
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">

          <thead className="bg-blue-600 dark:bg-blue-800 text-white">
            <tr>
              <th className="px-5 py-3 text-left">#</th>
              <th className="px-5 py-3 text-left">Prediction</th>
              <th className="px-5 py-3 text-left">Probability</th>
              <th className="px-5 py-3 text-left">Risk</th>
            </tr>
          </thead>

          <tbody>

            {history.map((item, index) => {

              const probability =
                (item.churn_probability * 100).toFixed(2);

              const risk =
                probability < 30
                  ? "Low"
                  : probability < 70
                  ? "Medium"
                  : "High";

              return (
                <tr
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >

                  <td className="px-5 py-4 dark:text-gray-200">
                    {index + 1}
                  </td>

                  <td className="px-5 py-4">

                    <span
                      className={`px-4 py-1 rounded-full text-white font-semibold ${
                        item.prediction === "Yes"
                          ? "bg-red-500"
                          : "bg-green-500"
                      }`}
                    >
                      {item.prediction}
                    </span>

                  </td>

                  <td className="px-5 py-4 font-semibold dark:text-gray-200">
                    {probability}%
                  </td>

                  <td className="px-5 py-4">

                    <span
                      className={`px-4 py-1 rounded-full text-white font-semibold ${
                        risk === "High"
                          ? "bg-red-500"
                          : risk === "Medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    >
                      {risk}
                    </span>

                  </td>

                </tr>
              );

            })}

          </tbody>

        </table>
      </div>
    </div>
  );
}

export default PredictionHistory;