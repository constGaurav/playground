import * as pty from "node-pty";

// For linux/mac I'm using bash
const ptyProcess = pty.spawn("bash", [], {
  name: "xterm-color",
  cols: 80,
  rows: 30,
  cwd: process.env.INIT_CWD + "../user",
  env: process.env,
});

export { ptyProcess };
