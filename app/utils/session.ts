import Router from "next/router";

const ID = "userId";

export const getSession = (): string | undefined => {
    if (localStorage) {
        const userId = localStorage.getItem(ID);
        if (!userId) {
            Router.replace("/login");
        }
        return userId;
    }
};

export const logout = (): void => {
    localStorage.removeItem(ID);
};
