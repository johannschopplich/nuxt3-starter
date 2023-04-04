import { nanoid } from 'nanoid'
import type { Ref } from 'vue'

type Component = abstract new (...args: any) => any

interface Modal {
  id: string
  component: Component
  bindings: Record<string, any>
}

type Bindings<T extends Component> = InstanceType<T>['$props']
type ReturnValue<T extends Component> = Parameters<Bindings<T>['onClose']>[0]

const scopes: Record<string, Ref<Modal[]>> = {}

export function useModals(scope = '') {
  const modals = (scopes[scope] = scopes[scope] ?? ref<Modal[]>([]))

  async function open<T extends Component>(
    component: T,
    bindings: Bindings<T>
  ) {
    return new Promise<ReturnValue<T>>((resolve) => {
      const id = nanoid()

      modals.value.push({
        id,
        component: markRaw(component),
        bindings: {
          onClose: (data: any) => {
            resolve(data)
            const index = modals.value.findIndex((modal) => modal.id === id)
            if (index !== -1) modals.value.splice(index, 1)
          },
          ...bindings,
        },
      })
    })
  }

  return {
    modals,
    open,
  }
}
