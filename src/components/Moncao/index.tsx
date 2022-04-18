import React, { useState, FC, ReactElement } from "react";

import { monaco } from './monaco';

export default function MyEditor(dom){

  return monaco.editor.create(dom, {
    value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
    language: 'typescript',
    minimap: {
      enabled: true
    },
    // theme: 'vs-dark',
  });
  
}





