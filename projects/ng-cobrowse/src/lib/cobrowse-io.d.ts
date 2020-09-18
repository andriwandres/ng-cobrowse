export interface CobrowseIO {
  client: () => Promise<CobrowseIO>;
  start?: () => void;
  createSessionCode?: () => Promise<string>;

  license?: string;
  customerData?: CobrowseIOCustomerData;
}

export interface CobrowseIOCustomerData {
  user_id?: string;
  user_name?: string;
  user_email?: string;
  device_id?: string;
  device_name?: string;
  [key: string]: string;
}
