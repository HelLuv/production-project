import { ID } from 'shared/types';
import { ValuesOfCountry } from 'entities/Country';
import { ValuesOfCurrency } from 'entities/Currency';

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
