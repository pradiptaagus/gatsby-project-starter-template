export interface UserInterface {
    username: string;
    email: string;
}

export interface UserStateInterface extends UserInterface {
    id: string;
    data: any[];
    currentPage: number;
    itemPerPage: number;
    totalItemCount: number;
}