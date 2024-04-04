
-- Inserción de datos de ejemplo en la tabla Ubicacion
INSERT INTO location_event (name_location, latitude, longitude, address_location) VALUES
('Ubicacion Ejemplo 1', 40.7128, -74.0060, 'New York, NY, USA'),
('Ubicacion Ejemplo 2', 34.0522, -118.2437, 'Los Angeles, CA, USA');

-- Inserción de datos de ejemplo en la tabla Usuario
INSERT INTO user_info (username, email, user_password) VALUES
('admin', 'admin@admin.com', 'contraseña1'),
('Manuel Comezaña', 'manuel@gmail.com', 'contraseña2');

-- Inserción de datos de ejemplo en la tabla Evento
INSERT INTO event_info (title, description_event, event_date, location_id) VALUES
('Evento Ejemplo 1', 'Descripción del evento 1', '2024-04-03 10:00:00', 1),
('Evento Ejemplo 2', 'Descripción del evento 2', '2024-04-04 15:00:00', 2);

-- Inserción de datos de ejemplo en la tabla Asistencia
INSERT INTO attendance (event_id, user_id, attendance_date) VALUES
(1, 1, '2024-04-03 09:45:00'),
(2, 2, '2024-04-04 14:30:00');