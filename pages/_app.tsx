import { Fotter, MobailNavbar, Navbar } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { ToastProvider, useToasts } from "react-toast-notifications";

interface Props {
  children: ReactNode;
}

const MyApp = ({ children }: Props) => {
  return <div className="min-h-[60vh]">{children}</div>;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-openSans">
      <Head>
        <link rel="icon" href="/junkker.png" />
      </Head>
      <RecoilRoot>
        <ToastProvider>
          <Navbar />
          <MobailNavbar/>
          <MyApp>
            <Component {...pageProps} />
          </MyApp>
          <div className="">
            <Fotter />
          </div>
        </ToastProvider>
      </RecoilRoot>
    </div>
  );
}
