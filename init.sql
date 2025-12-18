-- MySQL schema inferred from backend models
-- Execute inside the treino_db database

CREATE TABLE IF NOT EXISTS usuarios (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(180) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY uq_usuarios_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS exercicios (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    grupo_muscular VARCHAR(120) NOT NULL,
    descricao TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_exercicios_grupo (grupo_muscular)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS treinos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    usuario_id INT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_treinos_usuario (usuario_id),
    CONSTRAINT fk_treinos_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS sessoes_treino (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    treino_id INT UNSIGNED NOT NULL,
    exercicio_id INT UNSIGNED NOT NULL,
    series INT NOT NULL,
    repeticoes INT NOT NULL,
    peso DECIMAL(8,2) DEFAULT NULL,
    data DATETIME NOT NULL,
    observacoes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_sessoes_treino_treino (treino_id),
    KEY idx_sessoes_treino_exercicio (exercicio_id),
    CONSTRAINT fk_sessoes_treino_treino FOREIGN KEY (treino_id) REFERENCES treinos(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_sessoes_treino_exercicio FOREIGN KEY (exercicio_id) REFERENCES exercicios(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
