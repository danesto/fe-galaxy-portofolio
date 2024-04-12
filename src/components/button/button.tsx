import Link from "next/link";
import styles from "./button.module.css";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "link";
};

const Button = ({ href, children, variant = "primary" }: ButtonProps) => {
  if (href)
    return (
      <Link href={href} className={styles[variant]}>
        {children}
      </Link>
    );

  return <button className={styles[variant]}>{children}</button>;
};

export { Button };
