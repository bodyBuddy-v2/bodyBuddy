import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

const Provider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <div></div>;
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Provider;
