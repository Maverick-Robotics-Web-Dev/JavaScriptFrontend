export interface WaytoPaySignalState {
  data: any;
  status: string;
  error: any;
}

export const waytopayDefaultState: WaytoPaySignalState = {
  data: [],
  status: 'loading',
  error: {},
};
