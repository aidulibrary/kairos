"use client"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
}

export function Logo({ size = "md", showText = false }: LogoProps) {
  const sizes = {
    sm: 28,
    md: 40,
    lg: 56,
  }

  const s = sizes[size]

  return (
    <div className="flex items-center gap-2">
      <svg
        width={s}
        height={s}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 外圆 - 代表时机的边界 */}
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="var(--kairo-glimmer)"
          strokeWidth="1.5"
          opacity="0.6"
        />
        {/* 内部「几」字简化形态 - 代表临界点 */}
        <path
          d="M12 14 L20 14 L20 26 M20 20 L28 20"
          stroke="var(--kairo-presence)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* 中心光点 - 代表「至高时刻」*/}
        <circle
          cx="20"
          cy="20"
          r="2.5"
          fill="var(--kairo-glimmer)"
          style={{
            filter: "drop-shadow(0 0 4px var(--kairo-glimmer))",
          }}
        />
      </svg>
      {showText && (
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: size === "sm" ? "16px" : size === "md" ? "20px" : "24px",
            fontWeight: 700,
            color: "var(--kairo-speak)",
            letterSpacing: "0.02em",
          }}
        >
          KAIROS
        </span>
      )}
    </div>
  )
}
