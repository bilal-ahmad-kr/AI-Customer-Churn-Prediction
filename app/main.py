from fastapi import FastAPI
from app.schema import Customer

import pandas as pd
import joblib

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Customer Churn Prediction API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ===============================
# Load Files
# ===============================

model = joblib.load("models/Customer_churn_model.pkl")
encoder = joblib.load("models/encoder.pkl")
feature_columns = joblib.load("models/feature_columns.pkl")


@app.get("/")
def home():

    return {
        "message": "Customer Churn Prediction API is Running"
    }


@app.post("/predict")
def predict(customer: Customer):

    # Convert JSON → DataFrame
    df = pd.DataFrame([customer.model_dump()])

    # One Hot Encoding (do not drop first category on single row)
    df = pd.get_dummies(df)

    # Match Training Columns
    df = df.reindex(columns=feature_columns, fill_value=0)

    # Prediction
    pred = model.predict(df)[0]

    # Probability
    prob = model.predict_proba(df)[0]

    churn_probability = float(prob[1])

    # Decode Label
    label = str(encoder.inverse_transform([pred])[0])
    
    # Calculate Risk Level and Recommendation
    if churn_probability > 0.7:
        risk_level = "High"
        recommendation = "Customer is at high risk of churning. Immediately offer retention incentives or discounts."
    elif churn_probability > 0.4:
        risk_level = "Medium"
        recommendation = "Customer is at medium risk. Engage with them to understand their concerns and improve satisfaction."
    else:
        risk_level = "Low"
        recommendation = "Customer is unlikely to churn. Continue providing good service."
        
    # Calculate Confidence
    confidence_value = churn_probability if label == "Yes" else (1 - churn_probability)
    confidence = f"{confidence_value * 100:.2f}%"

    return {
        "prediction": label,
        "churn_probability": round(churn_probability, 4),
        "risk_level": risk_level,
        "confidence": confidence,
        "recommendation": recommendation
    }