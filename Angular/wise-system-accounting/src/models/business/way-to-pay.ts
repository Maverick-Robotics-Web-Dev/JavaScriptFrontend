export interface WaytoPayModel {
  ok: string;
  data: WaytoPayDataModel;
}

export interface WaytoPayAllModel {
  ok: string;
  data: WaytoPayDataModel[];
}

export interface WaytoPayDataModel {
  id: number;
  fk_user_employee: string;
  status: boolean;
  status_description: string;
  create_at: string;
  update_at: null | string;
  name: string;
  description: null | string;
}

export const WaytoPayAllEmptyData: WaytoPayAllModel = {
  ok: '',
  data: [],
};

export const WaytopayEmptyData: WaytoPayDataModel = {
  id: 0,
  fk_user_employee: '',
  status: false,
  status_description: '',
  create_at: '',
  update_at: '',
  name: '',
  description: '',
};
