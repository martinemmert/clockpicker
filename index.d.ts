// Type definitions for ClockPicker (UMD) v{package.version}
// Project: https://github.com/martinemmert/clockpicker-umd
// Definitions by: jfcere <https://github.com/jfcere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface ClockPickerOptions {
  default?: string;
  placement?: string;
  align?: string;
  donetext?: string;
  autoclose?: boolean;
  twelvehour?: boolean;
  vibrate?: boolean;
  fromnow?: number;
  init?: () => void;
  beforeShow?: (value?: string) => void;
  afterShow?: (value?: string) => void;
  beforeHide?: (value?: string) => void;
  afterHide?: (value?: string) => void;
  beforeHourSelect?: (value?: string) => void;
  afterHourSelect?: (value?: string) => void;
  beforeDone?: (value?: string) => void;
  afterDone?: (value?: string) => void;
}

interface ClockPicker {
  (options?: ClockPickerOptions): JQuery;
  (methodName: string, ...params: any[]): JQuery;
}

interface JQuery {
  clockpicker: ClockPicker;
}
