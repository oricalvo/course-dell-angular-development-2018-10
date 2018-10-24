export function createLogger(prefix: string) {
  return console.log.bind(console, prefix + ">");
}
