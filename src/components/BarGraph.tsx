'use client';
import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

type BarGraphProps<TData> = {
  data: TData[];
  xAxis: number[];
  yAxis: number[];
  width?: number;
  height?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  xAxisLabel?: string;
  yAxisLabel?: string;
};

export default function BarGraph<TData>({
  data,
  width = 640,
  height = 400,
  marginLeft = 40,
  marginRight = 40,
  marginBottom = 40,
  marginTop = 40,
  xAxis,
  yAxis,
  xAxisLabel,
  yAxisLabel,
}: BarGraphProps<TData>) {
  const gx = useRef<SVGGElement>(null);
  const gy = useRef<SVGGElement>(null);

  const yExtent = d3.extent(yAxis) as [number, number];
  const xExtent = d3.extent(xAxis) as [number, number];
  const x = d3.scaleLinear(xExtent, [marginLeft, width - marginRight]);
  const y = d3.scaleLinear(yExtent, [height - marginTop, marginBottom]);

  useEffect(() => {
    if (gx.current) {
      d3.select(gx.current).call(
        d3.axisBottom(x).tickValues(xAxis).tickFormat(d3.format('.0f')),
      );
    }
  }, [x, gx, xAxis]);

  useEffect(() => {
    if (gy.current) {
      d3.select(gy.current).call(d3.axisLeft(y));
    }
  }, [y, gy]);

  return (
    <svg width={width} height={height}>
      <g ref={gx} transform={`translate(0, ${height - marginBottom})`} />
      {!!xAxisLabel && (
        <text
          textAnchor='middle'
          fill='currentColor'
          className='text-xs'
          x={width / 2}
          y={height}>
          {xAxisLabel}
        </text>
      )}
      {!!yAxisLabel && (
        <text
          textAnchor='middle'
          fill='currentColor'
          className='text-xs -rotate-90 translate-y-1/2'
          y={10}>
          {yAxisLabel}
        </text>
      )}
      <g ref={gy} transform={`translate(${marginLeft}, 0)`} />
    </svg>
  );
}
