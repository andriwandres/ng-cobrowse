export interface CobrowseIO {
  client: () => Promise<CobrowseIO>;
  start?: () => void;
  stop?: () => Promise<CobrowseIO>;
  createSessionCode?: () => Promise<string>;

  license?: string;
  customData?: CobrowseIOCustomData;
}

export interface CobrowseIOCustomData {
  user_id?: string;
  user_name?: string;
  user_email?: string;
  device_id?: string;
  device_name?: string;
  [key: string]: string;
}
