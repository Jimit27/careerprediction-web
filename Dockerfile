FROM python:3.11

# assumes app.py contains your flask app
COPY app.py app.py
COPY requirements.txt requirements.txt
COPY mldata.csv mldata.csv
COPY weights.pkl weights.pkl
# install flask and gunicorn
RUN pip install -r requirements.txt

# this configuration is needed for your app to work, do not change it
ENTRYPOINT ["gunicorn", "app:app", "run", "--bind", "0.0.0.0:80"]