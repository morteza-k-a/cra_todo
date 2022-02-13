export interface TodoItem {
  id: string;
  text: string;
}

export interface TodoState {
  value: Array<TodoItem>;
}
export interface DialogState {
  value: { show: boolean; id: string; text: string };
}
