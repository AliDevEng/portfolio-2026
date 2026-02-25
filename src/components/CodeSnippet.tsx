import { codeSnippetData } from "@/lib/data";

export default function CodeSnippet() {
  return (
    <div className="relative rounded-xl border border-gray-800 bg-gray-950/80 backdrop-blur-sm shadow-2xl shadow-red-500/5 overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-auto text-xs text-gray-500 font-mono flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full bg-red-400/60" />
          {codeSnippetData.title}
        </span>
      </div>

      {/* Code body */}
      <div className="p-5 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed">
          <code>
            {codeSnippetData.lines.map((line, i) => (
              <div key={i} className="flex">
                <span className="mr-4 inline-block w-6 text-right text-gray-600 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{
                    __html: highlightSyntax(line),
                  }}
                />
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

/* Minimal syntax "highlighter" – keeps it lightweight */
function highlightSyntax(line: string): string {
  // First: HTML-escape
  const escaped = line
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Tokenize into strings and non-strings so replacements don't overlap
  const parts = escaped.split(/(".*?")/g);
  const highlighted = parts.map((part) => {
    // If it's a quoted string, wrap in red
    if (part.startsWith('"') && part.endsWith('"')) {
      return `<span class="text-red-300">${part}</span>`;
    }
    // Otherwise apply keyword + property highlighting
    return part
      .replace(
        /\b(const|export|default)\b/g,
        '<span class="text-purple-400">$1</span>',
      )
      .replace(
        /\b(name|role|location|stack|focus)\b(?=:)/g,
        '<span class="text-gray-100">$1</span>',
      );
  });

  return highlighted.join("");
}
