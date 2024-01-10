import { ComponentProps, Fragment } from 'react';
import { RouterProvider } from 'react-router-dom';
import "./main.css";

export type AppProps = {router: ComponentProps<typeof RouterProvider>["router"]};

export function App({router}: AppProps) {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}
