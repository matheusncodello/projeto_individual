create database site_csgo;
use site_csgo;

create table tbUsuario(
idUsuario int primary key auto_increment,
nomeInGame varchar(30),
email varchar(50),
usuario varchar(20),
senha varchar(20)
);

select * from tbUsuario;