// import ApplicationModal from "@/components/ApplicationModal";
import Error from "@/components/Error";
import AppInitializeProvider from "@/providers/AppInitializeProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import DatadogLogProvider from "@/providers/DatadogLogProvider";
import { AppProps } from "next/app";
import Head from "next/head";
// ______________________________________________________
//
const Index = (props: AppProps) => {
  const { Component, pageProps } = props;
  const LoadingComponent = null;
  return (
    <DatadogLogProvider projectId="">
      <ReduxProvider loading={LoadingComponent}>
        <AppInitializeProvider
          loading={LoadingComponent}
          renderError={(err) => <Error err={err} />}
        >
          <Head>
            <title>SPA by Next.js</title>
          </Head>
          <Component {...pageProps} />
          {/* <ApplicationModal /> */}
        </AppInitializeProvider>
      </ReduxProvider>
    </DatadogLogProvider>
  );
};
// ______________________________________________________
//
export default Index;
