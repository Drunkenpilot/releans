export interface ISender {
    id: number,
    senderName: string;
    phoneNumber: string | null;
    status: 0 | 1;
}