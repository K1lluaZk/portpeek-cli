
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

# 📖 About the Project

**PortPeek** is a command-line tool developed to quickly and easily query TCP ports currently in the `LISTENING` state on a Windows system.

The tool allows you to view relevant information such as the **port**, **local address**, **PID**, and associated **process**.

The project was developed using **Node.js and TypeScript**, leveraging native Windows tools such as `netstat` and `tasklist`.

The main goal of PortPeek is to offer a small and straightforward alternative to solve an everyday task during development and system administration: **knowing what is using a specific port**.

---

# ✨ Main Features

* 🔎 Lists TCP ports currently in the `LISTENING` state.
* 🧩 Identifies the process associated with each port.
* 🆔 Displays the process PID.
* 🌐 Shows the local address used by the port.
* ⚡ Allows you to quickly check a specific port.
* 📋 Indicates whether a port is available or in use.
* 🪶 Lightweight and simple CLI.
* 🪟 Designed specifically for Windows.
* 🚫 No external dependencies required during runtime.

---

# 🛠 Technologies Used

### Language

* TypeScript

### Runtime

* Node.js

### System Tools

* `netstat`
* `tasklist`

### Package Management

* npm

### Development Tools

* Git
* GitHub
* Visual Studio Code

---

# 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/K1lluaZk/portpeek-cli.git

```

### 2. Enter the project folder

```bash
cd portpeek-cli

```

### 3. Install dependencies

```bash
npm install

```

### 4. Build the project

```bash
npm run build

```

---

# 💻 Usage

## List ports

Run:

```bash
node dist/index.js

```

The command will display the TCP ports that are currently listening.

Example:

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

## Check a specific port

You can directly query a port:

```bash
node dist/index.js 5432

```

If the port is in use:

```text
Port 5432 is in use.

```

If the port is available:

```bash
node dist/index.js 9999

```

```text
Port 9999 is available.

```

---

## Show help

```bash
node dist/index.js --help

```

You can also use:

```bash
node dist/index.js -h

```

---

# ⚙️ Installation as a CLI

PortPeek can also be installed globally from the project using `npm link`.

First, build the project:

```bash
npm run build

```

Then:

```bash
npm link

```

From that moment on, you can use:

```bash
portpeek

```

To query a port:

```bash
portpeek 5432

```

And to show the help:

```bash
portpeek --help

```

---

# 🔍 How does it work?

PortPeek uses native tools available in Windows to obtain the necessary information.

### `netstat`

It is used to get TCP connections and detect which ones are in the state:

```text
LISTENING

```

From this information, the following is obtained:

* Local address.
* Local port.
* PID.
* Connection state.

### `tasklist`

Next, `tasklist` is used to relate each PID to the name of the corresponding process.

For example:

```text
5432 → PID 7816 → postgres.exe

```

PortPeek combines both sources and presents the information in a much easier way to consult.

---

# 📁 Project Structure

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

The `dist/` folder is generated during compilation and is not part of the repository.

---

# 🧪 Development

To compile the project:

```bash
npm run build

```

To run the compiled version:

```bash
npm start

```

You can also run it directly:

```bash
node dist/index.js

```

---

# 📜 License

This project is available under the **MIT** license.

Check the [LICENSE](https://www.google.com/search?q=LICENSE) file for more information.
