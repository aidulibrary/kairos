export function WindLine() {
  return (
    <div
      className="wind-line"
      style={{
        width: "120px",
        height: "2px",
        background: `linear-gradient(
          90deg,
          transparent,
          var(--kairo-glimmer) 20%,
          var(--kairo-glimmer) 80%,
          transparent
        )`,
        borderRadius: "var(--radius-full)",
        opacity: 0.6,
      }}
    />
  )
}
