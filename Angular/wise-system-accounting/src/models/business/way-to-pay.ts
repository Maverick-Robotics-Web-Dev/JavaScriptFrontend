export interface WaytoPayModel {
  ok: string;
  data: WaytoPayData;
}

export interface WaytoPayData {
  id: number;
  fk_user_employee: string;
  status: boolean;
  status_description: string;
  create_at: string;
  update_at: null | string;
  name: string;
  description: null | string;
}
