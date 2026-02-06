import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "hsl(var(--foreground))",
            maxWidth: "none",
            h1: {
              color: "hsl(var(--foreground))",
              fontWeight: "700",
            },
            h2: {
              color: "hsl(var(--foreground))",
              fontWeight: "600",
              marginTop: "1.5em",
              marginBottom: "0.5em",
            },
            h3: {
              color: "hsl(var(--foreground))",
              fontWeight: "600",
            },
            h4: {
              color: "hsl(var(--foreground))",
              fontWeight: "600",
            },
            p: {
              color: "hsl(var(--foreground))",
            },
            strong: {
              color: "hsl(var(--foreground))",
            },
            a: {
              color: "hsl(var(--primary))",
              textDecoration: "underline",
            },
            code: {
              color: "hsl(var(--foreground))",
              backgroundColor: "hsl(var(--muted))",
              padding: "0.25rem",
              borderRadius: "0.25rem",
              fontWeight: "400",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            pre: {
              backgroundColor: "hsl(var(--muted))",
              color: "hsl(var(--foreground))",
            },
            ul: {
              listStyleType: "disc",
            },
            li: {
              color: "hsl(var(--foreground))",
            },
            "li::marker": {
              color: "hsl(var(--muted-foreground))",
            },
          },
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
