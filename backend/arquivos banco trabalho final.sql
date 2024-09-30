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

-- Copiando estrutura para tabela backend.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(55) DEFAULT NULL,
  `idade` int(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `telefone` varchar(50) DEFAULT NULL,
  `cpf` varchar(50) DEFAULT NULL,
  `jogo` varchar(50) DEFAULT NULL,
  `hora_de_devolucao` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_cliente`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela backend.clientes: ~1 rows (aproximadamente)
DELETE FROM `clientes`;
INSERT INTO `clientes` (`id_cliente`, `nome`, `idade`, `email`, `telefone`, `cpf`, `jogo`, `hora_de_devolucao`) VALUES
	(25, 'Mateus', 16, '@mdaiogo', '3123425', '1245312', 'Pokemon', 12);

-- Copiando estrutura para tabela backend.comidas
CREATE TABLE IF NOT EXISTS `comidas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `preco` decimal(6,2) DEFAULT NULL,
  `validade` decimal(20,6) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela backend.comidas: ~1 rows (aproximadamente)
DELETE FROM `comidas`;
INSERT INTO `comidas` (`id`, `nome`, `preco`, `validade`, `quantidade`) VALUES
	(18, 'Jaca', 8.00, 12.000000, 23);

-- Copiando estrutura para tabela backend.jogos
CREATE TABLE IF NOT EXISTS `jogos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL DEFAULT '',
  `preco` decimal(20,6) NOT NULL DEFAULT 0.000000,
  `ano_publicacao` int(11) NOT NULL DEFAULT 0,
  `editora` varchar(50) NOT NULL DEFAULT '0',
  `alugados` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela backend.jogos: ~3 rows (aproximadamente)
DELETE FROM `jogos`;
INSERT INTO `jogos` (`id`, `titulo`, `preco`, `ano_publicacao`, `editora`, `alugados`) VALUES
	(5, 'Mordaw', 133.000000, 12, 'Maco', 'sim'),
	(6, 'Rim World', 234.000000, 23, 'serian', 'não'),
	(7, 'Paramont', 145.000000, 42, 'Bro', 'não');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
