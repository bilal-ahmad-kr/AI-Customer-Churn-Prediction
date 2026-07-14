import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function AnalyticsChart({ history, darkMode }) {
  const yesCount = history.filter(
    (item) => item.prediction === "Yes"
  ).length;

  const noCount = history.filter(
    (item) => item.prediction === "No"
  ).length;

  const data = [
    {
      name: "Churn",
      value: yesCount,
    },
    {
      name: "No Churn",
      value: noCount,
    },
  ];

  const COLORS = ["#ef4444", "#22c55e"];

  if (history.length === 0) return null;

  return (
    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 mt-10 transition-colors duration-300">
      <h2 className="text-2xl font-bold text-center text-blue-700 dark:text-blue-400 mb-8">
        Prediction Analytics
      </h2>

      <div className="w-full h-[400px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={140}
              label={({ name, value }) => `${name}: ${value}`}
              stroke={darkMode ? "#1f2937" : "#ffffff"}
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: darkMode ? "#374151" : "#ffffff",
                border: darkMode ? "1px solid #4b5563" : "1px solid #e5e7eb",
                borderRadius: "8px",
                color: darkMode ? "#f3f4f6" : "#111827",
              }}
            />

            <Legend
              wrapperStyle={{
                color: darkMode ? "#d1d5db" : "#374151",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AnalyticsChart;