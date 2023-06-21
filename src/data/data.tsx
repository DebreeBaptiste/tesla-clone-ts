export const data = {
  items: [
    {
      id: 1,
      name: undefined,
      title: "Découvrez Tesla",
      bookTestDrive: "Réserver un essai aujourd'hui",
      bookTestDriveSlug: "discoverTesla",
      className: "discover-tesla",
      buttonDarkText: undefined,
      buttonLightText: undefined,
      buttonTransparent: "Essais",
      images: {
        homeBackgroundDesktop: "/media/Homepage-Test_Drive.mp4",
        homeBackgroundMobile: "/media/Homepage-Test_Drive-Mobile.mp4",
        detailBackgroundModel: {
          mainModel: "",
          techModel: "",
        },
      },
    },
    {
      id: 2,
      name: "Model Y",
      title: "Model Y",
      bookTestDrive: "Réserver un essai",
      bookTestDriveSlug: "testdrive",
      slug: "modely",
      className: "modely",
      buttonDarkText: "Véhicules disponibles",
      buttonLightText: "Configuration personalisée",
      technicalDescription: {
        title: "Accélération rapide",
        description:
          "Passez de 0 à 100 km/h* en seulement 3,3 secondes grâce à notre optimisation Performance en option, bénéficiant de la transmission AWD Dual Motor, de freins améliorés et plus encore.",
        features: [
          {
            id: 230,
            image: "/media/model-3-tech1.webp",
            title: "Jantes 20 pouces Überturbine et freins Performance",
            description:
              "Inclut des pneus Pirelli P Zero et des freins plus puissants pour une tenue de route et des performances optimisées.",
          },
          {
            id: 231,
            image: "/media/model-3-tech2.webp",
            title: "Aileron en fibre de carbone",
            description:
              "Aérodynamique renforcée et meilleure stabilité jusqu'à 261 km/h.",
          },
          {
            id: 232,
            image: "/media/model-3-tech3.webp",
            title: "Pédalier Performance",
            description:
              "En alliage d'aluminium, pour un intérieur à l'esthétique soignée.",
          },
        ],
      },
      images: {
        homeBackgroundDesktop: "/media/modely-desktop.avif",
        homeBackgroundMobile: "/media/modely-mobile.avif",
        testdriveModel: "/media/testdrive-y.avif",
        detailBackgroundModel: {
          mainModel: "/media/tesla-model-y.avif",
          mainModelMobile: "/media/tesla-model-y-mobile.webp",
          techModel: "/media/model-3-tech.avif",
          orderModel: "/media/model-3-order.avif",
        },
      },
      details: [
        {
          id: 20,
          name: "Autonomie (WLTP)",
          value: "533 km",
        },
        {
          id: 21,
          name: "Capacité de chargement",
          value: "2100 +",
        },
        {
          id: 22,
          name: "Dual Motor",
          value: "AWD",
        },
      ],
    },
    {
      id: 3,
      name: "Model 3",
      title: "Model 3",
      bookTestDrive: "Réserver un essai",
      bookTestDriveSlug: "testdrive",
      slug: "model3",
      className: "model3",
      buttonDarkText: "Véhicules disponibles",
      buttonLightText: "Configuration personalisée",
      technicalDescription: {
        title: "Accélération rapide",
        description:
          "Passez de 0 à 100 km/h* en seulement 3,3 secondes grâce à notre optimisation Performance en option, bénéficiant de la transmission AWD Dual Motor, de freins améliorés et plus encore.",
        features: [
          {
            id: 210,
            image: "/media/model-3-tech1.webp",
            title: "Jantes 20 pouces Überturbine et freins Performance",
            description:
              "Inclut des pneus Pirelli P Zero et des freins plus puissants pour une tenue de route et des performances optimisées.",
          },
          {
            id: 211,
            image: "/media/model-3-tech2.webp",
            title: "Aileron en fibre de carbone",
            description:
              "Aérodynamique renforcée et meilleure stabilité jusqu'à 261 km/h.",
          },
          {
            id: 212,
            image: "/media/model-3-tech3.webp",
            title: "Pédalier Performance",
            description:
              "En alliage d'aluminium, pour un intérieur à l'esthétique soignée.",
          },
        ],
      },
      images: {
        homeBackgroundDesktop: "/media/model3-desktop.avif",
        homeBackgroundMobile: "/media/model3-mobile.avif",
        testdriveModel: "/media/testdrive-3.avif",
        detailBackgroundModel: {
          mainModel: "/media/tesla-model-3.webp",
          mainModelMobile: "/media/tesla-model-3-mobile.webp",
          techModel: "/media/model-3-tech.avif",
          orderModel: "/media/model-3-order.avif",
        },
      },
      details: [
        {
          id: 23,
          name: "Autonomie (WLTP)",
          value: "602 km",
        },
        {
          id: 24,
          name: "0 à 100 km/h",
          value: "3,3 s",
        },
        {
          id: 25,
          name: "Dual Motor",
          value: "AWD",
        },
      ],
    },
    {
      id: 4,
      name: "Model S",
      title: "Model S",
      bookTestDrive: "Réserver un essai",
      bookTestDriveSlug: "testdrive",
      slug: "models",
      className: "models",
      buttonDarkText: "Configuration personalisée",
      buttonLightText: "En savoir plus",
      technicalDescription: {
        title: "Conçu pour l'efficience",
        description:
          "Avec un coefficient de traînée aérodynamique de seulement 0.208 Cd, le plus bas au monde, la Model S est conçue pour la vitesse, l'endurance et l'autonomie. Un aérodynamisme amélioré et un châssis plus large assurent des performances disponibles en permanence, afin que vous puissiez enchainer les courbes plus rapidement et avec plus de confiance.",
        features: [
          {
            id: 200,
            image: "/media/model-s-tech1.webp",
            title: "Des performances continues",
            description:
              "Jantes et pneus dédiés à la performance, plus larges à l'arrière, maintiennent le véhicule stable et permettent de passer une puissance maximale sur la route.",
          },
          {
            id: 201,
            image: "/media/model-s-tech2.webp",
            title: "Aérodynamique optimisée",
            description:
              "Une attention du détail portée sur l'ensemble des lignes extérieures fait de la Model S le véhicule de production le plus aérodynamique au monde.",
          },
          {
            id: 202,
            image: "/media/model-s-tech3.webp",
            title: "Style élégant",
            description:
              "Une ligne emblématique combinées à d'élégantes proportions modernisées.",
          },
        ],
      },
      images: {
        homeBackgroundDesktop: "/media/models-desktop.avif",
        homeBackgroundMobile: "/media/models-mobile.avif",
        testdriveModel: "/media/testdrive-s.avif",
        detailBackgroundModel: {
          mainModel: "/media/tesla-model-s.avif",
          mainModelMobile: "/media/tesla-model-s-mobile.webp",
          techModel: "/media/model-s-tech.webp",
          orderModel: "/media/model-s-order.avif",
        },
      },
      details: [
        {
          id: 26,
          name: "Autonomie (WLTP)",
          value: "600 km",
        },
        {
          id: 27,
          name: "0 à 100 km/h",
          value: "2,1 s",
        },
        {
          id: 28,
          name: "Vitesse maximale",
          value: "320 km/h",
        },
        {
          id: 29,
          name: "Puissance du véhicule",
          value: "1020 ch",
        },
      ],
    },
    {
      id: 5,
      name: "Model X",
      title: "Model X",
      bookTestDrive: undefined,
      bookTestDriveSlug: "",
      slug: "modelx",
      className: "modelx",
      buttonDarkText: "Configuration personalisée",
      buttonLightText: "En savoir plus",
      technicalDescription: {
        title: "Conçu pour l'efficience",
        description:
          "Le Model X a un coefficient de traînée de seulement 0,24 Cd, le plus faible des SUV de production au monde. Son aérodynamique retravaillé contribue, avec de nouvelles jantes et de nouveaux pneus, à ce que vous puissiez voyager plus loin, avec une tenue de route encore plus précise et un plus grand confort.",
        features: [
          {
            id: 220,
            image: "/media/model-x-tech1.webp",
            title: "Des performances continues",
            description:
              "Les pneus et les jantes Performance maintiennent le SUV stable, transférant encore plus de puissance sur la route.",
          },
          {
            id: 221,
            image: "/media/model-x-tech2.webp",
            title: "Aérodynamique optimisée",
            description:
              "Une attention du détail porté à l'ensemble du design extérieur permet au Model X d'être le SUV de production le plus aérodynamique au monde.",
          },
          {
            id: 222,
            image: "/media/model-x-tech3.webp",
            title: "Style élégant",
            description:
              "Le design extérieur combine un look iconique avec d'élégants détails.",
          },
        ],
      },
      images: {
        homeBackgroundDesktop: "/media/modelx-desktop.avif",
        homeBackgroundMobile: "/media/modelx-mobile.avif",
        testdriveModel: "/media/testdrive-x.avif",
        detailBackgroundModel: {
          mainModel: "/media/tesla-model-x.avif",
          mainModelMobile: "/media/tesla-model-x-mobile.webp",
          techModel: "/media/model-x-tech.webp",
          orderModel: "/media/model-x-order.avif",
        },
      },
      details: [
        {
          id: 30,
          name: "Autonomie (WLTP)",
          value: "543 km",
        },
        {
          id: 31,
          name: "0 à 100 km/h",
          value: "2,6 s",
        },
        {
          id: 32,
          name: "1/4 mile",
          value: "9,9 s",
        },
        {
          id: 33,
          name: "Puisance du véhicule",
          value: "1020 ch",
        },
      ],
    },
    {
      id: 6,
      name: "Powerwall",
      title: "Systèmes d'énergie solaire et Powerwalls",
      bookTestDrive: "De l’énergie pour tous vos besoins",
      bookTestDriveSlug: "",
      slug: "powerwall",
      className: "powerwall",
      buttonDarkText: "En savoir plus",
      buttonLightText: undefined,
      images: {
        homeBackgroundDesktop: "/media/powerwall.avif",
        homeBackgroundMobile: "/media/powerwall-mobile.avif",
        detailBackgroundModel: {
          mainModel: "/media/tesla-powerwall.avif",
          techModel: "",
        },
      },
      details: [
        {
          id: 34,
          name: "Stockez l'énergie",
          value: "logo",
        },
        {
          id: 35,
          name: "Protection de secours",
          value: "logo",
        },
        {
          id: 36,
          name: "Alimentez votre foyer",
          value: "logo",
        },
      ],
    },
    {
      id: 7,
      name: "Recharge",
      title: "Accessoires",
      bookTestDrive: undefined,
      bookTestDriveSlug: "",
      slug: "recharge",
      className: "recharge",
      buttonDarkText: "Commander maintenant",
      buttonLightText: undefined,
      images: {
        homeBackgroundDesktop: "/media/charger.avif",
        homeBackgroundMobile: "/media/charger.avif",
        detailBackgroundModel: {
          mainModel: "/media/tesla-recharge.avif",
          techModel: "",
        },
      },
      details: [
        {
          id: 37,
          name: "Rechargez à domicile",
          value: "logo",
        },
        {
          id: 38,
          name: "Superchargeurs mondiaux",
          value: "45 000 +",
        },
        {
          id: 39,
          name: "Wall Connectors sur les sites Recharge à destination",
          value: "40 000 +",
        },
      ],
    },
  ],
  assistance: {
    name: "Assistance",
    slug: "assistance",
  },
  shop: {
    name: "Shop",
    slug: "shop",
  },
  account: {
    name: "Compte",
    slug: "compte",
  },
  menu: [
    { name: "Model S", slug: "models", id: 81 },
    { name: "Model 3", slug: "model3", id: 82 },
    { name: "Model X", slug: "modelx", id: 83 },
    { name: "Model Y", slug: "modely", id: 84 },
    { name: "Véhicules disponibles", slug: "#", id: 85 },
    { name: "Véhicules d'occasion", slug: "#", id: 86 },
    { name: "Reprise", slug: "exchange", id: 87 },
    { name: "Essais", slug: "testdrive", id: 88 },
    { name: "Véhicules de société", slug: "#", id: 89 },
    { name: "Powerwall", slug: "powerwall", id: 90 },
    { name: "Énergie", slug: "energy", id: 91 },
    {
      name: "Électricité pour les professionnels",
      slug: "#",
      id: 92,
    },
    { name: "industries", slug: "#", id: 93 },
    { name: "Recharge", slug: "recharge", id: 94 },
    { name: "Carrières", slug: "#", id: 95 },
    { name: "Nous trouver", slug: "#", id: 96 },
    { name: "Événements", slug: "#", id: 97 },
    { name: "Assistance", slug: "assistance", id: 98 },
    { name: "Relations investisseurs", slug: "#", id: 99 },
    { name: "Shop", slug: "#", id: 100 },
    { name: "Compte", slug: "#", id: 101 },
    { name: "France", slug: "#", id: 102 },
  ],
};
