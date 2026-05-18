export default function HomePage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6"
      style={{
        background: `radial-gradient(
          ellipse 80% 50% at 50% 0%,
          var(--kairo-silence) 0%,
          transparent 50%
        )`,
      }}
    >
      {/* 主标题区域 */}
      <div className="text-center mb-12">
        <h1
          style={{
            fontFamily: "var(--font-chinese-heading)",
            fontSize: "clamp(48px, 10vw, 72px)",
            fontWeight: 700,
            color: "var(--kairo-speak)",
            marginBottom: "16px",
            letterSpacing: "0.08em",
          }}
        >
          几
        </h1>
        <p
          style={{
            fontFamily: "var(--font-chinese-body)",
            fontSize: "var(--text-body)",
            color: "var(--kairo-whisper)",
            maxWidth: "480px",
            lineHeight: 1.8,
          }}
        >
          万物即将对齐但尚未对齐的那个至高时刻
        </p>
      </div>

      {/* CTA 按钮 */}
      <div className="flex gap-4">
        <button className="btn-kairos">开始探索</button>
        <button
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body)",
            fontWeight: 500,
            color: "var(--kairo-whisper)",
            padding: "10px 24px",
            borderRadius: "var(--radius-button)",
            border: "1px solid var(--kairo-emerging)",
            background: "transparent",
            transition: "all 0.2s ease",
          }}
        >
          了解更多
        </button>
      </div>

      {/* 装饰性元素 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            var(--kairo-emerging) 20%,
            var(--kairo-glimmer) 50%,
            var(--kairo-emerging) 80%,
            transparent
          )`,
          opacity: 0.3,
        }}
      />
    </div>
  )
}
