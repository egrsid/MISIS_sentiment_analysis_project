import os
import pickle
import numpy as np
from django.conf import settings

MODEL_NAME = "LogisticRegressionCV.pickle"
MODELS_DIR = os.path.join(settings.BASE_DIR, "emotion", "model_best_weights")

with open(os.path.join(MODELS_DIR, MODEL_NAME), "rb") as f:
    model = pickle.load(f)

def predict_emotion(text: str) -> str:
    messages = [text]
    y = model.predict(messages)[0]
    proba = model.predict_proba(messages)
    score = float(np.max(proba, axis=1)[0])
    label = "good" if y == 1 else "bad"
    return f"{label} ({score:.2f})"
