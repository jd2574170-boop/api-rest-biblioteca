# API REST - Gestión de Espacio de Coworking 🚀

Esta es una API REST robusta construida con **Node.js**, **Express**, **MongoDB** y **Mongoose** para gestionar un espacio de coworking de manera eficiente. El proyecto está estructurado bajo la arquitectura **MVC (Modelo-Vista-Controlador)** y utiliza **ES6 Modules** (`import`/`export`).

## 🛠️ Tecnologías y Características
* **Backend:** Node.js + Express
* **Base de Datos:** MongoDB + Mongoose (Modelos relacionales mediante ObjectIds)
* **Validaciones de negocio integradas:**
  * Control de fechas (fecha de fin obligatoriamente mayor a la de inicio).
  * Cálculo automático del costo total de la reserva basado en el precio por hora de la sala.
  * Validación de solapamientos (evita que se confirme una sala si ya está ocupada en ese horario).
* **Filtros combinables:** Búsqueda avanzada de reservas por estado y sala simultáneamente.

---

## 📌 Documentación de Endpoints y Ejemplos de Pruebas

### 👥 1. Miembros (Members)
* `POST /api/members` - Crear un miembro (Planes válidos: `basic`, `pro`, `enterprise`)
* `GET /api/members` - Listar todos los miembros
* `GET /api/members/:id` - Obtener un miembro por su ID
* `PUT /api/members/:id` - Actualizar un miembro
* `DELETE /api/members/:id` - Eliminar un miembro

#### Ejemplo de Request (POST `http://localhost:5000/api/members`)
```json
{
  "nombre": "Jose Diaz",
  "email": "jose.diaz@example.com",
  "plan": "pro"
}