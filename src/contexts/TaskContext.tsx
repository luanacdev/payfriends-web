import { createContext, ReactNode, useState } from 'react';

interface TaskType {
    editPaymentModalOpened: boolean;
    setEditPaymentModalOpened: any;
    removePaymentModalOpened: boolean;
    setRemovePaymentModalOpened: any;
    addNewPaymentModalOpened: boolean;
    setAddNewPaymentModalOpened: any;
}

interface TaskProviderProps {
  children: ReactNode
}

export const TaskContext = createContext({} as TaskType)

export function TaskProvider({ children }: TaskProviderProps) {
      
    const [editPaymentModalOpened, setEditPaymentModalOpened] = useState<boolean>(false)
    const [removePaymentModalOpened, setRemovePaymentModalOpened] = useState<boolean>(false)
    const [addNewPaymentModalOpened, setAddNewPaymentModalOpened] = useState<boolean>(false)

  return (
    <TaskContext.Provider 
        value={{ 
            editPaymentModalOpened, 
            setEditPaymentModalOpened, 
            removePaymentModalOpened, 
            setRemovePaymentModalOpened,
            addNewPaymentModalOpened, 
            setAddNewPaymentModalOpened
        }}>
      {children}
    </TaskContext.Provider>
  )
}
