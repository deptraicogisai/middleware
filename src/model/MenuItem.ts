export interface MenuItem {
    headerText: string
    subMenus?: MenuItem[],
    name?: string,
    link?: string
}