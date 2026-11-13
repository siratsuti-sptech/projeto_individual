-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE tabito;

USE tabito;

CREATE TABLE usuario(
idTabito INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45) NOT NULL,
dtCadastrado DATETIME DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE continente (
idContinente INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL UNIQUE
);

CREATE TABLE pais (
idPais INT PRIMARY KEY AUTO_INCREMENT,
codigo CHAR(3) NOT NULL UNIQUE,
nome VARCHAR(45),
nome_jp VARCHAR(45),
fkContinente INT,
CONSTRAINT fkContinentePais FOREIGN KEY (fkContinente)
REFERENCES continente (idContinente)
);

CREATE TABLE lugar (
idLugar INT AUTO_INCREMENT,
fkUsuario INT,
CONSTRAINT fkUsuarioLugar FOREIGN KEY (fkUsuario)
REFERENCES usuario (idTabito) ON DELETE CASCADE,
fkPais INT,
CONSTRAINT fkPaisLugar FOREIGN KEY (fkPais)
REFERENCES pais (idPais),
statuss VARCHAR(10),
CONSTRAINT chkStatus CHECK(statuss IN('visitado', 'desejo')),
CONSTRAINT pkComposta PRIMARY KEY (idLugar, fkUsuario, fkPais)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	temperatura DECIMAL,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fk_empresa) values ('Aquário de Peixe-dourado', 2);

SELECT * FROM usuario;



ALTER TABLE usuario ADD COLUMN cpf CHAR(11) UNIQUE;