import { provideAccountService } from './provideAccountService'

export const queryResolver = {
  accounts: () => provideAccountService().getAllAccounts(),
  getAccountByEmail: (parent: any, { email }: any) => provideAccountService().getAccount(email),
  getAccountById: (parent: any, { id }: any) => provideAccountService().getAccountById(id),
}