import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export type NotificationStyle = 'error' | 'success' | 'warning' | 'info' | 'none';

export interface NotificationOptions {
  timeout?: number | false;
  style?: NotificationStyle;
}

const defaultOptions: Required<NotificationOptions> = {
  timeout: 4000,
  style: 'info'
};

export interface Notification extends NotificationOptions {
  id: string;
  message: string;
  cause: string;
}

export interface NotificationStore {
  items: Notification[];
}

export const useNotificationStore = defineStore('NotificationStore', {
  state: (): NotificationStore => {
    return { items: [] };
  },
  actions: {
    notify(message: string, cause: string, options?: NotificationOptions) {
      options = { ...defaultOptions, ...options };
      const id = uuidv4();
      this.items.push({
        id,
        message,
        cause,
        ...options
      });

      if (options.timeout !== false) {
        setTimeout(() => {
          this.remove(id);
        }, options.timeout);
      }
    },
    async remove(id: string) {
      this.items = this.items.filter((_item) => _item.id !== id);
    }
  }
});
