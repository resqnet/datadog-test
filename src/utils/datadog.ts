import { ErrorObject } from "@/utils/error";
import { Context } from "@datadog/browser-core";
import { datadogLogs } from "@datadog/browser-logs";
// ______________________________________________________
//
export function errorLog(err: ErrorObject, context?: Context): void {
  if (process.env.ENVIRONMENT === "test" || process.env.ENVIRONMENT === "local")
    return;
  datadogLogs.logger.error(err.message, { ...err, context });
}
