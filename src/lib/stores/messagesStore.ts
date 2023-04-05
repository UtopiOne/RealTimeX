import { writable, type Writable } from 'svelte/store';

export const messagesStore: Writable<any> = writable([]);
