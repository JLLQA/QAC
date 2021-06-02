import { NavItems } from "./NavItems";

const NavbarListItems = () => {
    return (
        NavItems.map((item, index) => {
            <li key={index}>
                <a className={item.cName} href={item.url}>
                    {item.title}
                </a>
            </li>
        })
    )
}

export default NavbarListItems;