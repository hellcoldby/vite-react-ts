import React, { useState, FC, ReactElement } from "react";

import './userWorker';


import 'monaco-editor/esm/vs/editor/editor.all.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';


export default function MyEditor(dom){

  monaco.editor.create(dom, {
    value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
    language: 'typescript'
  });

  
}





