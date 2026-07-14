import joblib
import pandas as pd

# Load saved objects
model = joblib.load("models/customer_churn_model.pkl")
scaler = joblib.load("models/scaler.pkl")
encoder = joblib.load("models/encoder.pkl")

print("All files loaded successfully!")