class Control {
  private state: any;
}

export interface SelectableControl extends Control {
  select(): void;
}
