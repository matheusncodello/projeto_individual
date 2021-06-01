create database site_csgo;
use site_csgo;

create table tbUsuario(
	idUsuario int primary key auto_increment,
	nomeInGame varchar(30),
	email varchar(50),
	usuario varchar(20),
	senha varchar(20)
);

create table tbPartida(
	idPartida int primary key auto_increment,
    mapa varchar(20),
    rodadasJogadas varchar(10),
    resultado varchar(10),
    horario datetime
) auto_increment = 10000;

create table tbKDUser(
    fkUsuario int, foreign key (fkUsuario) references tbUsuario(idUsuario),
    fkPartida int, foreign key (fkPartida) references tbPartida(idPartida),
    kdUser decimal(4,2),
	dinheiroGasto int
);

create table tbCompras(
	idCompra int primary key auto_increment,
    itensComprados varchar(100),
    valorGasto decimal(7,2),
    horarioCompra datetime,
    fkUsuario int, foreign key (fkUsuario) references tbUsuario(idUsuario)
);

select * from tbUsuario;
select * from tbPartida;
select * from tbKDUser;
select * from tbCompras;