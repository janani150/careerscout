export default function Loading({
  message = "Loading AI Scout recommendations...",
}) {
  return (
    <div className="flex flex-col items-center justify-center p-12 w-full gap-3">
      <div className="w-10 h-10 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin"></div>
      <p className="text-xs text-on-surface-variant font-medium animate-pulse">
        {message}
      </p>
    </div>
  );
}
