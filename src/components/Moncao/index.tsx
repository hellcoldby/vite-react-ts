import React, { useState, FC, ReactElement } from "react";
import beautify from 'beautify';
import { monaco } from './monaco';

export default function MyEditor(dom){

  const option = {
    tooltip: {},
    visualMap: {
      show: true,
      dimension: 2,
      min: -1,
      max: 1,
      inRange: {
        color: [
          '#313695',
          '#4575b4',
          '#74add1',
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026'
        ]
      }
    },
    xAxis3D: {},
    yAxis3D: {},
    zAxis3D: {},
    grid3D: {},
    series: [
      {
        type: 'surface',
        parametric: true,
        // shading: 'albedo',
        itemStyle: {
          opacity: 0.3
        },
        parametricEquation: {
          u: {
            min: -Math.PI,
            max: Math.PI,
            step: Math.PI / 50
          },
          v: {
            min: 0,
            max: Math.PI,
            step: Math.PI / 20
          },
          x: function (u, v) {
            return Math.sin(v) * Math.sin(u);
          },
          y: function (u, v) {
            return Math.sin(v) * Math.cos(u);
          },
          z: function (u, v) {
            return Math.cos(v)>0? 1: -1;
          }
        }
      }
    ]
  };

  return monaco.editor.create(dom, {
    value: beautify( `${JSON.stringify(option)}`, {format: 'json'} ),
    language: 'typescript',
    minimap: {
      enabled: true
    },
    // theme: 'vs-dark',
  });
  
}





