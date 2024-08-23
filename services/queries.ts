import { createQueryKeyStore } from '@lukemorales/query-key-factory'

import { getUsers } from './actions'

export const queries = createQueryKeyStore({
  users: {
    all: {
      queryKey: null,
      queryFn: () => getUsers(),
    },
  },
})
