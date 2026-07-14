import { useState, useEffect } from "react";
import api from "../services/api";
import ResultCard from "./ResultCard";
import PredictionHistory from "./PredictionHistory";
import DashboardStats from "./DashboardStats";
import AnalyticsChart from "./AnalyticsChart";

const yesNo = ["Yes", "No"];
const genderOptions = ["Male", "Female"];
const internetOptions = ["DSL", "Fiber optic", "No"];
const multipleLinesOptions = ["No", "Yes", "No phone service"];
const serviceOptions = ["Yes", "No", "No internet service"];
const contractOptions = ["Month-to-month", "One year", "Two year"];
const paymentOptions = [
  "Electronic check",
  "Mailed check",
  "Bank transfer (automatic)",
  "Credit card (automatic)",
];

function CustomerForm({ darkMode }) {
  const initialFormData = {
    gender: "Male",
    SeniorCitizen: 0,
    Partner: "Yes",
    Dependents: "No",
    tenure: 12,
    PhoneService: "Yes",
    MultipleLines: "No",
    InternetService: "Fiber optic",
    OnlineSecurity: "No",
    OnlineBackup: "Yes",
    DeviceProtection: "Yes",
    TechSupport: "No",
    StreamingTV: "Yes",
    StreamingMovies: "Yes",
    Contract: "Month-to-month",
    PaperlessBilling: "Yes",
    PaymentMethod: "Electronic check",
    MonthlyCharges: 70,
    TotalCharges: 850,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("predictionHistory");

    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("predictionHistory", JSON.stringify(history));
  }, [history]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "number" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await api.post("/predict", formData);

      setResult(response.data);

      setHistory((prev) => [response.data, ...prev]);
    } catch (error) {
      console.error(error);
      alert("Prediction Failed");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setResult(null);
  };

  const SelectField = ({ label, name, options }) => (
    <div className="flex flex-col">
      <label className="font-semibold mb-2 dark:text-gray-200">{label}</label>

      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="border border-gray-300 dark:border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 dark:text-white transition-colors duration-200"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  const NumberField = ({ label, name }) => (
    <div className="flex flex-col">
      <label className="font-semibold mb-2 dark:text-gray-200">{label}</label>

      <input
        type="number"
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="border border-gray-300 dark:border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 dark:text-white transition-colors duration-200"
      />
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-8 mt-10 transition-colors duration-300">
        <AnalyticsChart history={history} darkMode={darkMode} />
        <DashboardStats history={history} darkMode={darkMode} />
      <h1 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-400 mb-10">
        Customer Churn Prediction
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <SelectField label="Gender" name="gender" options={genderOptions} />

        <SelectField
          label="Senior Citizen"
          name="SeniorCitizen"
          options={[0, 1]}
        />

        <SelectField label="Partner" name="Partner" options={yesNo} />

        <SelectField label="Dependents" name="Dependents" options={yesNo} />

        <SelectField
          label="Phone Service"
          name="PhoneService"
          options={yesNo}
        />

        <SelectField
          label="Multiple Lines"
          name="MultipleLines"
          options={multipleLinesOptions}
        />

        <SelectField
          label="Internet Service"
          name="InternetService"
          options={internetOptions}
        />

        <SelectField
          label="Online Security"
          name="OnlineSecurity"
          options={serviceOptions}
        />

        <SelectField
          label="Online Backup"
          name="OnlineBackup"
          options={serviceOptions}
        />

        <SelectField
          label="Device Protection"
          name="DeviceProtection"
          options={serviceOptions}
        />

        <SelectField
          label="Tech Support"
          name="TechSupport"
          options={serviceOptions}
        />

        <SelectField
          label="Streaming TV"
          name="StreamingTV"
          options={serviceOptions}
        />

        <SelectField
          label="Streaming Movies"
          name="StreamingMovies"
          options={serviceOptions}
        />

        <SelectField
          label="Contract"
          name="Contract"
          options={contractOptions}
        />

        <SelectField
          label="Paperless Billing"
          name="PaperlessBilling"
          options={yesNo}
        />

        <SelectField
          label="Payment Method"
          name="PaymentMethod"
          options={paymentOptions}
        />

        <NumberField label="Tenure" name="tenure" />

        <NumberField label="Monthly Charges" name="MonthlyCharges" />

        <NumberField label="Total Charges" name="TotalCharges" />

        <div className="md:col-span-2 flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-3 disabled:bg-gray-400 dark:disabled:bg-gray-600 transition-colors duration-200 cursor-pointer"
          >
            {loading && (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}

            {loading ? "Predicting..." : "Predict Customer Churn"}
          </button>

          <button
            type="button"
            onClick={resetForm}
            className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500 text-white px-8 rounded-lg font-bold transition-colors duration-200 cursor-pointer"
          >
            Reset
          </button>
        </div>
      </form>

      {result && <ResultCard result={result} darkMode={darkMode} />}

      <PredictionHistory history={history} darkMode={darkMode} />
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => {
            localStorage.removeItem("predictionHistory");
            setHistory([]);
          }}
          className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 cursor-pointer"
        >
          Clear History
        </button>
      </div>
    </div>
  );
}

export default CustomerForm;
