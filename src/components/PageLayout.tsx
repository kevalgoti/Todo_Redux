'use client'
import { Provider } from "react-redux";
import store from "../store/store";

function PageLayout({children} : {children : React.ReactNode}) {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default PageLayout