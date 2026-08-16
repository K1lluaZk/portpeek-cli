````md
# <p align="center">🔭 PortPeek — Windows Port Inspector</p>

<p align="center">
CLI ligera para inspeccionar puertos TCP en Windows, identificar procesos asociados y comprobar rápidamente si un puerto está disponible.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18%2B-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Windows-0078D4?style=flat&logo=windows&logoColor=white" alt="Windows">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat" alt="MIT License">
</p>

---

# 📖 Acerca del Proyecto

**PortPeek** es una herramienta de línea de comandos desarrollada para consultar de forma rápida y sencilla los puertos TCP que se encuentran actualmente en estado `LISTENING` en un sistema Windows.

La herramienta permite visualizar información relevante como el **puerto**, la **dirección local**, el **PID** y el **proceso** asociado.

El proyecto fue desarrollado utilizando **Node.js y TypeScript**, aprovechando herramientas nativas de Windows como `netstat` y `tasklist`.

El objetivo principal de PortPeek es ofrecer una alternativa pequeña y directa para resolver una tarea cotidiana durante el desarrollo y la administración de sistemas: **saber qué está utilizando un puerto determinado**.

---

# ✨ Características Principales

- 🔎 Lista los puertos TCP actualmente en estado `LISTENING`.
- 🧩 Identifica el proceso asociado a cada puerto.
- 🆔 Muestra el PID del proceso.
- 🌐 Muestra la dirección local utilizada por el puerto.
- ⚡ Permite comprobar rápidamente un puerto específico.
- 📋 Indica si un puerto está disponible o en uso.
- 🪶 CLI ligera y sencilla.
- 🪟 Diseñada específicamente para Windows.
- 🚫 Sin dependencias externas necesarias durante la ejecución.

---

# 🛠 Tecnologías Utilizadas

### Lenguaje

- TypeScript

### Runtime

- Node.js

### Herramientas del sistema

- `netstat`
- `tasklist`

### Gestión de paquetes

- npm

### Herramientas de desarrollo

- Git
- GitHub
- Visual Studio Code

---

# 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/K1lluaZk/portpeek-cli.git
````

### 2. Entrar al proyecto

```bash
cd portpeek-cli
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Compilar el proyecto

```bash
npm run build
```

---

# 💻 Uso

## Listar puertos

Ejecuta:

```bash
node dist/index.js
```

El comando mostrará los puertos TCP que están actualmente escuchando.

Ejemplo:

```text
PORTPEEK

┌─────────┬──────┬─────────────┬──────┬────────────────┐
│ (index) │ port │ address     │ pid  │ process        │
├─────────┼──────┼─────────────┼──────┼────────────────┤
│    0    │ 135  │ '0.0.0.0'   │ 1112 │ 'svchost.exe'  │
│    1    │ 445  │ '0.0.0.0'   │ 4    │ 'System'       │
│    2    │ 3306 │ '0.0.0.0'   │ 968  │ 'mysqld.exe'   │
│    3    │ 5432 │ '0.0.0.0'   │ 7816 │ 'postgres.exe' │
└─────────┴──────┴─────────────┴──────┴────────────────┘
```

---

## Comprobar un puerto específico

Puedes consultar directamente un puerto:

```bash
node dist/index.js 5432
```

Si el puerto está siendo utilizado:

```text
Port 5432 is in use.
```

Si el puerto está disponible:

```bash
node dist/index.js 9999
```

```text
Port 9999 is available.
```

---

## Mostrar ayuda

```bash
node dist/index.js --help
```

También puedes utilizar:

```bash
node dist/index.js -h
```

---

# ⚙️ Instalación como CLI

PortPeek también puede instalarse globalmente desde el proyecto utilizando `npm link`.

Primero compila el proyecto:

```bash
npm run build
```

Después:

```bash
npm link
```

A partir de ese momento puedes utilizar:

```bash
portpeek
```

Para consultar un puerto:

```bash
portpeek 5432
```

Y para mostrar la ayuda:

```bash
portpeek --help
```

---

# 🔍 ¿Cómo funciona?

PortPeek utiliza herramientas nativas disponibles en Windows para obtener la información necesaria.

### `netstat`

Se utiliza para obtener las conexiones TCP y detectar cuáles se encuentran en estado:

```text
LISTENING
```

A partir de esta información se obtiene:

* Dirección local.
* Puerto local.
* PID.
* Estado de la conexión.

### `tasklist`

Posteriormente se utiliza `tasklist` para relacionar cada PID con el nombre del proceso correspondiente.

Por ejemplo:

```text
5432 → PID 7816 → postgres.exe
```

PortPeek combina ambas fuentes y presenta la información de una manera más sencilla de consultar.

---

# 📁 Estructura del Proyecto

```text
portpeek-cli/
│
├── src/
│   └── index.ts
│
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

La carpeta `dist/` se genera durante la compilación y no forma parte del repositorio.

---

# 🧪 Desarrollo

Para compilar el proyecto:

```bash
npm run build
```

Para ejecutar la versión compilada:

```bash
npm start
```

También puedes ejecutar directamente:

```bash
node dist/index.js
```

---

# 📜 Licencia

Este proyecto está disponible bajo la licencia **MIT**.

Consulta el archivo [LICENSE](LICENSE) para obtener más información.

```
