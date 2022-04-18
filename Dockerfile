FROM python:3.10

ENV PYTHONUNBUFFERED 1

WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app

EXPOSE 8000

#ENTRYPOINT ["python", "mysite/manage.py"]
#CMD ["runserver", "0.0.0.0:8000"]

