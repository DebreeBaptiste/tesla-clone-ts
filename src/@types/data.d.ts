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
            images: {
                homeBackgroundDesktop: string;
                homeBackgroundMobile: string;
                detailBackgroundModel: {
                    mainModel: string;
                    model1: string;
                    model2: string;
                    model3: string;
                    model4: string;
                }
            }
            details: [
                {
                    id: number;
                    name: string;
                    value: string;
                }
            ]
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