DROP DATABASE IF EXISTS Gestion_de_Tickets;
CREATE DATABASE Gestion_de_Tickets;
USE Gestion_de_Tickets;

Create Table tecnico (
  idTecnico int auto_increment,
  name varchar(100),
  email varchar(100),
  password varchar(100),
  primary key (idTecnico)
);

Create Table area (
idArea int auto_increment,
name varchar(100),
primary key (idArea)
);

Create Table departamento (
idDepartamento int auto_increment,
name varchar(100),
primary key (idDepartamento)
);

Create Table dispositivo (
idDispositivo int auto_increment,
name varchar(100),
primary key (idDispositivo)
);

Create Table tickets (
idTicket int auto_increment,
extension int,
idDepartamento int,
idDispositivo int,
idArea int,
descripcion varchar(100),
#ruta varchar(100),
imagen blob,
date timestamp,
primary key(idTicket),
constraint fk_departamento_tickets1
	foreign key (idDepartamento) references departamento(idDepartamento),
constraint fk_dispositivo_tickets1
	foreign key (idDispositivo) references dispositivo(idDispositivo),
constraint fk_area_tickets1
	foreign key (idArea) references area(idArea)
);

Create Table tipo_status (
idStatus int auto_increment,
name varchar(100),
primary key (idStatus)
);

Create Table ticket_status (
idTicket int auto_increment,
idTecnico int,
start_date datetime,
end_date datetime,
idStatus int,
constraint fk_ticket_ticket_status1 
	foreign key (idTicket) references tickets(idTicket),
constraint fk_tecnico_ticket_status1 
	foreign key (idTecnico) references tecnico(idTecnico),
constraint fk_tipo_status_ticket_status1 
	foreign key (idStatus) references tipo_status(idStatus)
);


/*
Create Table tipo_tecnico (
idTipoTecnico int, 
name varchar(100),
primary key (idTipoTecnico)
);
*/

Create Table tipo_tecnico_has_tecnicos (
idArea int auto_increment,
idTecnico int,
constraint fk_area_tipo_tecnico_has_tecnicos1
	foreign key (idArea) references area(idArea),
constraint fk_tecnico_tipo_tecnico_has_tecnicos
	foreign key (idTecnico) references tecnico(idTecnico)
); 

Create Table departamento_has_dispositivos ( 
idDepartamento int,
idDispositivo int,
constraint fk_departamento_departamento_has_dispositivos
	foreign key (idDepartamento) references departamento(idDepartamento),
constraint fk_dispositivo_departamento_has_dispositivos
	foreign key (idDispositivo) references dispositivo(idDispositivo)
);

Create Table admin (
  idAdmin int auto_increment,
  email varchar(100),
  password varchar(100),
  primary key (idAdmin)
);

Create Table catalogo_piezas (
  idPieza int auto_increment,
  name varchar(100),
  primary key (idPieza)
);

Create Table dispositivo_has_piezas(
idDispositivo int,
idPieza int,
cantidad int,
constraint fk_dispositivo_dispositivo_has_piezas
	foreign key (idDispositivo) references dispositivo(idDispositivo),
constraint fk_catalogo_piezas_dispositivo_has_piezas
	foreign key (idPieza) references catalogo_piezas(idPieza)
)

select * from tecnico;
select * from tickets;
select * from departamento;
select * from dispositivo;
select * from area;


INSERT INTO departamento(name)
VALUES 
("Laboratorio"),
("Urgencias"),
("Mantenimiento"),
("Recepcion"),
("Farmacia");

INSERT INTO dispositivo(name)
VALUES 
("PC"),
("Telefono"),
("Impresora"),
("Lampara"),
("Clima");

INSERT INTO area(name)
VALUES 
("Hardware"),
("Software");




-- Ref: departamento_has_dispositivos.departamento_id - departamento.id
-- Ref: tipo_status.id - ticket_status.status_id
-- Ref: tickets.id - ticket_status.ticket_id
-- Ref: dispositivos.id - tickets.dispositivo_id
-- Ref: tickets.departamento_id - departamento.id
-- Ref: tecnico.id < tipo_tecnico_has_tecnicos.id_tecnico
--  Ref: tipo_tecnico.id < tipo_tecnico_has_tecnicos.id_area
-- Ref: ticket_status.tecnico_id - tecnico.id