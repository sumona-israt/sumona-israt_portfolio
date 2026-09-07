export function CoffeeLoader() {
  return (
    <div className="coffee-loader" role="img" aria-label="Loading animation">
      <div className="cup">
        <div className="cup-handle" />
        <div className="smoke one" />
        <div className="smoke two" />
        <div className="smoke three" />
      </div>
      <div className="load" aria-hidden="true">
        ..........................
      </div>
    </div>
  );
}
