// ABOUTME: Animated word-by-word reveal for hero titles.
// ABOUTME: Splits text into spans with staggered color animation from muted to copy.

interface WordRevealProps {
  text: string;
  /** Base delay in seconds before the first word starts */
  baseDelay?: number;
  /** Delay increment between each word in seconds */
  increment?: number;
}

export function WordReveal({ text, baseDelay = 0.3, increment = 0.08 }: WordRevealProps) {
  const words = text.split(' ');

  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block animate-word-reveal"
          style={{ animationDelay: `${baseDelay + i * increment}s` }}
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </>
  );
}
