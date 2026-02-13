"use client"

import { useMemo } from "react"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

const CODE_SNIPPETS = [
  "const model = tf.sequential()",
  "import torch.nn as nn",
  "def forward(self, x):",
  "optimizer.zero_grad()",
  "loss.backward()",
  "np.array([1, 0, 1])",
  "model.fit(X_train, y_train)",
  "return prediction",
  "fetch('/api/inference')",
  "async function predict()",
  "conv2d(64, kernel=3)",
  "epochs = 100",
  "accuracy: 0.97",
  "transform(image)",
  "embedding.shape",
  "torch.cuda.is_available()",
  "pipeline('sentiment')",
  "response.json()",
  "plt.plot(losses)",
  "dropout(p=0.3)",
  "batch_size = 32",
  "learning_rate = 1e-4",
  "softmax(logits)",
  "tokenizer.encode(text)",
]

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

function generateSnippets(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const r = (s: number) => seededRandom(i * 100 + s)
    return {
      text: CODE_SNIPPETS[i % CODE_SNIPPETS.length],
      left: r(1) * 90 + 2,
      startY: r(2) * 40 + 100,
      duration: 14 + r(3) * 18,
      delay: r(4) * -20,
      opacity: 0.06 + r(5) * 0.09,
      size: 11 + r(6) * 4,
      drift: (r(7) - 0.5) * 60,
    }
  })
}

const BLOB_CONFIG = [
  {
    className: "left-[10%] top-[15%] h-[420px] w-[420px] bg-primary/12",
    animate: { x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.12, 0.95, 1] },
    duration: 18,
  },
  {
    className: "right-[10%] bottom-[20%] h-[360px] w-[360px] bg-secondary/12",
    animate: { x: [0, -35, 25, 0], y: [0, 25, -35, 0], scale: [1, 0.92, 1.1, 1] },
    duration: 22,
  },
  {
    className: "left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 bg-accent/8",
    animate: { x: [0, 20, -30, 0], y: [0, -40, 15, 0], scale: [1, 1.08, 0.96, 1] },
    duration: 25,
  },
]

export function HeroBackground() {
  const prefersReduced = useReducedMotion()
  const [snippets, setSnippets] = useState<ReturnType<typeof generateSnippets>>([])

  useEffect(() => {
    setSnippets(generateSnippets(28))
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Soft gradient blobs */}
      {BLOB_CONFIG.map((blob, i) =>
        prefersReduced ? (
          <div key={`blob-${i}`} className={`absolute rounded-full blur-[120px] ${blob.className}`} />
        ) : (
          <motion.div
            key={`blob-${i}`}
            className={`absolute rounded-full blur-[120px] ${blob.className}`}
            animate={blob.animate}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ),
      )}

      {/* Floating code snippets */}
      {snippets.map((s, i) =>
        prefersReduced ? (
          <span
            key={`code-${i}`}
            className="absolute whitespace-nowrap font-mono text-primary"
            style={{
              left: `${s.left}%`,
              top: `${s.startY}%`,
              fontSize: `${s.size}px`,
              opacity: s.opacity,
            }}
          >
            {s.text}
          </span>
        ) : (
          <motion.span
            key={`code-${i}`}
            className="absolute whitespace-nowrap font-mono text-primary"
            style={{
              left: `${s.left}%`,
              fontSize: `${s.size}px`,
              opacity: 0,
            }}
            animate={{
              y: [`${s.startY}vh`, "-10vh"],
              x: [0, s.drift],
              opacity: [0, s.opacity, s.opacity, 0],
            }}
            transition={{
              duration: s.duration,
              delay: s.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {s.text}
          </motion.span>
        ),
      )}

      {/* Noise overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.03]">
        <filter id="hero-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise)" />
      </svg>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  )
}
