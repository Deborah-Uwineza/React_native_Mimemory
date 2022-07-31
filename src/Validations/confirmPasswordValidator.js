export function confirmPasswordValidator(confirmPassword){
    if (!confirmPassword) return "Password can't be empty."
    if (confirmPassword.length < 5) return 'Password must be at least 5 characters long.'
    return ''
}