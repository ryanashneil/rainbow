import Router from "next/router";

export default () => {
    try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            Router.push("/login");
        }
        return <div>hello {userId}</div>;
    } catch {
        return <div></div>;
    }
};
