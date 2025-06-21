export const validateEmail = (email) => {
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]+$/;
    return regex.test(email);
};

export const getInitials =