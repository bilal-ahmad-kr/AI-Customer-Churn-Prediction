function DashboardStats({ history, darkMode }) {
  const total = history.length;

  const highRisk = history.filter(
    (item) => item.churn_probability >= 0.7
  ).length;

  const lowRisk = history.filter(
    (item) => item.churn_probability < 0.3
  ).length;

  const avgProbability =
    total === 0
      ? 0
      : (
          history.reduce(
            (sum, item) => sum + item.churn_probability,
            0
          ) /
          total *
          100
        ).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

      <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-xl shadow-lg p-6 transition-colors duration-200">
        <h3 className="text-lg font-semibold">
          Total Predictions
        </h3>

        <p className="text-4xl font-bold mt-3">
          {total}
        </p>
      </div>

      <div className="bg-red-500 dark:bg-red-600 text-white rounded-xl shadow-lg p-6 transition-colors duration-200">
        <h3 className="text-lg font-semibold">
          High Risk
        </h3>

        <p className="text-4xl font-bold mt-3">
          {highRisk}
        </p>
      </div>

      <div className="bg-green-600 dark:bg-green-700 text-white rounded-xl shadow-lg p-6 transition-colors duration-200">
        <h3 className="text-lg font-semibold">
          Low Risk
        </h3>

        <p className="text-4xl font-bold mt-3">
          {lowRisk}
        </p>
      </div>

      <div className="bg-purple-600 dark:bg-purple-700 text-white rounded-xl shadow-lg p-6 transition-colors duration-200">
        <h3 className="text-lg font-semibold">
          Average Probability
        </h3>

        <p className="text-4xl font-bold mt-3">
          {avgProbability}%
        </p>
      </div>

    </div>
  );
}

export default DashboardStats;