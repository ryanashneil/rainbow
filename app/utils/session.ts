import Router from "next/router";

const ID = "userId";

export const getSession = (): string | undefined => {
    try {
        const userId = localStorage.getItem(ID);
        if (!userId) {
            Router.replace("/login");
        }
        return userId;
    } catch {
        return undefined;
    }
};

export const isLoggedIn = (): boolean => {
    try {
        return !!localStorage.getItem(ID);
    } catch {
        return false;
    }
};

export const logout = (): void => {
    try {
        return localStorage.removeItem(ID);
    } catch {
        return;
    }
};
