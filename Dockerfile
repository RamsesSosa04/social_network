# 1. Imagen base con Python
FROM python:3.11

# 2. Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copia los archivos del proyecto al contenedor
COPY . .

# 4. Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# 5. Expone el puerto que usará Flask
EXPOSE 5000

# 6. Define cómo se ejecutará la app
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]

ENV FLASK_APP=run.py
ENV FLASK_ENV=development
