import { ID, ValuesOf } from 'shared/types';

export const Currency = {
    Rub: 'RUB',
    Usd: 'USD',
    Eur: 'EUR',
} as const;
export type ValuesOfCurrency = ValuesOf<typeof Currency>;

export const Country = {
    Russia: 'Russia',
    Ukraine: 'Ukraine',
    Belarus: 'Belarus',
    Kazakhstan: 'Kazakhstan',
    Armenia: 'Armenia',
    Mongolia: 'Mongolia',
} as const;

export type ValuesOfCountry = ValuesOf<typeof Country>;

export type Profile = {
    id?: ID;
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: ValuesOfCurrency;
    country?: ValuesOfCountry;
    city?: string;
    username?: string;
    avatar?: string;
};

export interface ProfileSchema {
    data?: Profile[];
    isLoading: boolean;
    error?: string;
    readonly?: boolean;
}
