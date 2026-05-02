import { parseTextVariables, TextVariableResolutionMap } from "../../lib/textVariables";
import { HighlightedText } from "./HighlightedText";

interface VariableTextProps {
  text: string;
  query?: string;
  variableValues?: TextVariableResolutionMap;
  variableClassName?: string;
  highlightClassName?: string;
}

export function VariableText({
  text,
  query = "",
  variableValues,
  variableClassName = "database-variable-token",
  highlightClassName
}: VariableTextProps) {
  const segments = parseTextVariables(text, variableValues);
  const hasQuery = query.trim().length > 0;

  if (segments.length === 1 && segments[0].type === "text") {
    return hasQuery ? <HighlightedText text={text} query={query} className={highlightClassName} /> : <>{text}</>;
  }

  return (
    <>
      {segments.map((segment, index) =>
        segment.type === "variable" ? (
          <span
            key={`${segment.value}:${index}`}
            className={`${variableClassName}${segment.resolution ? " database-variable-token-resolved" : ""}`}
            title={
              segment.resolution
                ? `Source-backed parameter: ${segment.name} = ${segment.resolution.value} (${segment.resolution.sourceKind}: ${segment.resolution.sourceRef})`
                : `Variable parameter: ${segment.name}`
            }
          >
            {segment.resolution?.value ?? segment.value}
          </span>
        ) : hasQuery ? (
          <HighlightedText key={`${segment.value}:${index}`} text={segment.value} query={query} className={highlightClassName} />
        ) : (
          <span key={`${segment.value}:${index}`}>{segment.value}</span>
        )
      )}
    </>
  );
}
