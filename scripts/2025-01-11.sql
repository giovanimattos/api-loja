CREATE TABLE `tj_pessoa_contato` (
  `pescodigo` int(11) NOT NULL AUTO_INCREMENT,
  `dtultimocontato` datetime DEFAULT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`pescodigo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;