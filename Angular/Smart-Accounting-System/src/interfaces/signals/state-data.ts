export interface WaytoPaySignalState {
  data: any;
  msg?: string;
  status: string;
  error: any;
}

export const waytopayDefaultState: WaytoPaySignalState = {
  data: '',
  msg: '',
  status: 'loading',
  error: '',
};
