import { parse } from "@/utils/cookie";
import { datadogLogs } from "@datadog/browser-logs";
import React from "react";
// ______________________________________________________
//
type Props = {
  projectId: string | string[] | undefined;
};
// ______________________________________________________
//
const DatadogLogger: React.FC<Props> = (props) => {
  React.useEffect(() => {
    if (
      process.env.ENVIRONMENT === "test" ||
      process.env.ENVIRONMENT === "local"
    )
      return;
    if (!props.projectId || typeof props.projectId !== "string") return;
    const cookie = parse(document.cookie);
    // ______________________________________________________
    //
    // Logs
    //
    datadogLogs.init({
      clientToken: process.env.DATADOG_LOGS_CLIENT_TOKEN || "",
      site: 'test.com',
      forwardErrorsToLogs: true,
      sampleRate: 100,
    });
    // 障害調査などに必要な情報を追加
    datadogLogs.setLoggerGlobalContext({
      user_id: cookie.user_id,
      project_id: props.projectId,
    });
  }, [props.projectId]);

  return <>{props.children}</>;
};

export default DatadogLogger;
