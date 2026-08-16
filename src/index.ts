import { exec } from "child_process";

interface Connection {
  protocol: string;
  localAddress: string;
  localPort: number;
  foreignAddress: string;
  foreignPort: number;
  state: string;
  pid: number;
}

interface PortInfo {
  port: number;
  address: string;
  pid: number;
  process: string;
}

exec("netstat -ano -p tcp", (error, stdout) => {
  if (error) {
    console.error(error.message);
    return;
  }

  const connections: Connection[] = stdout
    .split("\n")
    .slice(4)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split(/\s+/);

      const protocol: string = parts[0] ?? "";
      const localPartStr: string = parts[1] ?? "";
      const foreignPartStr: string = parts[2] ?? "";
      const state: string = parts[3] ?? "";
      const pid: number = Number(parts[4]) || 0;

      const [localAddress, localPortStr] = localPartStr.includes(":")
        ? localPartStr.split(":")
        : ["", localPartStr];

      const [foreignAddress, foreignPortStr] = foreignPartStr.includes(":")
        ? foreignPartStr.split(":")
        : ["", foreignPartStr];

      return {
        protocol,
        localAddress: localAddress ?? "",
        localPort: Number(localPortStr) || 0,
        foreignAddress: foreignAddress ?? "",
        foreignPort: Number(foreignPortStr) || 0,
        state,
        pid
      };
    });

  const listeningPorts = connections.filter(
    (connection) => connection.state === "LISTENING"
  );

  exec("tasklist /FO CSV /NH", (error, tasklistOutput) => {
    if (error) {
      console.error(error.message);
      return;
    }

    const processes = new Map<number, string>();

    tasklistOutput
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .forEach((line) => {
        const parts = line.split('","');

        const name = parts[0] ? parts[0].replace(/^"/, "") : "Unknown";
        const pid = parts[1] ? Number(parts[1].replace(/"$/, "")) : 0;

        processes.set(pid, name);
      });

    const result: PortInfo[] = listeningPorts.map((connection) => ({
      port: connection.localPort,
      address: connection.localAddress,
      pid: connection.pid,
      process: processes.get(connection.pid) ?? "Unknown"
    }));

    console.table(result);
  });
});