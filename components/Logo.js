const h = React.createElement;

function Logo({ className = "h-10 w-auto", color1 = "#2563eb", color2 = "#374151", taglineColor = "#6b7280" }) {
  return h(
    'svg',
    {
      className: className,
      viewBox: "0 0 205 50",
      xmlns: "http://www.w3.org/2000/svg"
    },
    h('g', { transform: "translate(0, -5)"},
      h('path', {
        d: "M23.5,2.5 A22.5 22.5 0 0 1 68.5 11.5",
        stroke: color1,
        strokeWidth: "4",
        fill: "none",
        strokeLinecap: "round"
      }),
      h('text', {
        x: "0", y: "35", fontFamily: "Inter, sans-serif", fontSize: "30", fontWeight: "800", fill: color2
      }, "EVTI"),
      h('text', {
        x: "85", y: "35", fontFamily: "Inter, sans-serif", fontSize: "30", fontWeight: "800", fill: color1
      }, "360"),
    ),
    h('text', {
      x: "0", y: "46", fontFamily: "Inter, sans-serif", fontSize: "9", fontWeight: "500", fill: taglineColor, letterSpacing: "0.5"
    }, "evolución tecnológica e innovación")
  );
}

export default Logo;
