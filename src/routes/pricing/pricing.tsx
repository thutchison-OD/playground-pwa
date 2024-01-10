import { Link } from "react-router-dom";
import styles from "./pricing.module.css";
import { Layout } from "@/components";

export function Component() {
    return <Layout
        title="Pricing"
        action={<><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/pricing">Pricing</Link></>}
        footer="I am a footer"
    >
        <p>Lorem Ipsum</p>
    </Layout>
}