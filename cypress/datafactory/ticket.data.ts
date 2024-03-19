export interface Tickets {
    title: string,
    description: string,
    category: string,
    priority: number,
    progress: number,
    status: string,
    createdAt: string,
    updatedAt: string
}

export const ticket: Tickets[] = [
    {
        title: "Add Send button",
        description: "Add Send button to the Form for Rental Car Application.",
        category: "Application Development",
        priority: 4,
        progress: 22,
        status: "started",
        createdAt: "2024-02-29T10: 40: 22.105+00: 00",
        updatedAt: "2024-02-29T10: 49: 46.083+00: 00"
    },
    {
        title: "Replace hard disk",
        description: "Replace hd for a 250 gb SSD.",
        category: "Hardware Problem",
        priority: 5,
        progress: 1,
        status: "started",
        createdAt: "2024-02-29T10:34:32.621+00:00",
        updatedAt: "2024-02-29T10:35:13.893+00:00"
    },
    {
        title: "Intall Windows 11 Pro",
        description: "Need to intall W11 Pro version with credentials.",
        category: "Software Problem",
        priority: 3,
        progress: 0,
        status: "not started",
        createdAt: "2024-02-29T10:37:27.444+00:00",
        updatedAt: "2024-02-29T10:37:27.444+00:00"
    },
    {
        title: "Pet Store Ecommerce",
        description: "We need to make a planning to start the development of the Pet Store Ecommerce. It needs to be simple. We need to use Modern Stack ex. MERN.",
        category: "Project",
        priority: 5,
        progress: 0,
        status: "not started",
        createdAt: "2024-02-29T10:51:48.305+00:00",
        updatedAt: "2024-02-29T10:51:48.305+00:00"
    }
]
