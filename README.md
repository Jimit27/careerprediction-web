# Career Prediction Website

My final-year BSc Information Technology project (University of Mumbai, 2024): a web app that asks a student about their skills, interests and working style, and recommends one of 12 tech job roles.

## What's in it

| Part | Files | Stack |
|---|---|---|
| Model training | `careerPredictionModel.ipynb`, `mldata.csv` | pandas, scikit-learn, XGBoost |
| Prediction API | `app.py` (`POST /predict`), `Dockerfile` | Flask, gunicorn |
| Streamlit app with login | `app1.py`, `db.py` | Streamlit, streamlit-authenticator, SQLite |
| Web front end | `frontend/` | Next.js, TypeScript, Tailwind CSS, Auth0 |

The notebook encodes 19 survey answers (coding and logic ratings, hackathons, interests, preferred company type and so on) and compares a decision tree, SVM, random forest and XGBoost. The decision tree is saved as `weights.pkl` and served by the API.

## Run it

```bash
pip install -r requirements.txt

# Flask API on port 5000
python app.py

# or the Streamlit app (copy the example config and add your own users first)
cp config.example.yaml config.yaml
streamlit run app1.py

# front end
cd frontend && yarn install && yarn dev
```

## Limitations

- The training data has weak signal: on held-out data the models perform close to chance across the 12 roles. The project is mainly an exercise in building the full stack, from notebook to API to front end.
- This was a student project and has not been maintained since 2024.
