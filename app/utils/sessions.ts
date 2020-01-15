import Router from "next/router";

export const getSession = (): string | undefined => {
    if (localStorage) {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            Router.replace("/login");
        }
        return userId;
    }
};
