'use client';
import { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

type BarGraphProps = {
  data: string[];
  xAxis: number[];
  yAxis: number[];
  height?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  xAxisLabel?: string;
  yAxisLabel?: string;
};

export default function BarGraph({
  data,
  height = 400,
  marginLeft = 40,
  marginBottom = 40,
  marginTop = 40,
  yAxis,
  xAxisLabel,
  yAxisLabel,
}: BarGraphProps) {
  const container = useRef<HTMLDivElement>(null);
  const gx = useRef<SVGGElement>(null);
  const gy = useRef<SVGGElement>(null);

  const [width, setWidth] = useState(0);
  const boundsWidth = width;
  const boundsHeight = height - marginBottom - marginTop;

  const y = d3.scaleLinear([0, yAxis[yAxis.length - 1]], [boundsHeight, 0]);
  const x = d3
    .scaleBand()
    .domain(data)
    .range([marginLeft, boundsWidth])
    .padding(0.5);

  const bars = data.map((d, i) => {
    if (x(d) === undefined) {
      return null;
    }

    return (
      <g key={i}>
        <rect
          x={x(d)}
          y={`${y(yAxis[i]) + marginBottom}`}
          width={x.bandwidth()}
          height={`${boundsHeight - y(yAxis[i])}`}
          fill='#69b3a2'
          fillOpacity={0.4}
          stroke='#69b3a2'
          strokeWidth={1}
        />
        <text
          fill='currentColor'
          textAnchor='end'
          fontSize='12'
          x={`${(x(d) ?? 0) + x.bandwidth() - 15}`}
          y={`${y(yAxis[i]) + marginBottom - 8}`}>
          {yAxis[i]}
        </text>
      </g>
    );
  });

  useEffect(() => {
    // TODO: Make it responsive
    if (container.current) {
      setWidth(container.current.offsetWidth);
    }
  }, [container]);

  useEffect(() => {
    if (gy.current) {
      d3.select(gy.current).call(d3.axisLeft(y));
    }
  }, [gy, y]);

  useEffect(() => {
    if (gx.current) {
      d3.select(gx.current).call(d3.axisBottom(x));
    }
  }, [gx, x]);

  return (
    <div ref={container}>
      <svg width={width} height={height}>
        <g ref={gx} transform={`translate(0, ${height - marginBottom})`}>
          {!!xAxisLabel && (
            <text
              textAnchor='middle'
              fill='currentColor'
              className='text-xs'
              x={(width + marginLeft) / 2}
              y={marginBottom}>
              {xAxisLabel}
            </text>
          )}
        </g>
        <g ref={gy} transform={`translate(${marginLeft}, ${marginTop})`}>
          {!!yAxisLabel && (
            <text
              textAnchor='middle'
              fill='currentColor'
              className='text-xs -rotate-90 translate-y-1/2'
              y={-30}>
              {yAxisLabel}
            </text>
          )}
        </g>
        {bars}
      </svg>
    </div>
  );
}
