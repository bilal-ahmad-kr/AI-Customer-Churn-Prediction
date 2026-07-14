import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const downloadReport = (result) => {
  const doc = new jsPDF();

  const probability = (
    result.churn_probability * 100
  ).toFixed(2);

  const risk =
    probability < 30
      ? "Low"
      : probability < 70
      ? "Medium"
      : "High";

  doc.setFontSize(22);
  doc.text("Customer Churn Prediction Report", 15, 20);

  doc.setFontSize(12);

  doc.text(
    `Prediction : ${result.prediction}`,
    15,
    40
  );

  doc.text(
    `Probability : ${probability}%`,
    15,
    50
  );

  doc.text(
    `Risk Level : ${risk}`,
    15,
    60
  );

  autoTable(doc, {
    startY: 80,

    head: [["Field", "Value"]],

    body: [
      ["Prediction", result.prediction],
      ["Probability", `${probability}%`],
      ["Risk", risk],
    ],
  });

  doc.save("Customer_Churn_Report.pdf");
};

export default downloadReport;