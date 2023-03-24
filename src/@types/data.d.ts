export interface HomeProps {
    data: {
        items: Element[
        {
            id: number;
            className: string;
            backgroundImg: string;
            title: string;
            bookTestDrive: boolean;
            bookTestDriveSlug: string;
            name: string;
            buttonDarkText: string;
            buttonLightText: string;
        }
        ];
        assistance: {
            name: string;
            slug: string;
        };
        shop: {
            name: string;
            slug: string;
        };
        account: {
            name: string;
            slug: string;
        };
    };
}