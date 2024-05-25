import { defineStore } from 'pinia';
import type { User, UserStore } from '@/models';
import useFetch from '@/composables/useFetch';
import useAuth from '@/composables/useAuth';
import { is, pick, compose, assoc, prop } from 'ramda';
import { kebabCase } from 'change-case';
import { useNotificationStore } from '@/stores/NotificationStore';

const { user } = useAuth();
const addSlugProperty = (item: any) => ({ ...item, slug: kebabCase(item.id) });
const addLabelProperty = (item: any) =>
  assoc('label', prop('nome', item) + ' ' + prop('cognome', item), item);
const addIdProperty = (item: any) => assoc('id', prop('login', item), item);
const addUserOldApiProperty = (item: unknown) => assoc('userOldApi', item, item);
const transformPermissionsProperty = (item: unknown) => {
  return is(Object, item) && is(String, item.permissions)
    ? assoc('permissions', JSON.parse(item.permissions), item)
    : assoc('permissions', '{}', item);
};
const addBusinessProperty = (item: any) => assoc('business', prop('kclient', item), item);

const transformResult = (result: any): User[] => {
  return is(Array, result)
    ? (result.map(
        compose(
          pick([
            'id',
            'label',
            'slug',
            'instances',
            'business',
            'permissions',
            'menu',
            'userOldApi'
          ]),
          addSlugProperty,
          addLabelProperty,
          addUserOldApiProperty,
          addIdProperty,
          transformPermissionsProperty,
          addBusinessProperty
        )
      ) as User[])
    : [];
};

export const useUserStore = defineStore('UserStore', {
  state: (): UserStore => {
    return {
      users: null,
      isLoadingUsers: false,
      selectedUser: undefined,
      userToEdit: undefined,
      selectedUserBusiness: undefined,
      adminUsers: [
        'alessandro.curcu@kleecks.com',
        'alessandro.curcu+demo@kleecks.com',
        'emanuel.oliva@kleecks.com',
        'marco.baricevic@kleecks.com',
        'federico.pomponii@kleecks.com',
        'roberto.pellagatti@kleecks.com',
        'luca.manigrasso@kleecks.com'
      ]
    };
  },
  getters: {
    currentUserMail(): string {
      return user?.value?.login ?? 'MISSING USER MAIL';
    }
  },
  actions: {
    async getUsers(): Promise<void> {
      const NotificationStore = useNotificationStore();
      this.isLoadingUsers = true;
      const { httpGet } = useFetch();
      try {
        const result: unknown = await httpGet('analyzer_view/getUsers');

        const start = performance.now();
        this.users = transformResult(result);
        const end = performance.now();
        console.log(`Execution time transformation users: %c ${end - start} ms`, 'color: #fb923c');
      } catch (err: any) {
        NotificationStore.notify('Unable to get Users', err.message, {
          style: 'error'
        });
      } finally {
        this.isLoadingUsers = false;
      }
    },
    setSelectedUser(user: User) {
      this.selectedUser = user;
    },
    setSelectedUserBusiness(business: any) {
      this.selectedUserBusiness = business;
    },
    async deleteUser(user: User) {
      const NotificationStore = useNotificationStore();
      this.isLoadingUsers = true;
      const { httpDelete } = useFetch();
      console.log('user', user.id);
      try {
        await httpDelete(`analyzer_view/delUser?key=${user.id}`);
        NotificationStore.notify('User deleted', '', {
          style: 'success'
        });
        return true;
      } catch (err: any) {
        NotificationStore.notify('Unable to delete User', err.message, {
          style: 'error'
        });
        return false;
      } finally {
        this.isLoadingUsers = false;
      }
    }
  }
});
