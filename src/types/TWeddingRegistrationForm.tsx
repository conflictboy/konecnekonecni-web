export interface TEscort {
    firstname: string;
    lastname: string;
}

export interface TChildren {
    name: string;
}

export interface TWeddingRegistrationForm {
    firstname: string;
    lastname: string;
    escorts: TEscort[];
    children: TChildren[];
    isAttending: string;
    transport: string;
}