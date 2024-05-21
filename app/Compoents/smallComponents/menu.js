import {
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
  ChevronRightIcon,
  ChatBubbleLeftIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";

export const about = [
  {
    title: "Who we are",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet nisi vel elementum semper.",
    links: [
      {
        title: "Lorum ipsum",
        description:
          "Curabitur eu tincidunt ante, nec dapibus lectus. Morbi dapibus vitae diam eget accumsan.",
        icon: ChevronRightIcon,
        href: "#",
      },
      {
        title: "Dolor sit",
        description:
          "Aliquam eu odio elit. Proin lacus dolor, gravida nec augue et, interdum egestas libero.",
        icon: ChevronRightIcon,
        href: "#",
      },
    ],
  },
  {
    title: "What can we do",
    description:
      "In blandit dapibus tincidunt. Phasellus nisi leo, dapibus in dapibus vitae, varius eu lacus. Mauris dapibus, massa a pretium efficitur.",
    links: [
      {
        title: "Cras eget",
        description:
          "Cras varius, elit sit amet finibus pretium, lorem neque condimentum felis",
        icon: ChevronRightIcon,
        href: "#",
      },
      {
        title: "Nam ex enim",
        description:
          "luctus sit amet magna sit amet, condimentum congue justo. Nunc quis velit sapien.",
        icon: ChevronRightIcon,
        href: "#",
      },
    ],
  },
];

export const projects = [
  {
    title: "Our projects",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet nisi vel elementum semper.",
    links: [
      {
        title: "Lorum ipsum",
        description:
          "Curabitur eu tincidunt ante, nec dapibus lectus. Morbi dapibus vitae diam eget accumsan.",
        icon: ChevronRightIcon,
        href: "#",
      },
      {
        title: "Dolor sit",
        description:
          "Aliquam eu odio elit. Proin lacus dolor, gravida nec augue et, interdum egestas libero.",
        icon: ChevronRightIcon,
        href: "#",
      },
    ],
  },
  {
    title: "Latest projects",
    description:
      "In blandit dapibus tincidunt. Phasellus nisi leo, dapibus in dapibus vitae, varius eu lacus. Mauris dapibus, massa a pretium efficitur.",
    links: [
      {
        title: "Cras eget",
        description:
          "Cras varius, elit sit amet finibus pretium, lorem neque condimentum felis",
        icon: ChevronRightIcon,
        href: "#",
      },
      {
        title: "Nam ex enim",
        description:
          "luctus sit amet magna sit amet, condimentum congue justo. Nunc quis velit sapien.",
        icon: ChevronRightIcon,
        href: "#",
      },
    ],
  },
];

export const menuItems = [
  {
    title: "About",
    href: "#",
    submenu: about,
  },
  {
    title: "Projects",
    href: "#",
    submenu: projects,
  },
  {
    title: "Services",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
];
