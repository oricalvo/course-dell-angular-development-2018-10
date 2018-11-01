export interface AppState {
  contacts: Contact[];
  loading: boolean;
}

export interface Contact {
  id: number;
  name: string;
}

