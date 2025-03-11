'use client'
import { Provider } from "react-redux";
import store from "../store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from './Navbar/index'

function PageLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Navbar/>
        {children}
      </QueryClientProvider>
    </Provider>
  )
}

export default PageLayout