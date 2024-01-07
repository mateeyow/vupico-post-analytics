'use client';
import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const data = [1, 2, 3, 4, 5, 6, 4, 8, 9];
const words = [100, 200, 300, 400, 500, 600];

type BarGraphProps = {
  width?: number;
  height?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
};

export default function BarGraph({
  width = 640,
  height = 400,
  marginLeft = 40,
  marginRight = 40,
  marginBottom = 40,
  marginTop = 40,
}: BarGraphProps) {
  const gx = useRef<SVGGElement>(null);
  const gy = useRef<SVGGElement>(null);

  const extent = d3.extent(words) as [number, number];
  const x = d3.scaleLinear([0, data.length], [marginLeft, width - marginRight]);
  const y = d3.scaleLinear(extent, [height - marginTop, marginBottom]);

  useEffect(() => {
    if (gx.current) {
      d3.select(gx.current).call(d3.axisBottom(x));
    }
  }, [x, gx]);

  useEffect(() => {
    if (gy.current) {
      d3.select(gy.current).call(d3.axisLeft(y));
    }
  }, [y, gy]);

  return (
    <svg width={width} height={height}>
      <g ref={gx} transform={`translate(0, ${height - marginBottom})`} />
      <g ref={gy} transform={`translate(${marginLeft}, 0)`} />
    </svg>
  );
}

//   width = 640,
//   height = 400,
//   marginTop = 20,
//   marginRight = 20,
//   marginBottom = 20,
//   marginLeft = 20
// const x = d3.scaleLinear(
//   [0, data.length - 1],
//   [marginLeft, width - marginRight]
// );
// const y = d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]);
// const line = d3.line((d, i) => x(i), y);
// return (
//   <svg width={width} height={height}>
//     <path
//       fill="none"
//       stroke="currentColor"
//       stroke-width="1.5"
//       d={line(data)}
//     />
//     <g fill="white" stroke="currentColor" stroke-width="1.5">
//       {data.map((d, i) => (
//         <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
//       ))}
//     </g>
//   </svg>
// );
