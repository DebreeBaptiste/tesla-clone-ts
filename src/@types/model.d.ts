export interface ModelProps {

    id: number;
    className: string;
    backgroundImg: string;
    title: string;
    bookTestDrive: boolean;
    bookTestDriveSlug: string;
    name: string;
    buttonDarkText: string;
    buttonLightText: string;
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

};