"use client";
import { Provider } from "react-redux";
import store from "@/store";

// Components
// import Header from "@/components/Header/index.client";
// import Footer from "@/components/Footer/index.client";
import MetaTags from "@/common/MetaTags/index.server";

// Initializer
import WowJs from "@/initializers/wow.js/index.client";

// Styles
import '@/styles/build.sass';
import 'animate.css/animate.min.css';

export default function RootLayout({ children, params }: { params: any, children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <MetaTags />
      </head>
      <WowJs />
      <body>
        <Provider store={store}>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </Provider>
      </body>
    </html>
  );
}
