import { PropsWithChildren, ReactNode } from "react";
import styles from "./Layout.module.css";

type LayoutProps = {
  title: string;
  action?: ReactNode;
  banner?: ReactNode | false;
  footer?: ReactNode | null;
};

export function Layout({ title, action, banner, children, footer }: PropsWithChildren<LayoutProps>) {
  return <>
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>{title}</h1>

        <div>{action}</div>
      </header>

      {banner}

      {children}

      {footer &&
        <footer className={styles.footer}>
          {footer}
        </footer>
      }
    </main>    
  </>
}