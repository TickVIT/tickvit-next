import { Users } from 'react-feather'
import FAQ from '../public/svg/faq.svg'
import Tickets from '../public/svg/tickets.svg'

export const NavbarData = [
    {
        route: '/tickets',
        Icon: <Tickets height={30} width={30} strokeWidth="1.5px" />,
        text: 'Tickets',
    },
    {
        route: '/manager',
        Icon: <Users height={30} width={30} strokeWidth="1.5px" />,
        text: 'Manage',
    },
    {
        route: '/faq',
        Icon: <FAQ height={30} width={30} strokeWidth="1.5px" />,
        text: 'FAQs',
    },
]
