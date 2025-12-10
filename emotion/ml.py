import os
import pickle
import numpy as np
from django.conf import settings

MODELS_FILES = {
    "CatBoostClassifier": "CatBoostClassifier.pickle",
    "LGBMClassifier": "LGBMClassifier.pickle", 
    "LogisticRegressionCV": "LogisticRegressionCV.pickle",
    "MultinomialNB": "MultinomialNB.pickle",
    "RandomForestClassifier": "RandomForestClassifier.pickle",
    "RidgeClassifierCV": "RidgeClassifierCV.pickle",
    "SVC": "SVC.pickle",
    "XGBClassifier": "XGBClassifier.pickle"
}

MODELS_DIR = os.path.join(settings.BASE_DIR, "emotion", "model_best_weights")
LOADED_MODELS = {}

def get_model(model_name):
    if model_name not in LOADED_MODELS:
        filename = MODELS_FILES.get(model_name, MODELS_FILES["CatBoostClassifier"])
        path = os.path.join(MODELS_DIR, filename)
        
        with open(path, "rb") as f:
            LOADED_MODELS[model_name] = pickle.load(f)
            
    return LOADED_MODELS[model_name]

def predict_emotion(text: str, model_name: str = "CatBoostClassifier") -> str:
    model = get_model(model_name)
    
    messages = [text]
    # Предсказываем класс (0 или 1)
    y = model.predict(messages)[0]
    
    label = "good" if y == 1 else "bad"
    score_str = ""

    if hasattr(model, "predict_proba"):
        proba = model.predict_proba(messages)
        score = float(np.max(proba, axis=1)[0])
        score_str = f" ({score:.2f})"
        
    elif hasattr(model, "decision_function"):
        score_str = "" 
    
    return f"{label}{score_str}"

