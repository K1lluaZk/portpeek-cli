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

  console.log(listeningPorts);
});