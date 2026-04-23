#  API de Inventario - Node.js + Express + Prisma

API REST para la gestión de productos, bodegas, inventarios y movimientos.

---

## Tecnologías usadas

* Node.js
* Express
* Prisma ORM
* PostgreSQL
* GraphQL (Pendiente Implementacion)
* Swagger (Documentación API)

---

## Requisitos previos

Antes de iniciar, asegúrate de tener instalado:

* Node.js (v18 o superior)
* PostgreSQL
* npm o yarn

---

##  Clonar el proyecto

```bash
git clone <URL_DEL_REPOSITORIO>
cd nombre-del-proyecto
```

---

##  Instalar dependencias

```bash
npm install
```

---

## Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
DATABASE_URL="postgresql://usuario:password@localhost:5432/nombre_db"
PORT=3000
```

### Ejemplo:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/inventario_db"
PORT=3000
```

---

##  Configurar base de datos

### Crear la base de datos

```sql
CREATE DATABASE inventario_db;
```

---

### Ejecutar migraciones de Prisma

```bash
npx prisma migrate dev --name init
```

---

### Generar cliente Prisma

```bash
npx prisma generate
```

---

## Ejecutar el proyecto

```bash
npm run dev
```

o

```bash
node src/index.js
```

---

## Acceder a la API

Base URL:

```
http://localhost:3000/api
```

---

## Documentación Swagger

Accede a:

```
http://localhost:3000/api-docs
```



##  Endpoints principales

###  Productos

* POST /api/productos
* GET /api/productos
* GET /api/productos/:id
* PUT /api/productos/:id
* DELETE /api/productos/:id

---

###  Bodegas

* POST /api/bodegas
* GET /api/bodegas
* GET /api/bodegas/:id
* PUT /api/bodegas/:id
* DELETE /api/bodegas/:id

---

### Inventarios

* POST /api/inventarios
* GET /api/inventarios
* GET /api/inventarios/:id
* DELETE /api/inventarios/:id

---

### 🔄 Movimientos

* POST /api/movimientos
* GET /api/movimientos


## Comandos útiles

```bash
# Ver base de datos visualmente
npx prisma studio

# Resetear base de datos
npx prisma migrate reset

# Generar cliente Prisma
npx prisma generate
```





Desarrollado como sistema de inventario / prueba técnica.
