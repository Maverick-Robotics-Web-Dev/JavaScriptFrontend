export interface WaytoPayModel {
  ok: string;
  data: WaytoPayOutputData;
}

export interface WaytoPayAllModel {
  ok: string;
  data: WaytoPayOutputData[];
}

export interface WaytoPayOutputData {
  id: number;
  fk_user_employee: string;
  status: boolean;
  status_description?: string;
  create_at: string;
  update_at: null | string;
  name: string;
  description: null | string;
}

export interface WaytoPayInputData {
  name: string;
  description: null | string;
}
