<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Incomex API 

Esta es una API desarrollada con [NestJS](https://nestjs.com/):

- **Regla:** .
- **Respuesta exitosa:** .

## **Pasos para Configurar el Proyecto**

### **1. Clonar el Proyecto**
Clona este repositorio en tu máquina local:
```bash
git clone 
```

### **2. Instalar Dependencias**
Ejecuta el siguiente comando para instalar las dependencias del proyecto:
```bash
yarn install
```

### **3. Configurar las Variables de Entorno**
- Copia el archivo `.env.template` y renómbralo como `.env`:
```bash
cp .env.template .env
```
- Ajusta las variables de entorno según tu configuración local (por ejemplo, las credenciales de la base de datos).

### **4. Levantar la Base de Datos**
Utiliza `docker-compose` para levantar una instancia de PostgreSQL:
```bash
docker-compose up -d
```
Esto creará una base de datos local en un contenedor Docker.

- **URL de conexión predeterminada:**
  ```
  postgres://<USERNAME>:<PASSWORD>@localhost:5432/<DATABASE_NAME>
  ```

### **5. Iniciar la Aplicación**
Inicia la aplicación en modo de desarrollo:
```bash
yarn start:dev
```

La API estará disponible en:
```
http://localhost:3000/api
```

### **6. Probar la API**