import { credentials, Todo } from "./types";

export type dataType = (data: any) => ({
    method: string,
    headers: { 'Content-type': string },
    body: string,
});

export type setGetDataType = () => Promise<Todo[]>;
export type setAddDataType = (data: string) => Promise<Todo>;
export type setDeleteItemType = (data: string) => Promise<string>;
export type setToggleItemType = (data: string) => Promise<Todo>;
export type setToggleAllType = (data: boolean) => Promise<Todo[]>;
export type setDelCompletedType = () => Promise<Todo[]>;
export type setChangeTodoType = (data: { id: string, value: string}) => Promise<Todo>;
export type setRegistrationApi = (data: credentials) => Promise<any>;
export type setLoginApiType = (data: credentials) => Promise<any>;