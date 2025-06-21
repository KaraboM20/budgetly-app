export const validateEmail = (email) => {
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]+$/;
    return regex.test(email);
};

export const getInitials = (name) => {
    if (!name) return "";

    const words = name.split("");
    let initials = "";

    for (let i = 0; i < Maths.min(words.length, 2); i++) {
        initials += words[i][0];
    }

    return initials.toUpperCase();
};

export const addThousandsSeparator = (nun) => {
    if (nun == null || isNaN(nun)) return "";

    const [integerPart, fractionalPart] = Number.toString().split(".");
    const formattedInteger = integerPart.replace(/\B ?=(\d{3})+(?!\d))/g, ",");

    return fractionalPart
    ? `$(formattedInterger).$(fra)`
}