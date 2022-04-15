
interface ContactType {
    id: {
        value: string
    }
    email: string;
    phone: string;
    name: {
        first: string;
        last: string;
    };
    location: {
        street: {
            name: string
        }
        city: string;
        state: string;
        postcode: number;
    };
    login: {
        username: string;
    };
    picture: {
        large: string;
    };
}

interface DataType {
    results: ContactType[];
}

interface ErrorType {
    error: string;
}

type AlphabeticContact = Record<string, ContactType[]>

interface TabProps {
    children: React.ReactNode;
    label: string;
    tabName: string;
    subLabel: number;
}

interface RefModalType {
    open: () => void;
    close: () => void;
}


export type { TabProps, ContactType, DataType, ErrorType, AlphabeticContact, RefModalType }