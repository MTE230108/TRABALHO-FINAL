-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.32-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para backend
CREATE DATABASE IF NOT EXISTS `backend` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `backend`;

-- Copiando estrutura para tabela backend.aluguels
CREATE TABLE IF NOT EXISTS `aluguels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hora_de_devolucao` datetime DEFAULT NULL,
  `preco` varchar(50) DEFAULT NULL,
  `devolvido` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela backend.aluguels: ~2 rows (aproximadamente)
INSERT INTO `aluguels` (`id`, `hora_de_devolucao`, `preco`, `devolvido`) VALUES
	(1, NULL, NULL, NULL),
	(2, '0000-00-00 00:00:00', 'rego', 0);

-- Copiando estrutura para tabela backend.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nome` int(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telefone` varchar(50) DEFAULT NULL,
  `jogo` varchar(50) DEFAULT NULL,
  `cpf` varchar(50) DEFAULT NULL,
  `hora_de_devolucao` decimal(20,6) DEFAULT NULL,
  PRIMARY KEY (`id_cliente`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela backend.clientes: ~5 rows (aproximadamente)
INSERT INTO `clientes` (`id_cliente`, `nome`, `email`, `telefone`, `endereco`, `cpf`, `hora_de_jogo`) VALUES
	(1, 0, 'lobachabot@gmail.com', 'ma', 'lobo rega', 'nao sei', 1000.000000),
	(2, 0, 'banana@gmail.com', 'ma', 'lobo rega', 'nao sei', 1000.000000),
	(3, 0, 'humano@gmail.com', 'touro', 'rego', 'sei la', 10.000000),
	(4, 0, 'humano@gmail.com', 'touro', 'rego', 'sei la', 10.000000),
	(5, 0, 'humano@gmail.com', 'touro', 'rego', 'sei la', 10.000000);

-- Copiando estrutura para tabela backend.jogos
CREATE TABLE IF NOT EXISTS `jogos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL DEFAULT '',
  `preco` decimal(20,6) NOT NULL DEFAULT 0.000000,
  `ano_publicacao` int(11) NOT NULL DEFAULT 0,
  `editora` varchar(50) NOT NULL DEFAULT '0',
  `alugados` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela backend.jogos: ~1 rows (aproximadamente)
INSERT INTO `jogos` (`id`, `titulo`, `preco`, `ano_publicacao`, `editora`, `alugados`) VALUES
	(1, 'timertops', 12.000000, 1234, 'rego', 20);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
