/** @format */

import {
  LoggerOptions,
  LogLevelString,
  levelFromName,
  createLogger,
} from "bunyan";

function getDefaultLogLevel(): string {
  return process.env.NODE_ENV === "production" ? "warn" : "debug";
}

function getLogLevel(): LogLevelString {
  return levelFromName[
    process.env.NEXT_PUBLIC_LOG_LEVEL || getDefaultLogLevel()
  ] as LogLevelString;
}

const loggerOptions: LoggerOptions = {
  level: getLogLevel(),
  name: "pokemon",
};

function getLogger() {
  return createLogger(loggerOptions);
}

export default getLogger();
