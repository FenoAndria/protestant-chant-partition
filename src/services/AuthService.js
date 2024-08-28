export const login = (credentials) => {
    if (credentials.password === 'bouta') {
        localStorage.setItem('isAuthenticated', true)
        location.reload()                                       
    }
}

export const logout = () => {
    localStorage.setItem('isAuthenticated', '')
    location.reload()                                       
}