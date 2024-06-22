
export type dropDownLinksType = {
    href: string
    title: string
};

export type PersonsDialogType = {
    id: string
    avatar?: string
    name: string
    smallText: string
    isOnline?: boolean
};

export type CommentType = {
    author: PersonsDialogType
    text: string
    date: string
};

export type PostType = {
    person: PersonsDialogType
    postText: string
    date: string
    likes: number
    comments: CommentType[]
};

export type messageType = {
    id: string
    authorId: string
    text: string
    isLiked: boolean
    time: string
};