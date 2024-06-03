import { dropDownLinksType, PersonsDialogType } from "./types.ts";
import { v1 } from "uuid";

export const dropDownMenuItems: dropDownLinksType[] = [
    {
        href: '#1',
        title: 'Menu item 1',
    },
    {
        href: '#2',
        title: 'Menu item 2',
    },
    {
        href: '#3',
        title: 'Menu item 3',
    },
    {
        href: '#4',
        title: 'Menu item 4',
    },
    {
        href: '#5',
        title: 'Menu item 5',
    },
];

export const personsForDialogs: PersonsDialogType[] = [
    {
        id: v1(),
        name: 'John Doe',
        smallText: 'Поминутно жалуются, что у нас нет людей практических; что  политических людей.',
        isOnline: true,
    },
    {
        id: v1(),
        name: 'John Doe',
        smallText: 'Поминутно жалуются, что у нас нет людей практических; что  политических людей.',
        isOnline: true,
    },
    {
        id: v1(),
        name: 'Maria Slota',
        smallText: 'Поминутно жалуются, что у нас нет людей практических; что  политических людей.',
        isOnline: false,
    },
    {
        id: v1(),
        name: 'John Doe',
        smallText: 'Поминутно жалуются, что у нас нет людей практических; что  политических людей.',
        isOnline: true,
    },
    {
        id: v1(),
        name: 'Bob Sand',
        smallText: 'Поминутно жалуются, что у нас нет людей практических; что  политических людей.',
        isOnline: false,
    },
];