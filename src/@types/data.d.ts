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
            buttonTransparent?: string;
            technicalDescription: {
                title: string;
                description: string;
                features: Element[
                {
                    id: number;
                    image: string;
                    title: string;
                    description: string;
                }
                ],
            },
            images: {
                homeBackgroundDesktop: string;
                homeBackgroundMobile: string;
                detailBackgroundModel: {
                    mainModel: string;
                    mainModelMobile: string;
                    techModel: string;
                    orderModel: string;
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
        menu: Element[
        { name: string; slug: string; id: number; }
        ],
    };
}